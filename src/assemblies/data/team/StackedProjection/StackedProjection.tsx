import React, {FC, ReactElement} from 'react';
import { RowProjection } from '../RowProjection';

export const STACKED_PROJECTION_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const STACKED_PROJECTION_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 1fr"
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
            <div>
                <RowProjection/>
            </div>
        </div>
    )
};