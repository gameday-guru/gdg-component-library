import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import { getMockProjection, MockProjectionArgslike } from "../../../../util/rpc";
import { MultiCache } from "../../../data/cache/multicache";

export class GamedayGuruMockProjection implements DispositionalCachelike<MockProjectionArgslike, ontology.ProjectionEntrylike> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: MockProjectionArgslike): Promise<ontology.ProjectionEntrylike | undefined> {

        return getMockProjection(path);
        
    }

    async set(path: MockProjectionArgslike, value: ontology.ProjectionEntrylike): Promise<ontology.ProjectionEntrylike | undefined> {
        return undefined;
    }
}

export const MockProjectionMultiCache = new MultiCache<MockProjectionArgslike, ontology.ProjectionEntrylike>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("Projections", CacheDisposition.AUX),
    new GamedayGuruMockProjection()
]);