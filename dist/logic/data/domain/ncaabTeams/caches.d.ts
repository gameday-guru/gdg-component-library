import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MultiCache } from "../../../data/cache/multicache";
export declare class SportsDataioTeams implements DispositionalCachelike<undefined, {
    [key: string]: ontology.Teamlike;
}> {
    disposition?: CacheDisposition | undefined;
    get(path: undefined): Promise<{
        [key: string]: ontology.Teamlike;
    } | undefined>;
    set(path: undefined, value: {
        [key: string]: ontology.Teamlike;
    }): Promise<{
        [key: string]: ontology.Teamlike;
    } | undefined>;
}
export declare const TeamsMultiCache: MultiCache<undefined, {
    [key: string]: ontology.Teamlike;
}>;
