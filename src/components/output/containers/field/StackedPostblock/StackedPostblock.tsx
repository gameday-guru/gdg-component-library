import { height } from '@mui/system';
import React, {FC, ReactElement} from 'react';

export const STACKED_POSTBLOCK_CLASSNAMES : string[] = [
    "grid",
    "text-sm"
];
export const STACKED_POSTBLOCK_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 2fr",
    alignContent : "center",
    alignItems  : "center",
    justifyContent : "center",
    textAlign : "center"
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
            <div style={{
                color : "#ffffff",
                opacity : .7,
                alignContent : "center",
                alignItems : "center",
                width : "100%",
                height : "100%"
            }}>
                {props.Label}
            </div>
            <div style={{
                display : "grid",
                background : "#01987522",
                alignContent : "center",
                alignItems : "center",
                width : "100%",
                height : "100%"
            }}>
                {props.Value}
            </div>
        </div>
    )
};