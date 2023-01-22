import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';

export const BRACKET_CLASSNAMES : string[] = [ ];
export const BRACKET_STYLE : React.CSSProperties = {
};

export type BracketProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    bracket ? : ontology.SparseBracketlike;
};

export const Bracket : FC<BracketProps>  = (props) =>{

    const _bracket = props.bracket||ontology.Mock4TeamBracket;

    return (
        <div
        className={[...!props.overrideClasses ? BRACKET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? BRACKET_STYLE : {}, ...props.style}}>

        </div>
    )
};