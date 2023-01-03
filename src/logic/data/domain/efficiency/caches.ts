import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import { getEfficiencyTable } from "../../../../util/rpc";
import { MultiCache } from "../../../data/cache/multicache";

export class GamedayGuruEfficiency implements DispositionalCachelike<undefined, ontology.EfficiencyTablelike> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<ontology.EfficiencyTablelike | undefined> {

        return getEfficiencyTable();
        
    }

    async set(path: undefined, value: ontology.EfficiencyTablelike): Promise<ontology.EfficiencyTablelike | undefined> {
        return undefined;
    }
}

export const EfficiencyMultiCache = new MultiCache<undefined, ontology.EfficiencyTablelike>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("Efficiency", CacheDisposition.AUX),
    new GamedayGuruEfficiency()
]);