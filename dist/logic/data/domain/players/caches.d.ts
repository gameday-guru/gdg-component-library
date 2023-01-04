import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MultiCache } from "../../../data/cache/multicache";
export declare class SportsDataioPlayers implements DispositionalCachelike<ontology.Teamlike, ontology.Playerlike[]> {
    disposition?: CacheDisposition | undefined;
    get(path: ontology.Teamlike): Promise<ontology.Playerlike[] | undefined>;
    set(path: ontology.Teamlike, value: ontology.Playerlike[]): Promise<ontology.Playerlike[] | undefined>;
}
export declare const PlayersMultiCache: MultiCache<ontology.Teamlike, ontology.Playerlike[]>;
