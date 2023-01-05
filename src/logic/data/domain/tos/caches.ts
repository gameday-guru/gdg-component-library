import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import {  getToses } from "../../../../util/cms/tos";
import { MultiCache } from "../../../data/cache/multicache";

export class CmsToses implements DispositionalCachelike<undefined, ontology.BlogArticlelike[]> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<ontology.BlogArticlelike[] | undefined> {

        return getToses();
        
    }

    async set(path: undefined, value: ontology.BlogArticlelike[]): Promise<ontology.BlogArticlelike[] | undefined> {
        return undefined;
    }
}

export const TosesMultiCache = new MultiCache<undefined, ontology.BlogArticlelike[]>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("Toses", CacheDisposition.AUX),
    new CmsToses()
]);
