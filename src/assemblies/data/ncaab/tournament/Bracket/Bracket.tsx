import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { SideTeam } from '../../team/SideTeam';

export const BRACKET_CLASSNAMES : string[] = [
    "grid"
];
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

    // based on the dimensions of the bracket and some display paramters,
    // you will need to compute the number of grid columns and rows
    // if you're straight-up mapping the sparse matrix to the display
    // then this should be the dimensions of the sparse matrix
    const height = _bracket.length;
    const width = _bracket[0].length;
    const rowTemplate : string = Array(_bracket.length ).fill("1fr").join(" ");
    const colTemplate : string = Array(_bracket[0].length ).fill("1fr").join(" ");

    const bracketEntries = _bracket.map((row, rowNo)=>{
        return row.map((col, colNo)=>{
            /**
             * <div style={{
             *  background : 'pink',
             * height : 40,
             * width : 120
             * }}>
             * I will be a team.
             * </div>
             */

            return <>
            {/** Some Matchup component. Don't worry about this until you the structure */}
            </>
        })
    }).flat();

    return (
        <div
        className={[...!props.overrideClasses ? BRACKET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? {
            ...BRACKET_STYLE,
            gridTemplateColumns : colTemplate,
            gridTemplateRows : rowTemplate
        } : {}, ...props.style}}>
            {bracketEntries}
        </div>
    )
};