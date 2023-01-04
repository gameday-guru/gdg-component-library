import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MultiCache } from "../../../data/cache/multicache";
export declare class GamedayGuruProjection implements DispositionalCachelike<undefined, ontology.ProjectionTablelike> {
    disposition?: CacheDisposition | undefined;
    get(path: undefined): Promise<ontology.ProjectionTablelike | undefined>;
    set(path: undefined, value: ontology.ProjectionTablelike): Promise<ontology.ProjectionTablelike | undefined>;
}
export declare const ProjectionMultiCache: MultiCache<undefined, ontology.ProjectionTablelike>;
