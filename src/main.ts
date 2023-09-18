import dotenv from 'dotenv';
dotenv.config();
import { Connection } from '@solana/web3.js';
import { Triggr, TriggrClient, TriggrConfig } from '@triggr/sdk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { seedDb } from './helpers';
import { startIndexer } from './indexer';
import { Store } from './store';

export const store = new Store(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export const connection = new Connection(process.env.RPC_URL!, {
  commitment: 'confirmed',
});

const config = new TriggrConfig(connection);

const triggr = new TriggrClient(config);

export const TRIGGR_PROGRAM_ID = triggr.TRIGGR_PROGRAM_ID;

export const program = triggr.program;

async function main() {
  const argv = await yargs(hideBin(process.argv)).options({
    seed: {
      alias: 's',
      type: 'boolean',
      description: 'Seed the database with current program accounts',
    },
  }).argv;

  if (argv.seed) {
    console.log('Seeding database');
    await seedDb();
    setInterval(async () => {
      await startIndexer().catch(console.error);
    }, 10000);
  } else {
    console.log('Starting indexer');
    setInterval(async () => {
      await startIndexer().catch(console.error);
    }, 10000);
  }
}

main()
  .then(() => {})
  .catch(console.error);
