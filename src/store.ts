import { SupabaseClient, createClient } from "@supabase/supabase-js";

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

  async add(type: DataType, parsedData: any | any[]) {
    console.log("🚀 ~ file: store.ts:18 ~ Store ~ add ~ DataType:", DataType);
    console.log(
      "🚀 ~ file: store.ts:18 ~ Store ~ add ~ parsedData:",
      parsedData
    );

    const { data: nextData } = parsedData;
    console.log("🚀 ~ file: store.ts:19 ~ Store ~ add ~ nextData:", nextData);
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
}
