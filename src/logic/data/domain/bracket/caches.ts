import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import { getTrendTable } from "../../../../util/rpc";
import { getBracket, getMyBrackets } from "../../../../util/firebase";
import { MultiCache } from "../../../data/cache/multicache";


export class Bracket implements DispositionalCachelike<string, ontology.IdSparseBracketlike> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: string): Promise<ontology.IdSparseBracketlike| undefined> {

        return getBracket({_id : path});
        
    }

    async set(path: string, value: ontology.PartIdSparseBracketlike): Promise<ontology.IdSparseBracketlike | undefined> {
        return undefined;
    }
}

export const BracketsMultiCache = new MultiCache<string, ontology.IdSparseBracketlike>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("Brackets", CacheDisposition.AUX),
    new Bracket()
]);

export class MyBrackets implements DispositionalCachelike<undefined, string[]> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<string[]| undefined> {
        const myBrackets = await getMyBrackets();
        for(const bracket of myBrackets)
            BracketsMultiCache.set(bracket._id, bracket);
        return myBrackets.map(({_id})=>_id);
        
    }

    async set(path: undefined, value: string[]): Promise<string[] | undefined> {
        return undefined;
    }
}

export const MyBracketsMultiCache = new MultiCache<undefined,string[]>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("MyBrackets", CacheDisposition.AUX),
    new MyBrackets()
]);