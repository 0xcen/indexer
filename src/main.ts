import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import dotenv from "dotenv";
import { TRIGGR_PROGRAM_ID } from "./consts";
import { TriggrProgram } from "./program";
import { DataType, Store } from "./store";
import { parseAccount } from "./utils/parseAccount";

dotenv.config();

async function main() {
  const store = new Store(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

  const connection = new Connection(process.env.RPC_URL!, {
    commitment: "confirmed",
  });
  const program = new TriggrProgram(
    connection,
    new NodeWallet(Keypair.generate())
  ).load();

  // on startup fetch last signature before getting program accounts

  const seedDb = async () => {
    try {
      // 1) persist latest signature
      const latestSig = await connection.getConfirmedSignaturesForAddress2(
        TRIGGR_PROGRAM_ID,
        { limit: 1 }
      );

      await store.addSig(DataType.Signature, {
        signature: latestSig[0].signature,
      });

      // 2) get program accounts
      const accounts = await connection.getProgramAccounts(TRIGGR_PROGRAM_ID, {
        commitment: "confirmed",
      });

      const parsedAccounts = accounts.map(account => {
        const parsedData = parseAccount(
          program,
          account.pubkey.toBase58(),
          account.account.data
        );

        if (!parsedData) return null;

        return parsedData;
      });

      const separatedAccounts: { [key: string]: any[] } = parsedAccounts.reduce(
        (acc, curr) => {
          if (!curr) return acc;

          const discriminator = curr.dataType;

          if (!acc[discriminator]) {
            acc[discriminator] = [];
          }

          acc[discriminator].push(curr);

          return acc;
        },
        {} as any
      );

      for (const [discriminator, accounts] of Object.entries(
        separatedAccounts
      )) {
        await store.add(
          discriminator as DataType,
          accounts.map(a => a.data)
        );
      }
    } catch (error) {
      console.log("🚀 ~ file: main.ts:43 ~ seedDb ~ error:", error);
    }
  };

  const runIndexer = async () => {
    // 1) get signatures from db
    const sigs = await store.getSignatures();

    if (!sigs || sigs?.length === 0) return;

    const latestSigs = (
      await connection.getSignaturesForAddress(TRIGGR_PROGRAM_ID, {
        until: sigs[0].signature || undefined,
      })
    ).reverse();

    if (!latestSigs || latestSigs.length === 0) {
      console.log("No new signatures");
      return;
    }

    // 2) get transactions 50 LIMIT
    const txs = await connection.getParsedTransactions(
      latestSigs.map(data => data.signature),
      {
        commitment: "confirmed",
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
        program,
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

  try {
    setInterval(async () => {
      await runIndexer();
    }, 10000);
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(() => {
    console.log("🚀 Indexer started");
  })
  .catch(console.error);
