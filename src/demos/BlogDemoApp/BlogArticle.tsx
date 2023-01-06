import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { useOnceProcessor } from '../../logic/processing/react/reactProcessor';
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


    const { id } = useParams();

    const {
        getBlogArticles
    } = useOnceProcessor();
    console.log(getBlogArticles());

    const article = id ? getBlogArticles()?.[id] : undefined;
    console.log(article);

    return (
        <BlogArticlePage blogArticle={article}/>
    )
};