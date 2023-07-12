import dotenv from "dotenv";
import { Indexer } from "./indexer";
import { Store } from "./store";
import readline from "readline";
import { PROGRAM_ID } from "./consts";
dotenv.config();

async function main() {
  const store = new Store(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
  const indexer = new Indexer({
    programId: PROGRAM_ID,
    rpcUrl: process.env.RPC_URL!,
    store: store,
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "👀 Indexer ~ ",
  });

  console.log("Welcome to the indexer CLI");

  rl.prompt();

  rl.on("line", async line => {
    switch (line.trim()) {
      case "start":
        indexer.start();
        console.log("🚂 Indexer started");
        break;
      case "seed":
        console.log("Seeding store...");
        await indexer.seed();
        break;
      case "quit":
        rl.close();
        break;
      default:
        console.log(`'${line.trim()}' is not a recognized command.`);
        break;
    }
    rl.prompt();
  }).on("close", () => {
    console.log("🛌 Shutting down...");
    process.exit(0);
  });
}

main().catch(console.error);
