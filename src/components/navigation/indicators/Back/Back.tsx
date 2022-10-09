import React, {FC, ReactElement} from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';

export const BACK_CLASSNAMES : string[] = [ 
    "flex",
    "items-center",
    "gap-1"
];
export const BACK_STYLE : React.CSSProperties = {
};

export const BACK_ARROW_CLASSNAMES : string [] = [
    "gcr",
    "cursor-pointer"
];

export type BackProps = {
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    size ? : number;
    onClick ? : (e : React.MouseEvent)=>void
};

export const Back : FC<BackProps>  = (props) =>{

    return (
        <span
        className={[...!props.overrideClasses ? BACK_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? BACK_STYLE : {}, ...props.style}}>
           <ArrowLeft onClick={props.onClick} size={props.size} className={BACK_ARROW_CLASSNAMES.join(" ")}/> Back
        </span>
    )
};