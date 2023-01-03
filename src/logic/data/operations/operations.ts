export interface Storelike<A, T>{
    get(path : A) : Promise<T|undefined>;
    set(path : A, value : T) : Promise<T|undefined>;
}

export interface MultiStorelike<A, T> extends Storelike<A, T> {
    getThrough(path : A) : Promise<T|undefined>;
    setThrough(path : A, value : T) : Promise<T|undefined>;
}


export enum FetchPolicy {
    FIFO = "FIFO",
    DRACE = "DRACE",
    EAGER = "EAGER"
}

export enum ListenMessage {
    END = "END",
    CONTINUE = "CONTINUE"
}

export interface Listenerlike<A, T> {
    listen(path : A, cb : (data : T | undefined, msg : ListenMessage)=>void|Promise<void>, policy ? : FetchPolicy) : void;
}

export interface Monitorlike<A, T> {
    // monitor(path : A, cb : (data : T | undefined, msg : ListenMessage)=>void|Promise<void>, policy ? : FetchPolicy) : void;
}

export interface PowerStorelike<A, T> extends Storelike<A,T>, Listenerlike<A, T>, Monitorlike<A,T> { 

}

export interface MultiPowerStorelike<A, T> extends MultiStorelike<A,T>, Listenerlike<A, T>, Monitorlike<A,T> { 

}