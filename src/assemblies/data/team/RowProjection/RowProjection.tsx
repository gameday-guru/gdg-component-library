import React, {FC, ReactElement} from 'react';
import { RowTuple } from '../RowTuple';
import { SideTeam } from '../SideTeam';

export const ROW_PROJECTION_CLASSNAMES : string[] = [ 
    "grid",
    "rounded-lg",
    "border",
    "border-2",
    "border-gdg-500",
    "p-4"
];
export const ROW_PROJECTION_STYLE : React.CSSProperties = {
    gridTemplateColumns : "2fr 1fr 2fr",
    alignContent : "center",
    alignItems : "center"
};

export type RowProjectionProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const RowProjection : FC<RowProjectionProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? ROW_PROJECTION_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? ROW_PROJECTION_STYLE : {}, ...props.style}}>
            <div>
                <SideTeam/>
            </div>
            <div>
                {/** Leave Empty */}
            </div>
            <div>
                <RowTuple/>
            </div>
        </div>
    )
};