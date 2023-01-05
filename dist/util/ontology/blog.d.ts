import { Mockable } from "./mockable";
export interface BlogArticlelike extends Mockable {
    title?: string;
    publicationDate?: string;
    tags?: string[];
    dynamicTags?: string;
    content?: string;
    authorship?: string;
    summary?: string;
    thumbnail?: string;
    thumbnailLink?: string;
    uid: string;
}
export declare const MockBlogArticle: BlogArticlelike;
export interface BlogArticleTablelike {
    [key: string]: BlogArticlelike;
}
