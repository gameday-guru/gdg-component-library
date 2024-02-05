import React, {FC, ReactElement} from 'react';

export const BRACKET_VERBOSE_CLASSNAMES : string[] = [ ];
export const BRACKET_VERBOSE_STYLE : React.CSSProperties = {
};

export type BracketVerboseProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const BracketVerbose : FC<BracketVerboseProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? BRACKET_VERBOSE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? BRACKET_VERBOSE_STYLE : {}, ...props.style}}>

        </div>
    )
};