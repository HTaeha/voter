// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateVote: (data) => ({ typeUrl: "/coreators.voter.voter.MsgUpdateVote", value: data }),
        msgCreatePoll: (data) => ({ typeUrl: "/coreators.voter.voter.MsgCreatePoll", value: data }),
        msgDeleteVote: (data) => ({ typeUrl: "/coreators.voter.voter.MsgDeleteVote", value: data }),
        msgDeletePoll: (data) => ({ typeUrl: "/coreators.voter.voter.MsgDeletePoll", value: data }),
        msgCreateVote: (data) => ({ typeUrl: "/coreators.voter.voter.MsgCreateVote", value: data }),
        msgUpdatePoll: (data) => ({ typeUrl: "/coreators.voter.voter.MsgUpdatePoll", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
