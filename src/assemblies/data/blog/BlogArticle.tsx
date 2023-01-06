import React, {FC, ReactElement} from 'react';
import { MockOver } from '../../../components/output/MockOver';
import { ontology } from '../../../util';
import { GithubMarkdownRender } from '../../../util/markdown/react/Markdown';
import { MockBlogArticle } from '../../../util/ontology';

export const BLOG_ARTICLE_CLASSNAMES : string[] = [
    "grid",
    "p-4",
    "gap-2"
 ];
export const BLOG_ARTICLE_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    width : "100%"
};

export type BlogArticleProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    blogArticle ? : ontology.BlogArticlelike;
};

export const BlogArticle : FC<BlogArticleProps>  = (props) =>{

    const _blogArticle = props.blogArticle||MockBlogArticle;

    const articleTitle = <MockOver
        Content={<h2 className='text-2xl'>{_blogArticle.title}</h2>}
        dependencies={[_blogArticle]}/>

    const articleAuthorship = <MockOver
        Content={<h3>{_blogArticle.authorship}</h3>}
        dependencies={[_blogArticle]}/>

    const articleSummary = <MockOver
        Content={<p style={{
            fontStyle : "italic"
        }}>{_blogArticle.summary}</p>}
        dependencies={[_blogArticle]}/>

    const articleContent = <MockOver
        Content={<GithubMarkdownRender>
            {_blogArticle.content||""}
        </GithubMarkdownRender>}
        dependencies={[_blogArticle]}/>

    return (
        <div
        className={[...!props.overrideClasses ? BLOG_ARTICLE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? BLOG_ARTICLE_STYLE : {}, ...props.style}}>
            {articleTitle}
            {articleAuthorship}
            {articleSummary}
            <hr/>
            {articleContent}
        </div>
    )
};