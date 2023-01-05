import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import { getBlogArticle, getBlogArticles, getBlogArticleTable } from "../../../../util/cms/blogs";
import { MultiCache } from "../../../data/cache/multicache";

export class CmsBlogArticles implements DispositionalCachelike<undefined, ontology.BlogArticleTablelike> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<ontology.BlogArticleTablelike | undefined> {

        return getBlogArticleTable();
        
    }

    async set(path: undefined, value: ontology.BlogArticleTablelike): Promise<ontology.BlogArticleTablelike | undefined> {
        return undefined;
    }
}

export const BlogArticlesMultiCache = new MultiCache<undefined, ontology.BlogArticleTablelike>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("BlogArticles", CacheDisposition.AUX),
    new CmsBlogArticles()
]);