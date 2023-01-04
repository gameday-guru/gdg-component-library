import React, { useEffect, useMemo, useRef, useState, useReducer, Context, createContext, useContext } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { FetchPolicy, MultiPowerStorelike } from "../../data/operations";

export const jsonToArgString = (args : any)=>JSON.stringify(args);

// TODO: refactor to global singleton, although the caches should technically already support this
export interface StoreMapContextlike {
    context : {[key : string] : any};
    setContext : (
        mod: (context : StoreMapContextlike['context']
    )=>StoreMapContextlike['context'])=>StoreMapContextlike['context'];
    subscribe : (sym : symbol, tick : ()=>void)=>void;
    unsubscribe : (sym : symbol)=>void;
}

export interface Subscriberslike {
    [key : symbol] : ()=>void;
}

export const StoreMap : WeakMap<MultiPowerStorelike<any, any>, StoreMapContextlike['context']> = new WeakMap();
export const StoreContextMap : WeakMap<MultiPowerStorelike<any, any>, Context<StoreMapContextlike>> = new WeakMap();
export const StoreSubscribers : WeakMap<MultiPowerStorelike<any, any>, Subscriberslike> = new WeakMap();
export const FetchProgress : WeakMap<MultiPowerStorelike<any, any>, {[key : string] : boolean}> = new WeakMap();

export const gorcStore = (store : MultiPowerStorelike<any, any>) : StoreMapContextlike['context'] =>{
    const context = StoreMap.get(store);
    if(!context) StoreMap.set(store, {});
    return StoreMap.get(store) as StoreMapContextlike['context'];
};

export const gorcSubscribers = (store : MultiPowerStorelike<any, any>) : Subscriberslike =>{
    const context = StoreSubscribers.get(store);
    if(!context) StoreSubscribers.set(store, {});
    return StoreSubscribers.get(store) as Subscriberslike;
};

export const runSubscribers = (store : MultiPowerStorelike<any, any>) : void =>{
    const subscribers = gorcSubscribers(store);
    for(const key of Reflect.ownKeys(subscribers))
        subscribers[key as symbol]();
};

export const subscribeStore = (
    store : MultiPowerStorelike<any, any>,
    sym : symbol,
    tick : ()=>void
)=>{
    const subscribers = gorcSubscribers(store);
    subscribers[sym] = tick;
}

export const unsubscribeStore = (
    store : MultiPowerStorelike<any, any>,
    sym : symbol
)=>{
    const subscribers = gorcSubscribers(store);
    delete subscribers[sym];
}

/*export const gorcStoreContext = (store : MultiPowerStorelike<any, any>) : Context<StoreMapContextlike> =>{
    
    const context = StoreContextMap.get(store);
    if(context) return context;

    const inner : StoreMapContextlike = {
        context : gorcStore(store),
        setContext : (mod)=>{
            let context = StoreMap.get(store) as Context<StoreMapContextlike>;
            const newContext = mod(context||{});
            StoreMap.set(store, newContext);
            console.log("Setting store:", newContext, StoreMap.get(store));
            runSubscribers(store);
            return newContext;
        },
        subscribe : (sym, tick)=>subscribeStore(store, sym, tick),
        unsubscribe : (sym)=>unsubscribeStore(store, sym)
    }

    StoreContextMap.set(store, createContext(inner));

    return StoreContextMap.get(store) as Context<StoreMapContextlike>;

};*/


export const useMultiPowerStore = <A, T>(
    store : MultiPowerStorelike<A, T>,
    toArgString : (a : A)=>string = jsonToArgString
) : {

    get : (a : A) => T | undefined;

}=>{

    const [symbol] = useState(Symbol());
    const [tick, increment] = useReducer((x)=>x+1, 0);

    /*const globalContext = gorcStoreContext(store);

    const {
        context : getStore,
        setContext : setStore,
        subscribe,
        unsubscribe
    } = useContext(globalContext as Context<StoreMapContextlike>);*/

    const getStore = gorcStore(store);
    const setStore = (mod: (context : StoreMapContextlike['context'])=>StoreMapContextlike['context'])=>{
        let context = StoreMap.get(store) as Context<StoreMapContextlike>;
        const newContext = mod(context||{});
        StoreMap.set(store, newContext);
        // console.log("Setting store:", newContext, StoreMap.get(store));
        runSubscribers(store);
        return newContext;
    }


    // console.log("RERENDERING CONTEXT", getStore, StoreMap.get(store), getStore === StoreMap.get(store));

    useEffect(()=>{

        subscribeStore(store, symbol, increment);
        return ()=>unsubscribeStore(store, symbol);

    }, []);

    /*const [getStore, setStore] = useReducer((
        oldStore : {[key : string] : T | undefined},
        mod : (oldStore : {[key : string] : T | undefined})=> {[key : string] : T | undefined}
    )=>{
        return mod(oldStore);
    }, {});*/
    const fetchProgress = useRef<{[key : string] : boolean}>({});

    const get = (arg : A) : T | undefined =>{

        // the first one through will get to run the drace
        // all of the others will use the Eager fetch
        let fetchPolicy : FetchPolicy = FetchPolicy.DRACE;

        // check that the resource has not already been requested
        const argStr = toArgString(arg)
        if(fetchProgress.current[argStr]) return getStore[argStr];
        fetchProgress.current[argStr] = true;
        
        // check the global fetch
        let globalFetch = FetchProgress.get(store);
        if(!globalFetch){
            FetchProgress.set(store, {});
            globalFetch = FetchProgress.get(store);
        } else if(globalFetch[argStr]) fetchPolicy = FetchPolicy.EAGER;

        // check before
        if(!getStore?.[argStr]){

            store.listen(
                arg, 
                (data)=>{
                    setStore((oldStore)=>({
                        ...oldStore,
                        [argStr] : data
                    }));
                },
                fetchPolicy
            );
        }

        return getStore[argStr];

    }

    return useMemo(()=>({
        get
    }), [getStore])

}