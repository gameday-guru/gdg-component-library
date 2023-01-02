import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../data/cache/cache";
import { ontology } from "../../../util";
import { getProjectionTable } from "../../../util/rpc";
import { MultiCache } from "../../data/cache/multicache";

export class GamedayGuruProjection implements DispositionalCachelike<undefined, ontology.ProjectionTablelike> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<ontology.ProjectionTablelike | undefined> {

        return getProjectionTable();
        
    }

    async set(path: undefined, value: ontology.ProjectionTablelike): Promise<ontology.ProjectionTablelike | undefined> {
        return undefined;
    }
}

export const ProjectionMultiCache = new MultiCache<undefined, ontology.ProjectionTablelike>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache(CacheDisposition.AUX),
    new GamedayGuruProjection()
]);