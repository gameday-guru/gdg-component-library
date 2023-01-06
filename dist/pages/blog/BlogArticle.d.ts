import React, { FC } from 'react';
import { ontology } from '../../util';
export declare const HOME_CLASSNAMES: string[];
export declare const HOME_STYLE: React.CSSProperties;
export declare type BlogArticleProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    blogArticle?: ontology.BlogArticlelike;
};
export declare const BlogArticle: FC<BlogArticleProps>;
