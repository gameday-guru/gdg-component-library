import React, {FC, ReactElement} from 'react';

export const NCAAB_MENS_BLOGS_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_BLOGS_STYLE : React.CSSProperties = {
};

export type NcaabMensBlogsProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const NcaabMensBlogs : FC<NcaabMensBlogsProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_MENS_BLOGS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_MENS_BLOGS_STYLE : {}, ...props.style}}>

        </div>
    )
};