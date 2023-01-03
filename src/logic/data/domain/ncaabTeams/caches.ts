import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import { getTeamsTable } from "../../../../util/firebase";
import { MultiCache } from "../../../data/cache/multicache";

export class SportsDataioTeams implements DispositionalCachelike<undefined, {[key : string] : ontology.Teamlike}> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<{ [key: string]: ontology.Teamlike; } | undefined> {
        
        return getTeamsTable();

    }

    async set(path: undefined, value: { [key: string]: ontology.Teamlike; }): Promise<{ [key: string]: ontology.Teamlike; } | undefined> {
        return undefined;
    }

}

export const TeamsMultiCache = new MultiCache<undefined, {[key : string] : ontology.Teamlike}>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("Teams", CacheDisposition.AUX),
    new SportsDataioTeams()
]);