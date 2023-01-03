import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import { getTrendTable } from "../../../../util/rpc";
import { MultiCache } from "../../../data/cache/multicache";

export class GamedayGuruTrend implements DispositionalCachelike<undefined, ontology.TrendTablelike> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<ontology.TrendTablelike | undefined> {

        return getTrendTable();
        
    }

    async set(path: undefined, value: ontology.TrendTablelike): Promise<ontology.TrendTablelike | undefined> {
        return undefined;
    }
}

export const TrendMultiCache = new MultiCache<undefined, ontology.TrendTablelike>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("Trends", CacheDisposition.AUX),
    new GamedayGuruTrend()
]);