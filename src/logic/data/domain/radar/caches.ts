import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import { getRadarTable } from "../../../../util/rpc";
import { MultiCache } from "../../../data/cache/multicache";

export class GamedayGuruRadar implements DispositionalCachelike<undefined, ontology.RadarTablelike> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<ontology.RadarTablelike | undefined> {

        return getRadarTable();
        
    }

    async set(path: undefined, value: ontology.RadarTablelike): Promise<ontology.RadarTablelike | undefined> {
        return undefined;
    }
}

export const RadarMultiCache = new MultiCache<undefined, ontology.RadarTablelike>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("Radars", CacheDisposition.AUX),
    new GamedayGuruRadar()
]);