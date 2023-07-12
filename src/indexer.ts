import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { DataType, Store } from "./store";
import { ACCOUNT_DISCRIMINATORS } from "./consts";
import { Program, Wallet } from "@coral-xyz/anchor";
import { Triggr } from "src/triggr";
import { TriggrProgram } from "./program";
import keys from "../keypair.json";
import { parseAccount } from "./utils/parseAccount";
import fs from "fs";

interface IndexerConfig {
  programId: PublicKey;
  rpcUrl: string;
  store: Store;
}

export class Indexer {
  connection: Connection;
  programId: PublicKey;
  program: Program<Triggr>;
  store: Store;

  constructor(config: IndexerConfig) {
    this.connection = new Connection(config.rpcUrl, {
      wsEndpoint: config.rpcUrl.replace("http", "ws"),
    });
    this.programId = config.programId;
    this.store = config.store;

    const buffer = fs.readFileSync("./keypair.json", "utf-8");

    const rawArray = new Uint8Array(JSON.parse(buffer));

    let wallet = new Wallet(Keypair.fromSeed(rawArray.subarray(0, 32)));

    this.program = new TriggrProgram(this.connection, wallet).load();
  }

  async seed() {
    try {
      // gpa
      const accounts = await this.connection.getProgramAccounts(this.programId);

      console.log(`🌱 Seeding store with ${accounts.length} accounts`);

      const effects = accounts
        .filter(
          account =>
            JSON.stringify(
              Array.from(new Uint8Array(account.account.data.subarray(0, 8)))
            ) == JSON.stringify(ACCOUNT_DISCRIMINATORS.Effect)
        )

        .map(account => {
          const decodedEffect = parseAccount(
            this.program,
            account.pubkey.toBase58(),
            account.account.data
          );

          return { ...decodedEffect };
        });
      const triggers = accounts
        .filter(
          account =>
            JSON.stringify(
              Array.from(new Uint8Array(account.account.data.subarray(0, 8)))
            ) == JSON.stringify(ACCOUNT_DISCRIMINATORS.Trigger)
        )
        .map(account => {
          const decodedTrigger = parseAccount(
            this.program,
            account.pubkey.toBase58(),
            account.account.data
          );

          return { ...decodedTrigger };
        });

      // write triggers and effects to separate json files

      const users = accounts
        .filter(
          acc =>
            JSON.stringify(
              Array.from(new Uint8Array(acc.account.data.subarray(0, 8)))
            ) == JSON.stringify(ACCOUNT_DISCRIMINATORS.User)
        )
        .map(account => {
          const decodedUser = parseAccount(
            this.program,
            account.pubkey.toBase58(),
            account.account.data
          );

          return {
            ...decodedUser,
          };
        });

      const promises: Promise<void>[] = [];

      if (effects.length > 0) {
        promises.push(this.store.add(DataType.Effect, effects));
      }

      if (triggers.length > 0) {
        promises.push(this.store.add(DataType.Trigger, triggers));
      }

      if (users.length > 0) {
        promises.push(this.store.add(DataType.User, users as any));
      }

      await Promise.all(promises);

      console.log("✅ Store seeded");
    } catch (error) {
      console.error("Error seeding store: ", error);
    }
  }

  async start() {
    this.connection.onProgramAccountChange(
      this.programId,
      async change => {
        console.log("🔁 Program account change detected");

        const parsedAccount = parseAccount(
          this.program,
          change.accountId.toBase58(),
          change.accountInfo.data
        );
        if (!parsedAccount) return;

        await this.store.add(parsedAccount.dataType, parsedAccount?.data);

        console.log(`✅ Added ${parsedAccount.dataType} record`);
      },
      "confirmed"
    );
  }
}
