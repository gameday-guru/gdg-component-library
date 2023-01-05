import { BlogArticlelike, BlogArticleTablelike } from "../ontology";
export declare const getBlogArticles: () => Promise<BlogArticlelike[]>;
export declare const getBlogArticle: (id: string) => Promise<BlogArticlelike>;
export declare const getBlogArticleTable: () => Promise<BlogArticleTablelike>;
