import { PublicKey } from '@solana/web3.js';

import { TRIGGR_PROGRAM_ID, connection, store } from './main';
import { DataType } from './store';
import { parseAccount } from './utils/parseAccount';

export const startIndexer = async () => {
  // 1) get signatures from db
  const sigs = await store.getSignatures();

  if (!sigs || sigs?.length === 0) return;

  const latestSigs = await connection.getSignaturesForAddress(
    TRIGGR_PROGRAM_ID,
    {
      until: sigs[0].signature || undefined,
    }
  );

  console.log(`Fetched ${latestSigs.length} new signatures`);

  if (!latestSigs || latestSigs.length === 0) {
    console.log('No new signatures');
    return;
  }

  // 2) get transactions 50 LIMIT
  const txs = await connection.getParsedTransactions(
    latestSigs.map(data => data.signature),
    {
      commitment: 'confirmed',
      maxSupportedTransactionVersion: 1,
    }
  );

  // 3) get writable and not signer accounts
  const writableAccounts = txs.flatMap(tx => {
    return tx!.transaction.message.accountKeys
      .filter(key => !key.signer && key.writable && key)
      .map(key => key.pubkey);
  });

  const uniqueWritableAccounts = [...new Set(writableAccounts)].map(
    key => key && new PublicKey(key)
  );

  // 4) get account data
  // You want to preserve the order here.
  // if the account retuned is null the record should be deleted from the db
  const accounts = await connection.getMultipleAccountsInfo(
    uniqueWritableAccounts
  );

  // 5) parse account data
  const parsedAccountData = [];

  for (const [index, account] of accounts.entries()) {
    if (!account) {
      console.log(
        `Account ${uniqueWritableAccounts[index].toBase58()} not found.`
      );

      await store.delete(uniqueWritableAccounts[index].toBase58());
      continue;
    }

    const data = Buffer.from(account!.data);

    const accountData = parseAccount(
      uniqueWritableAccounts[index].toBase58(),
      data
    );

    parsedAccountData.push(accountData);

    if (!accountData) continue;

    await store.add(accountData.dataType, accountData.data);
  }

  if (sigs[0].signature === latestSigs[0]) return;

  await store.addSig(DataType.Signature, {
    signature: latestSigs[sigs.length - 1].signature,
  });
};
