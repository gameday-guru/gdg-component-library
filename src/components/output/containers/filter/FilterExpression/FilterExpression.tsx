import React, {FC, ReactElement} from 'react';
import { FieldCase, FilterToken } from '../filter';

export const FILTER_EXPRESSION_CLASSNAMES : string[] = [ 
    "grid"
];
export const FILTER_EXPRESSION_STYLE : React.CSSProperties = {
    gridTemplateColumns : "2fr 1fr 2fr"
};

export type FilterExpressionProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    fieldCase ? : FieldCase;
    setFilter ? : (filter : FilterToken)=>Promise<void>;
};

export const FilterExpression : FC<FilterExpressionProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? FILTER_EXPRESSION_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FILTER_EXPRESSION_STYLE : {}, ...props.style}}>
            <div>
                {/** TODO: Field dropdown */}
            </div>
            <div>
                {/** TODO: Relationship dropdown. */}
            </div>
            <div>
                {/** TODO: Expression input. */}
            </div>
        </div>
    )
};