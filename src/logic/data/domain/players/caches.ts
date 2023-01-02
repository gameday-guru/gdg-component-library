import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../data/cache/cache";
import { ontology } from "../../../util";
import { getPlayers } from "../../../util/firebase";
import { MultiCache } from "../../data/cache/multicache";

export class SportsDataioPlayers implements DispositionalCachelike<ontology.Teamlike, ontology.Playerlike[]> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: ontology.Teamlike): Promise<ontology.Playerlike[] | undefined> {

        return getPlayers(path);
        
    }

    async set(path: ontology.Teamlike, value: ontology.Playerlike[]): Promise<ontology.Playerlike[] | undefined> {
        return undefined;
    }
}

export const PlayersMultiCache = new MultiCache<ontology.Teamlike, ontology.Playerlike[]>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache(CacheDisposition.AUX),
    new SportsDataioPlayers()
]);