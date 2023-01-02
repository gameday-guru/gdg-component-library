import { Storelike } from "../../operations";

export interface Cachelike<A,T> extends Storelike<A, T> {

}

export enum CacheDisposition {
    AUX = "AUX",
    MUST = "MUST",
    FINAL = "FINAL",
}

export interface DispositionalCachelike<A, T> extends Cachelike<A, T> {
    disposition ? : CacheDisposition;
}

export class MemCache<A, T> implements DispositionalCachelike<A, T> {

    private cache : Map<A|Symbol, T> = new Map();
    private safeKey : Symbol; // if map is a nullary

    disposition ? : CacheDisposition;

    constructor(disposition ? : CacheDisposition){
        this.disposition = disposition;
        this.safeKey = Symbol();
    }

    async get(path: A): Promise<T | undefined> {

        return this.cache.get(path||this.safeKey);
        
    }

    async set(path: A, value: T): Promise<T | undefined> {
        
        this.cache.set(path||this.safeKey, value);
        return this.get(path);

    }

}

export class LocalStorageCache<A, T> implements DispositionalCachelike<A, T> {

    disposition ? : CacheDisposition;
    cacheKey : string;

    constructor(cacheKey : string, disposition ? : CacheDisposition){
        this.cacheKey = cacheKey;
        this.disposition = disposition;
    }

    getKey(path : A) : string {
        return `${this.cacheKey}::` + JSON.stringify(path)
    }

    async get(path: A): Promise<T | undefined> {

        const json = window.localStorage.getItem(JSON.stringify(this.getKey(path)));
        if(json === null) return undefined;
        return JSON.parse(json) as T;
        
    }

    async set(path: A, value: T): Promise<T | undefined> {

        window.localStorage.setItem(JSON.stringify(this.getKey(path)), JSON.stringify(value));
        return this.get(path);

    }

}