import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { BlogArticle as BlogArticlePage } from '../../pages/blog/BlogArticle';

export const HOME_CLASSNAMES : string[] = [ ];
export const HOME_STYLE : React.CSSProperties = {
};

export type BlogArticleProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const BlogArticle : FC<BlogArticleProps>  = (props) =>{

    

    return (
        <BlogArticlePage/>
    )
};