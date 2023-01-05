import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MultiCache } from "../../../data/cache/multicache";
export declare class CmsToses implements DispositionalCachelike<undefined, ontology.TosTablelike> {
    disposition?: CacheDisposition | undefined;
    get(path: undefined): Promise<ontology.TosTablelike | undefined>;
    set(path: undefined, value: ontology.TosTablelike): Promise<ontology.TosTablelike | undefined>;
}
export declare const TosesMultiCache: MultiCache<undefined, ontology.TosTablelike>;
