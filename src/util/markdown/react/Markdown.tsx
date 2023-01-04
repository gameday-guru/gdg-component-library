import React, {FC, ReactElement} from 'react';
import Markdown from "react-markdown";
import gfm from "remark-gfm";

export type GithubMarkdownRenderProps = React.HTMLAttributes<HTMLDivElement> & {
    children : string
}

export const GithubMarkdownRender : FC<GithubMarkdownRenderProps>  = (props) =>{

    return (
        <Markdown className="gfm" plugins={[gfm]}>
            {props.children}
        </Markdown>
    )

}