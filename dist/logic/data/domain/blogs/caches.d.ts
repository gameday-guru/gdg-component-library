import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MultiCache } from "../../../data/cache/multicache";
export declare class CmsBlogArticles implements DispositionalCachelike<undefined, ontology.BlogArticleTablelike> {
    disposition?: CacheDisposition | undefined;
    get(path: undefined): Promise<ontology.BlogArticleTablelike | undefined>;
    set(path: undefined, value: ontology.BlogArticleTablelike): Promise<ontology.BlogArticleTablelike | undefined>;
}
export declare const BlogArticlesMultiCache: MultiCache<undefined, ontology.BlogArticleTablelike>;
