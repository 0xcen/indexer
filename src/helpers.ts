import { connection, store, program, TRIGGR_PROGRAM_ID } from './main';
import { DataType } from './store';
import { parseAccount } from './utils/parseAccount';

export const seedDb = async () => {
  try {
    await store.client.from('users').delete().neq('pubkey', '0');
    await store.client.from('signatures').delete().neq('signature', '0');
    await store.client.from('tasks').delete().neq('pubkey', '0');
    await store.client.from('triggers').delete().neq('pubkey', '0');

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
      commitment: 'confirmed',
    });

    const parsedAccounts = accounts.map(account => {
      const parsedData = parseAccount(
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

    for (const [discriminator, accounts] of Object.entries(separatedAccounts)) {
      await store.add(
        discriminator as DataType,
        accounts.map(a => a.data)
      );
    }
  } catch (error) {
    console.log('🚀 ~ file: main.ts:43 ~ seedDb ~ error:', error);
  }
};

export const getAccounts = async () => {
  try {
    // 2) get program accounts
    const accounts = await connection.getProgramAccounts(TRIGGR_PROGRAM_ID, {
      commitment: 'confirmed',
    });

    const parsedAccounts = accounts.map(account => {
      const parsedData = parseAccount(
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

    const keys = Object.values(separatedAccounts)
      .flat()
      .flatMap(acc => acc.data.pubkey);
    return keys;
  } catch (error) {
    console.log('🚀 ~ file: helpers.ts:104 ~ getAccounts ~ error:', error);
  }
};

export const getStoreAccounts = async () => {
  try {
    const { data: triggers } = await store.client
      .from('triggers')
      .select('pubkey');
    const { data: users } = await store.client.from('users').select('pubkey');
    const { data: tasks } = await store.client.from('tasks').select('pubkey');

    const accounts = {
      triggers,
      users,
      tasks,
    };

    const keys = Object.values(accounts)
      .flat()
      .flatMap(account => account?.pubkey);
    return keys;
  } catch (error) {
    console.log('🚀 ~ file: helpers.ts:120 ~ getStoreAccounts ~ error:', error);
  }
};
