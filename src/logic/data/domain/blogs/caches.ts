import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import { getBlogArticle, getBlogArticles } from "../../../../util/cms/blogs";
import { MultiCache } from "../../../data/cache/multicache";

export class CmsBlogArticles implements DispositionalCachelike<undefined, ontology.BlogArticlelike[]> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<ontology.BlogArticlelike[] | undefined> {

        return getBlogArticles();
        
    }

    async set(path: undefined, value: ontology.BlogArticlelike[]): Promise<ontology.BlogArticlelike[] | undefined> {
        return undefined;
    }
}

export const BlogArticlesMultiCache = new MultiCache<undefined, ontology.BlogArticlelike[]>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("BlogArticles", CacheDisposition.AUX),
    new CmsBlogArticles()
]);