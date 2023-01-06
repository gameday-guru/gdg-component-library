import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const BLOG_ARTICLE_CONTENT_CLASSNAMES: string[];
export declare const BLOG_ARTICLE_CONTENT_STYLE: React.CSSProperties;
export declare type BlogArticleContentProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    blogArticle?: ontology.BlogArticlelike;
};
export declare const BlogArticleContent: FC<BlogArticleContentProps>;
