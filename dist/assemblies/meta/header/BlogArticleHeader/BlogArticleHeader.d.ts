import React, { FC } from 'react';
export declare const BLOG_ARTICLE_HEADER_CLASSNAMES: string[];
export declare const BLOG_ARTICLE_HEADER_STYLE: React.CSSProperties;
export declare type BlogArticleHeaderProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const BlogArticleHeader: FC<BlogArticleHeaderProps>;
