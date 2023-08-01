import { SupabaseClient, createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

export enum DataType {
  User = "users",
  Effect = "effects",
  Trigger = "triggers",
  Signature = "signatures",
}

export class Store {
  client: SupabaseClient;
  constructor(db_url: string, db_key: string) {
    this.client = createClient(db_url, db_key);
  }

  async add(type: DataType, parsedData: any | any[]) {
    try {
      const { data, error, status } = await this.client
        .from(type)
        .upsert(parsedData)
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

  async addSig(type: DataType, parsedData: any | any[]) {
    try {
      const { data, error, status } = await this.client
        .from(type)
        .insert(parsedData)
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

  async delete(pubkey: string | any[]) {
    try {
      for (let table of Object.values(DataType)) {
        console.log("🚀 ~ file: store.ts:57 ~ Store ~ delete ~ table:", table);

        if (table === DataType.Signature) continue;

        const { error, status } = await this.client
          .from(table)
          .delete()
          .eq("pubkey", pubkey);

        if (status === 204) {
          console.log(`✅ Deleted 1 ${table} record`);
          return;
        }
        if (error) {
          console.log(
            "🚀 ~ file: store.ts:71 ~ Store ~ delete ~ error:",
            error
          );
          continue;
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async getSignatures() {
    try {
      const { data, error, status } = await this.client
        .from("signatures")
        .select()
        .order("id", { ascending: false })
        .limit(1);

      if (status === 200 && data) {
        return data;
      }
      if (error) {
        throw error;
      }
    } catch (e) {
      console.error(e);
    }
  }
}
