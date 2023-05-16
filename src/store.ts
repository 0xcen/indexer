import { SupabaseClient, createClient } from "@supabase/supabase-js";
import {
  AccountInfo,
  Connection,
  PublicKey,
  Transaction,
} from "@solana/web3.js";

// Create a single supabase client for interacting with your database

export enum DataType {
  User = "users",
  Effect = "effects",
  Trigger = "triggers",
}

export class Store {
  client: SupabaseClient;
  constructor(db_url: string, db_key: string) {
    this.client = createClient(db_url, db_key);
  }

  async add(
    type: DataType,
    accountData: {
      pubkey: PublicKey;
      account: AccountInfo<Buffer>;
    }[]
  ) {
    try {
      const { data, error, status } = await this.client
        .from(type)
        .upsert(accountData)
        .select();

      if (status === 201 && data) {
        console.log(`✅ Added ${data.length} ${type} records`);
      }
      if (error) {
        throw error;
      }
    } catch (e) {
      console.error(e);
    }
  }
}
