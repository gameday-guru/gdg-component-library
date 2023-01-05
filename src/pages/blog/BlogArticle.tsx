import React, {FC, ReactElement} from 'react';
import { BlogArticleContent } from '../../assemblies/meta/content/BlogArticleContent';
import { BlogArticleHeader } from '../../assemblies/meta/header/BlogArticleHeader/BlogArticleHeader';
import { ontology } from '../../util';

export const HOME_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
    "bg-drk-gray-600",
    "p-8"
];
export const HOME_STYLE : React.CSSProperties = {
    overflowY : "scroll"
};

export type BlogArticleProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    blogArticle ? : ontology.BlogArticlelike;
};

export const BlogArticle : FC<BlogArticleProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? HOME_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HOME_STYLE : {}, ...props.style}}>
            <div>
                <BlogArticleHeader/>
            </div>
            <div>
                <BlogArticleContent
                blogArticle={props.blogArticle}/>
            </div>
        </div>
    )
};