import { Context } from "react";
import { MultiPowerStorelike } from "../../data/operations";
export declare const jsonToArgString: (args: any) => string;
export interface StoreMapContextlike {
    context: {
        [key: string]: any;
    };
    setContext: (mod: (context: StoreMapContextlike['context']) => StoreMapContextlike['context']) => StoreMapContextlike['context'];
    subscribe: (sym: symbol, tick: () => void) => void;
    unsubscribe: (sym: symbol) => void;
}
export interface Subscriberslike {
    [key: symbol]: () => void;
}
export declare const StoreMap: WeakMap<MultiPowerStorelike<any, any>, StoreMapContextlike['context']>;
export declare const StoreContextMap: WeakMap<MultiPowerStorelike<any, any>, Context<StoreMapContextlike>>;
export declare const StoreSubscribers: WeakMap<MultiPowerStorelike<any, any>, Subscriberslike>;
export declare const FetchProgress: WeakMap<MultiPowerStorelike<any, any>, {
    [key: string]: boolean;
}>;
export declare const gorcStore: (store: MultiPowerStorelike<any, any>) => StoreMapContextlike['context'];
export declare const gorcSubscribers: (store: MultiPowerStorelike<any, any>) => Subscriberslike;
export declare const runSubscribers: (store: MultiPowerStorelike<any, any>) => void;
export declare const subscribeStore: (store: MultiPowerStorelike<any, any>, sym: symbol, tick: () => void) => void;
export declare const unsubscribeStore: (store: MultiPowerStorelike<any, any>, sym: symbol) => void;
export declare const useMultiPowerStore: <A, T>(store: MultiPowerStorelike<A, T>, toArgString?: (a: A) => string) => {
    get: (a: A) => T | undefined;
};
