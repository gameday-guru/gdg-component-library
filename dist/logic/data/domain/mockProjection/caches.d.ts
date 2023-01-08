import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MockProjectionArgslike } from "../../../../util/rpc";
import { MultiCache } from "../../../data/cache/multicache";
export declare class GamedayGuruMockProjection implements DispositionalCachelike<MockProjectionArgslike, ontology.ProjectionEntrylike> {
    disposition?: CacheDisposition | undefined;
    get(path: MockProjectionArgslike): Promise<ontology.ProjectionEntrylike | undefined>;
    set(path: MockProjectionArgslike, value: ontology.ProjectionEntrylike): Promise<ontology.ProjectionEntrylike | undefined>;
}
export declare const MockProjectionMultiCache: MultiCache<MockProjectionArgslike, ontology.ProjectionEntrylike>;
