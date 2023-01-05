import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { ontology } from '../../../../util';
import { BlogArticle } from '../../../data/blog';

export const BLOG_ARTICLE_CONTENT_CLASSNAMES : string[] = [ ];
export const BLOG_ARTICLE_CONTENT_STYLE : React.CSSProperties = {
};

export type BlogArticleContentProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    blogArticle ? : ontology.BlogArticlelike
};

export const BlogArticleContent : FC<BlogArticleContentProps>  = (props) =>{

    return (
        <Wrapper
        viusage='backdrop'
        classNames={[...!props.overrideClasses ? BLOG_ARTICLE_CONTENT_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BLOG_ARTICLE_CONTENT_STYLE : {}, ...props.style}}>
            <BlogArticle/>
        </Wrapper>
    )
};