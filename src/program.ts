import { PublicKey } from "@solana/web3.js";
import { Triggr } from "./triggr";
import Idl from "../triggr.json";

import * as anchor from "@coral-xyz/anchor";

export class TriggrProgram {
  constructor(
    public connection: anchor.web3.Connection,
    public wallet: anchor.Wallet,
    public program?: anchor.Program<Triggr>
  ) {}

  load() {
    const provider = new anchor.AnchorProvider(
      this.connection,
      this.wallet,
      {}
    );

    const programId = new PublicKey(
      "41NuR2mieT98yDQpXmwDzBZ24sz9UMAieorCr8Mw9C8Q"
    );

    this.program = new anchor.Program(
      Idl as anchor.Idl,
      programId,
      provider
    ) as unknown as anchor.Program<Triggr>;

    return this.program;
  }
}
