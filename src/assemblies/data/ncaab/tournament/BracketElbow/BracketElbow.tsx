import React, {FC, ReactElement} from 'react';

export const BRACKET_ELBOW_CLASSNAMES : string[] = [ ];
export const BRACKET_ELBOW_STYLE : React.CSSProperties = {
};

export type BracketElbowProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const BracketElbow : FC<BracketElbowProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? BRACKET_ELBOW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? BRACKET_ELBOW_STYLE : {}, ...props.style}}>

        </div>
    )
};