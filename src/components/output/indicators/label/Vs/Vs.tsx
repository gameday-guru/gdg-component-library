import React, {FC, ReactElement} from 'react';

export const VS_CLASSNAMES : string[] = [
    "font-bold",
    "rounded-full",
    "flex",
    "items-center",
    "justify-items-center",
    "text-xl"
];
export const VS_STYLE : React.CSSProperties = {
};

export type VsProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
};

export const Vs : FC<VsProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? VS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? VS_STYLE : {}, ...props.style}}>
            VS
        </div>
    )
};