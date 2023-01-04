import { DispositionalCachelike } from "./cache";
import { MultiPowerStorelike, FetchPolicy, ListenMessage } from "../operations";
export interface MultiCachelike<A, T> extends DispositionalCachelike<A, T>, MultiPowerStorelike<A, T> {
    pushCache(...cache: DispositionalCachelike<A, T>[]): void;
    popCache(): DispositionalCachelike<A, T> | undefined;
    getThrough(path: A): Promise<T | undefined>;
    setThrough(path: A, value: T): Promise<T | undefined>;
}
export declare class MultiCache<A, T> implements MultiCachelike<A, T> {
    private cacheOrder;
    private monitors;
    private safeKey;
    /**
     *
     * @param cacheOrder
     */
    constructor(cacheOrder?: DispositionalCachelike<A, T>[]);
    /**
     *
     * @param cache
     */
    pushCache(...cache: DispositionalCachelike<A, T>[]): void;
    /**
     *
     * @returns
     */
    popCache(): DispositionalCachelike<A, T> | undefined;
    /**
     *
     * @param path
     * @param cb
     * @returns
     */
    dispositionalRaceGet(path: A, cb: ((data: T | undefined, msg: ListenMessage) => void | Promise<void>)): Promise<void>;
    /**
     *
     * @param path
     * @param cb
     * @returns
     */
    dispositionalFifoGet(path: A, cb: ((data: T | undefined, msg: ListenMessage) => void | Promise<void>)): Promise<void>;
    /**
    *
    * @param path
    * @param cb
    * @returns
    */
    eagerGet(path: A, cb: ((data: T | undefined, msg: ListenMessage) => void | Promise<void>)): Promise<void>;
    /**
     *
     * @param path
     * @param cb
     * @param policy
     */
    listen(path: A, cb: ((data: T | undefined, msg: ListenMessage) => void | Promise<void>), policy?: FetchPolicy): void;
    /**
     *
     * @param path
     * @returns
     */
    getThrough(path: A): Promise<T | undefined>;
    /**
     *
     * @param path
     * @returns
     */
    get(path: A): Promise<T | undefined>;
    /**
     *
     * @param path
     * @param value
     * @returns
     */
    setThrough(path: A, value: T): Promise<T | undefined>;
    /**
     *
     * @param path
     * @param value
     * @returns
     */
    set(path: A, value: T): Promise<T | undefined>;
}
