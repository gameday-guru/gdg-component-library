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
    DRACE = "DRACE"
}

export enum ListenMessage {
    END = "END",
    CONTINUE = "CONTINUE"
}

export interface Listenerlike<A, T> extends Storelike<A, T> {
    listen(path : A, cb : (data : T | undefined, msg : ListenMessage)=>void|Promise<void>, policy ? : FetchPolicy) : void;
}

export interface MultiListenerlike<A, T> extends MultiStorelike<A, T> {
    listen(path : A, cb : (data : T | undefined, msg : ListenMessage)=>void|Promise<void>, policy ? : FetchPolicy) : void;
}