import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { KeyedAccountInfo } from "@solana/web3.js";
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

    return {
      data: {
        ...data,
        pubkey: accountId,
      },
      dataType: DataType[discriminator[0] as keyof typeof DataType],
    };
  }
};
