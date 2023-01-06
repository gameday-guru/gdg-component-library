import React, { FC } from 'react';
import { ontology } from '../../../util';
export declare const BLOG_ARTICLE_CLASSNAMES: string[];
export declare const BLOG_ARTICLE_STYLE: React.CSSProperties;
export declare type BlogArticleProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    blogArticle?: ontology.BlogArticlelike;
};
export declare const BlogArticle: FC<BlogArticleProps>;
