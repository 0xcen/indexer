import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { Connection, Keypair } from "@solana/web3.js";
import dotenv from "dotenv";
import { startIndexer } from "./indexer";
import { TriggrProgram } from "./program";
import { Store } from "./store";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { seedDb } from "./helpers";

dotenv.config();
export const store = new Store(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export const connection = new Connection(process.env.RPC_URL!, {
  commitment: "confirmed",
});
export const program = new TriggrProgram(
  connection,
  new NodeWallet(Keypair.generate())
).load();

async function main() {
  const argv = await yargs(hideBin(process.argv)).options({
    seed: {
      alias: "s",
      type: "boolean",
      description: "Seed the database with current program accounts",
    },
  }).argv;

  if (argv.seed) {
    console.log("Seeding database");
    await seedDb();
    setInterval(async () => {
      await startIndexer().catch(console.error);
    }, 10000);
  } else {
    console.log("Starting indexer");
    setInterval(async () => {
      await startIndexer().catch(console.error);
    }, 10000);
  }
}

main()
  .then(() => {})
  .catch(console.error);
