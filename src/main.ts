import dotenv from "dotenv";
import { Indexer } from "./indexer";
import { Store } from "./store";
import { PROGRAM_ID } from "./consts";
dotenv.config();

async function main() {
  const store = new Store(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
  const indexer = new Indexer({
    programId: PROGRAM_ID,
    rpcUrl: process.env.RPC_URL!,
    store: store,
  });

  await indexer.seed();
}

main()
  .then(() => console.log("Done"))
  .catch(console.error);
