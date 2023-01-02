import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../data/cache/cache";
import { ontology } from "../../../util";
import { getGamesByDate } from "../../../util/firebase";
import { MultiCache } from "../../data/cache/multicache";

export class SportsDataioGamesByDate implements DispositionalCachelike<Date, ontology.GameByDatelike[]> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: Date): Promise<ontology.GameByDatelike[] | undefined> {

        return getGamesByDate(path);
        
    }

    async set(path: Date, value: ontology.GameByDatelike[]): Promise<ontology.GameByDatelike[] | undefined> {
        return undefined;
    }
}

export const GamesByDateMultiCache = new MultiCache<Date, ontology.GameByDatelike[]>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache(CacheDisposition.AUX),
    new SportsDataioGamesByDate()
]);