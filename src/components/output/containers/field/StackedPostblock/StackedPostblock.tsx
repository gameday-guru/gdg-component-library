import React, {FC, ReactElement} from 'react';

export const STACKED_POSTBLOCK_CLASSNAMES : string[] = [
    "grid"
];
export const STACKED_POSTBLOCK_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 2fr"
};

export type StackedPostblockProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    Label ? : React.ReactNode;
    Value ? : React.ReactNode;
};

export const StackedPostblock : FC<StackedPostblockProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? STACKED_POSTBLOCK_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? STACKED_POSTBLOCK_STYLE : {}, ...props.style}}>
            <div>
                {props.Label}
            </div>
            <div>
                {props.Value}
            </div>
        </div>
    )
};