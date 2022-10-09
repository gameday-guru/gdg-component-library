import React, {FC, ReactElement} from 'react';

export const TOPPERS_CLASSNAMES : string[] = [
    "rounded-lg"
];
export const TOPPERS_STYLE : React.CSSProperties = {
};

export type ToppersProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    Title ? : React.ReactNode;
    Metadata ? : React.ReactNode;
};

export const Toppers : FC<ToppersProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? TOPPERS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TOPPERS_STYLE : {}, ...props.style}}>
            {props.Title}
            <hr/>
            {props.Metadata}
            {props.children}
        </div>
    )
};