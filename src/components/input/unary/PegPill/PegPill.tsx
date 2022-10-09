import React, {FC, ReactElement} from 'react';
import { Pill, PillProps } from "../Pill";

export const PEG_PILL_CLASSNAMES : string[] = [ ];
export const PEG_PILL_STYLE : React.CSSProperties = {
};

export const PEG_CONTAINER_CLASSNAMES : string[] = [ 
    "rounded-full",
    "overflow-hidden",
    "flex",
    "items-center",
    "justify-items-center"
];

export const PEG_CHILD_CONTAINER_CLASSNAMES : string[] = [
    "grid"
];

export const PEG_CHILD_CONTAINER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 5fr"
};

export type PegPillProps = PillProps & {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    pegSize ? : number;
    Peg ? : React.ReactNode
};

export const PegPill : FC<PegPillProps>  = (props) =>{

    return (
        <Pill style={{
            position : "relative"
        }} {...props}>
            <div style={PEG_CHILD_CONTAINER_STYLE} className={PEG_CHILD_CONTAINER_CLASSNAMES.join(" ")}>
                <div className={PEG_CONTAINER_CLASSNAMES.join(" ")} style={{
                    height : props.pegSize||30,
                    width : props.pegSize||30
                }}>
                    {props.Peg}
                </div>
                <div>

                {props.children}
                </div>
            </div>
        </Pill>
    )
};