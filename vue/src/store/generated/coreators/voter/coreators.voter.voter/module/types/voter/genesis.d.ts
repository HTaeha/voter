import { Writer, Reader } from "protobufjs/minimal";
import { Poll } from "../voter/poll";
import { Vote } from "../voter/vote";
export declare const protobufPackage = "coreators.voter.voter";
/** GenesisState defines the voter module's genesis state. */
export interface GenesisState {
    pollList: Poll[];
    pollCount: number;
    voteList: Vote[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    voteCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
