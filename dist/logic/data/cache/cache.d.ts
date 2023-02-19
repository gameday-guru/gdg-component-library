import { Storelike } from "../operations";
import { RxDatabase } from "rxdb";
export interface Cachelike<A, T> extends Storelike<A, T> {
}
export declare enum CacheDisposition {
    AUX = "AUX",
    MUST = "MUST",
    FINAL = "FINAL"
}
export interface DispositionalCachelike<A, T> extends Cachelike<A, T> {
    disposition?: CacheDisposition;
}
export declare class MemCache<A, T> implements DispositionalCachelike<A, T> {
    private cache;
    private safeKey;
    disposition?: CacheDisposition;
    constructor(disposition?: CacheDisposition);
    get(path: A): Promise<T | undefined>;
    set(path: A, value: T): Promise<T | undefined>;
}
export declare class LocalStorageCache<A, T> implements DispositionalCachelike<A, T> {
    disposition?: CacheDisposition;
    cacheKey: string;
    db: Promise<RxDatabase>;
    constructor(cacheKey: string, disposition?: CacheDisposition);
    getKey(path: A): string;
    get(path: A): Promise<T | undefined>;
    set(path: A, value: T): Promise<T | undefined>;
}
