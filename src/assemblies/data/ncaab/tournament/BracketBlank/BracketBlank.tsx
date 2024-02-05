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
    reverse ? : boolean;
};

export const BracketBlank : FC<BracketBlankProps>  = ({continuation, reverse}) =>{

    return (
        <div style={
            {
                ...reverse ? {
                    borderLeft : continuation ? '3px solid' : undefined,
                } : {
                    borderRight: continuation ? '3px solid' : undefined,
                }
            }
        }></div>
    )
};