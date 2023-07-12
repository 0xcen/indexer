import { PublicKey } from "@solana/web3.js";

export const PROGRAM_ID = new PublicKey(
  "41NuR2mieT98yDQpXmwDzBZ24sz9UMAieorCr8Mw9C8Q"
);

export const ACCOUNT_DISCRIMINATORS = {
  Effect: [190, 245, 129, 45, 252, 52, 73, 22],
  Trigger: [77, 155, 35, 144, 38, 14, 106, 88],
  User: [159, 117, 95, 227, 239, 151, 58, 236],
};
