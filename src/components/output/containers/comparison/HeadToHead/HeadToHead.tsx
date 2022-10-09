import React, {FC, ReactElement} from 'react';
import { Vs } from '../../../indicators/label/Vs';

export const HEAD_TO_HEAD_CLASSNAMES : string[] = [ ];
export const HEAD_TO_HEAD_STYLE : React.CSSProperties = {
};

export const HEAD_TO_HEAD_TITLE_CLASSNAMES : string[] = [
    "flex",
    "justify-center",
    "justify-items-center"
];

export const HEAD_TO_HEAD_HEAD_CLASSNAMES : string[] = [
    "grid",
    "items-center",
    "content-center"
];

export const HEAD_TO_HEAD_BODY_CLASSNAMES : string[] = [
    "grid",
    "items-center",
    "content-center"
];


export type HeadToHeadProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    Title ? : React.ReactNode;
    LeftHead ? : React.ReactNode;
    LeftBody ? : React.ReactNode;
    RightHead ? : React.ReactNode;
    RightBody ? : React.ReactNode;
    Comparison ? : React.ReactNode;
};

export const HeadToHead : FC<HeadToHeadProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? HEAD_TO_HEAD_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HEAD_TO_HEAD_STYLE : {}, ...props.style}}>
            <div className={HEAD_TO_HEAD_TITLE_CLASSNAMES.join(" ")}>
                {props.Title}
            </div>
            <div 
            className={HEAD_TO_HEAD_CLASSNAMES.join(" ")}
            style={{
                gridTemplateColumns : "1fr 1fr 1fr",
                // TODO: fix tailwind weirdness
                display : "grid",
                alignItems : "center"
            }}>
                <div>
                    {props.LeftHead}
                </div>
                <div style={{
                    display : "grid",
                    alignItems : "center",
                    justifyItems : "center"
                }}>
                    {props.Comparison||<Vs/>}
                </div>
                <div>
                    {props.RightHead}
                </div>
            </div>
            <div 
            className={HEAD_TO_HEAD_CLASSNAMES.join(" ")}
            style={{
                gridTemplateColumns : "1fr 1fr 1fr",
                // TODO: fix tailwind weirdness
                display : "grid",
                alignItems : "center"
            }}> 
                <div>
                    {props.LeftBody}
                </div>
                <div>

                </div>
                <div>
                    {props.RightBody}
                </div>
            </div>
        </div>
    )
};