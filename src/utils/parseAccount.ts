import { Program } from "@coral-xyz/anchor";
import { ACCOUNT_DISCRIMINATORS } from "../consts";
import { DataType } from "../store";
import { Triggr } from "../triggr";

export const parseAccount = (
  program: Program<Triggr>,
  accountId: string,
  rawData: Buffer
) => {
  const discriminator = Object.entries(ACCOUNT_DISCRIMINATORS).find(
    d =>
      JSON.stringify(d[1]) ==
      JSON.stringify(Array.from(new Uint8Array(rawData.subarray(0, 8))))
  );

  if (discriminator) {
    const data = program.coder.accounts.decode(discriminator[0], rawData);

    let parsedData: any = {};

    switch (discriminator[0]) {
      case "Trigger":
        parsedData = {
          created_at: data.createdAt,
          usage_stats: data.usageStats,
          effect_count: data.effectCount,
          own_index: data.ownIndex,
          workflow_title: data.workflowTitle,
          authority: data.authority,
          conditions: data.conditions,
          status: data.status,
          lifetime: data.lifetime,
        };
        break;
      case "Effect":
        parsedData = {
          ixs: data.ixs,
          status: data.status,
          authority: data.authority,
          created_at: data.createdAt,
          updated_at: data.updatedAt,
          usage_stats: data.usageStats,
          own_index: data.ownIndex,
          parent_trigger: data.parentTrigger,
          last_updated_time: data.lastUpdatedTime,
          lut: data.lut,
        };
        break;
      case "User":
        parsedData = {
          trigger_count: data.triggerCount,
          effect_count: data.effectCount,
          active_triggers: data.activeTriggers,
        };
        break;

      default:
        break;
    }

    return {
      data: {
        ...parsedData,
        pubkey: accountId,
      },
      dataType: DataType[discriminator[0] as keyof typeof DataType],
    };
  }
};
