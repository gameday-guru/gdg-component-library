import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { MultiCache } from "../../../data/cache/multicache";
export declare class ConfirmedTos implements DispositionalCachelike<string, boolean> {
    disposition?: CacheDisposition | undefined;
    get(path: string): Promise<boolean | undefined>;
    set(path: string, value: boolean): Promise<boolean | undefined>;
}
export declare const ConfirmedTosMultiCache: MultiCache<string, boolean>;
