// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateVote } from "./types/voter/tx";
import { MsgCreatePoll } from "./types/voter/tx";
import { MsgDeleteVote } from "./types/voter/tx";
import { MsgDeletePoll } from "./types/voter/tx";
import { MsgCreateVote } from "./types/voter/tx";
import { MsgUpdatePoll } from "./types/voter/tx";


const types = [
  ["/coreators.voter.voter.MsgUpdateVote", MsgUpdateVote],
  ["/coreators.voter.voter.MsgCreatePoll", MsgCreatePoll],
  ["/coreators.voter.voter.MsgDeleteVote", MsgDeleteVote],
  ["/coreators.voter.voter.MsgDeletePoll", MsgDeletePoll],
  ["/coreators.voter.voter.MsgCreateVote", MsgCreateVote],
  ["/coreators.voter.voter.MsgUpdatePoll", MsgUpdatePoll],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateVote: (data: MsgUpdateVote): EncodeObject => ({ typeUrl: "/coreators.voter.voter.MsgUpdateVote", value: data }),
    msgCreatePoll: (data: MsgCreatePoll): EncodeObject => ({ typeUrl: "/coreators.voter.voter.MsgCreatePoll", value: data }),
    msgDeleteVote: (data: MsgDeleteVote): EncodeObject => ({ typeUrl: "/coreators.voter.voter.MsgDeleteVote", value: data }),
    msgDeletePoll: (data: MsgDeletePoll): EncodeObject => ({ typeUrl: "/coreators.voter.voter.MsgDeletePoll", value: data }),
    msgCreateVote: (data: MsgCreateVote): EncodeObject => ({ typeUrl: "/coreators.voter.voter.MsgCreateVote", value: data }),
    msgUpdatePoll: (data: MsgUpdatePoll): EncodeObject => ({ typeUrl: "/coreators.voter.voter.MsgUpdatePoll", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
