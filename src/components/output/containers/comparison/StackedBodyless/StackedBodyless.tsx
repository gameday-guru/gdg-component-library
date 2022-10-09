import React, {FC, ReactElement} from 'react';
import { Vs } from '../../../indicators/label/Vs';

export const STACKED_BODYLESS_CLASSNAMES : string[] = [ ];
export const STACKED_BODYLESS_STYLE : React.CSSProperties = {
};

export const STACKED_BODYLESS_TOP_CLASSNAMES : string[] = [
    "rounded-lg",
    "border",
    "grid",
    "items-center",
    "content-center"
];

export const STACKED_BODYLESS_FLOATER_CLASSNAMES : string[] = [
    "grid",
    "h-1",
    "items-center",
    "content-center"
];

export const STACKED_BODYLESS_BOTTOM_CLASSNAMES : string[] = [
    "rounded-lg",
    "border",
    "grid",
    "items-center",
    "content-center"
];

export const STACKED_BODYLESS_GRIDCOL_TEMPLATE : React.CSSProperties = {
    gridTemplateColumns : "2fr 1fr"
};

export type StackedBodylessProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    Title ? : React.ReactNode;
    TopHead ? : React.ReactNode;
    BottomHead ? : React.ReactNode;
    Comparison ? : React.ReactNode;
    wrapperClassNames ? : string[];
};

export const StackedBodyless : FC<StackedBodylessProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? STACKED_BODYLESS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? STACKED_BODYLESS_STYLE : {}, ...props.style}}>
            <div>
                {props.Title}
            </div>
            <div 
            className={[...STACKED_BODYLESS_TOP_CLASSNAMES, ...props.wrapperClassNames||[]].join(" ")}
            style={STACKED_BODYLESS_GRIDCOL_TEMPLATE}>
                <div>
                    {props.TopHead}
                </div>
                <div>

                </div>
            </div>
            <div 
            className={STACKED_BODYLESS_FLOATER_CLASSNAMES.join(" ")}
            style={STACKED_BODYLESS_GRIDCOL_TEMPLATE}>
                <div>

                </div>
                <div>
                    {props.Comparison||<div>
                        <Vs/>
                    </div>}
                </div>
                <div>

                </div>
            </div>
            <div 
             className={[...STACKED_BODYLESS_BOTTOM_CLASSNAMES, ...props.wrapperClassNames||[]].join(" ")}
            style={STACKED_BODYLESS_GRIDCOL_TEMPLATE}>
                <div>
                    {props.BottomHead}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
};