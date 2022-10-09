import React, {FC, ReactElement} from 'react';

export const LEFT_RIGHT_CLASSNAMES : string[] = [ 
    "grid",
];
export const LEFT_RIGHT_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 1fr"
};

export const LEFT_RIGHT_LEFT_CLASSNAMES : string[] = [
    "flex",
    "items-center"
];

export const LEFT_RIGHT_RIGHT_CLASSNAMES : string[] = [
    "flex",
    "justify-items-end",
    "justify-end",
    "items-center"
];

export type LeftRightProps = {
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    Left ? : React.ReactNode;
    Right ?  : React.ReactNode;
};

export const LeftRight : FC<LeftRightProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? LEFT_RIGHT_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? LEFT_RIGHT_STYLE : {}, ...props.style}}>
            <div className={LEFT_RIGHT_LEFT_CLASSNAMES.join(" ")}>
                {props.Left}
            </div>
            <div className={LEFT_RIGHT_RIGHT_CLASSNAMES.join(" ")}>
                {props.Right}
            </div>
        </div>
    )
};