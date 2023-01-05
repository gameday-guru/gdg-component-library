import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import { getConfirmedTos } from "../../../../util/firebase";
import { MultiCache } from "../../../data/cache/multicache";

export class ConfirmedTos implements DispositionalCachelike<string, boolean> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: string): Promise<boolean | undefined> {

        return getConfirmedTos(path);
        
    }

    async set(path: string, value: boolean): Promise<boolean | undefined> {
        return undefined;
    }
}

export const ConfirmedTosMultiCache = new MultiCache<string, boolean>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("ConfirmedTos", CacheDisposition.AUX),
    new ConfirmedTos()
]);
