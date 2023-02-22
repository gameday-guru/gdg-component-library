import React, {FC, ReactElement} from 'react';

export const BRACKET_BLANK_CLASSNAMES : string[] = [ ];
export const BRACKET_BLANK_STYLE : React.CSSProperties = {
};

export type BracketBlankProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    continuation ? :boolean;
};

export const BracketBlank : FC<BracketBlankProps>  = ({continuation}) =>{

    return (
        <div style={
            {
                borderRight: continuation ? '3px solid' : undefined,
            }
        }></div>
    )
};