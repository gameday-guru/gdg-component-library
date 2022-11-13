import React, {FC, ReactElement} from 'react';

export const DROPWDOWN_CLASSNAMES : string[] = [ ];
export const DROPWDOWN_STYLE : React.CSSProperties = {
};

export type DropwdownProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Dropwdown : FC<DropwdownProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? DROPWDOWN_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? DROPWDOWN_STYLE : {}, ...props.style}}>

        </div>
    )
};