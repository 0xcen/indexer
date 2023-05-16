import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { DataType, Store } from "./store";
import { ACCOUNT_DISCRIMINATORS } from "./consts";
import fs from "fs";
import { Program, Wallet } from "@coral-xyz/anchor";
import { Triggr } from "triggr";
import { TriggrProgram } from "./program";
import keys from "../keypair.json";

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
    this.connection = new Connection(config.rpcUrl, "confirmed");
    this.programId = config.programId;
    this.store = config.store;

    const rawArray = new Uint8Array(keys);

    let wallet = new Wallet(Keypair.fromSecretKey(rawArray));

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
            ) == JSON.stringify(ACCOUNT_DISCRIMINATORS.effect)
        )

        .map(account => {
          const decodedEffect = this.program.coder.accounts.decode(
            "Effect",
            account.account.data
          );

          return { ...decodedEffect, pubkey: account.pubkey };
        });
      const triggers = accounts
        .filter(
          account =>
            JSON.stringify(
              Array.from(new Uint8Array(account.account.data.subarray(0, 8)))
            ) == JSON.stringify(ACCOUNT_DISCRIMINATORS.trigger)
        )
        .map(account => {
          const decodedTrigger = this.program.coder.accounts.decode(
            "Trigger",
            account.account.data
          );

          return { ...decodedTrigger, pubkey: account.pubkey };
        });

      // write triggers and effects to separate json files

      const users = accounts
        .filter(
          acc =>
            JSON.stringify(
              Array.from(new Uint8Array(acc.account.data.subarray(0, 8)))
            ) == JSON.stringify(ACCOUNT_DISCRIMINATORS.user)
        )
        .map(account => {
          const decodedUser = this.program.coder.accounts.decode(
            "User",
            account.account.data
          );
          return { ...decodedUser, pubkey: account.pubkey };
        });

      console.log(`🌱 Found ${effects.length} effects`);
      console.log(`🌱 Found ${triggers.length} triggers`);
      console.log(`🌱 Found ${users.length} users`);

      const promises: Promise<void>[] = [];

      if (effects.length > 0) {
        promises.push(this.store.add(DataType.Effect, effects));
      }

      if (triggers.length > 0) {
        promises.push(this.store.add(DataType.Trigger, triggers));
      }

      if (users.length > 0) {
        promises.push(this.store.add(DataType.User, users));
      }

      await Promise.all(promises);

      console.log("✅ Store seeded");
    } catch (error) {
      console.error("Error seeding store: ", error);
    }
  }

  start() {
    // start server
  }
}
