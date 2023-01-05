import React, {FC, ReactElement, useState} from 'react';
import { Button } from '../../../../components';
import { MockOver } from '../../../../components/output/MockOver';
import { ontology } from '../../../../util';
import { GithubMarkdownRender } from '../../../../util/markdown/react/Markdown';
import { MockTos } from '../../../../util/ontology';

export const BLOG_ARTICLE_CLASSNAMES : string[] = [
    "grid",
    "p-4",
    "gap-2"
 ];
export const BLOG_ARTICLE_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr"
};

export type ConfirmTosProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    tos ? : ontology.Toslike;
    confirmTos ? : ()=>Promise<void>;
};

export const ConfirmTos : FC<ConfirmTosProps>  = (props) =>{

    const _blogArticle = props.tos||MockTos;

    const articleTitle = <MockOver
        Content={<h2 className='text-2xl'>{_blogArticle.title}</h2>}
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
            <hr/>
            {articleContent}
            <Button 
            viusage={'success'}
            onClick={props.confirmTos}>
                Accept
            </Button>
        </div>
    )
};