import React, {FC, ReactElement} from 'react';
import { Vs } from '../../../../components/output/indicators/label/Vs';
import { RowProjection } from '../RowProjection';

export const STACKED_PROJECTION_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const STACKED_PROJECTION_STYLE : React.CSSProperties = {
    gridTemplateRows : "10fr 1fr 10fr",
    justifyItems : "center",
    justifyContent : "center",
    alignContent : "center",
    alignItems : "center"
};

export type StackedProjectionProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const StackedProjection : FC<StackedProjectionProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? STACKED_PROJECTION_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? STACKED_PROJECTION_STYLE : {}, ...props.style}}>
            <div>
                <RowProjection/>
            </div>
            <div style={{
                display : "grid",
                gridTemplateColumns : "2fr auto 2fr",
                alignContent : "center",
                alignItems : "center",
                width : "100%",
                height : 1,
                overflow : "visible"
            }}>
                <div>

                </div>
                <div>
                    <Vs classNames={["p-4", "bg-gdg-500", "rounded-full", "text-black-500", "grid", "justify-center", "content-center"]}/>
                </div>
                <div>

                </div>
            </div>
            <div>
                <RowProjection/>
            </div>
        </div>
    )
};