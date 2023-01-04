import React, {FC, ReactElement} from 'react';

export const CMS_MARKDOWN_DOCUMENT_CLASSNAMES : string[] = [ ];
export const CMS_MARKDOWN_DOCUMENT_STYLE : React.CSSProperties = {
};

export type CmsMarkdownDocumentProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const CmsMarkdownDocument : FC<CmsMarkdownDocumentProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? CMS_MARKDOWN_DOCUMENT_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? CMS_MARKDOWN_DOCUMENT_STYLE : {}, ...props.style}}>

        </div>
    )
};