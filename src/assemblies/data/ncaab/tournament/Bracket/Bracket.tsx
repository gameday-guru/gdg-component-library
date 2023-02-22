import React, { FC, ReactElement } from 'react';
import { ontology } from '../../../../../util';
import { SideTeam } from '../../team/SideTeam';
import { BracketMatchup } from '../BracketMatchup/BracketMatchup';
import { Orientation } from '../util';
import { generate } from 'shortid';
import { BracketBlank } from '../BracketBlank';

export const BRACKET_CLASSNAMES: string[] = [
    "grid"
];
export const BRACKET_STYLE: React.CSSProperties = {
};

export type BracketProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    bracket?: ontology.SparseBracketlike;
};

export const Bracket: FC<BracketProps> = (props) => {

    const _bracket = props.bracket || ontology.Mock4TeamBracket;

    // based on the dimensions of the bracket and some display paramters,
    // you will need to compute the number of grid columns and rows
    // if you're straight-up mapping the sparse matrix to the display
    // then this should be the dimensions of the sparse matrix
    const height = _bracket.length;
    const width = _bracket[0].length;
    const rowTemplate: string = Array(_bracket.length).fill("1fr").join(" ");
    const colTemplate: string = Array(_bracket[0].length).fill("1fr").join(" ");
    const continuation = Array(width).fill(false);

    const bracketEntries = _bracket.map((row, rowNo,) => {
        
        return row.map((bracketEntry, colNo) => {

            if (bracketEntry) {
                continuation[colNo] = !continuation[colNo];
            }


            if(!bracketEntry) {
                return <BracketBlank continuation={ continuation[colNo] }/>
            }
            return <BracketMatchup matchup={bracketEntry} key={generate()} inheritance={colNo > 0} up={!continuation[colNo]} />;

        })

    }).flat();

    return (
        <div
            className={[...!props.overrideClasses ? BRACKET_CLASSNAMES : [], ...props.classNames || []].join(" ")}
            style={{
                ...!props.overrideStyle ? {
                    ...BRACKET_STYLE,
                    gridTemplateColumns: colTemplate,
                    gridTemplateRows: rowTemplate
                } : {}, ...props.style
            }}>
            {bracketEntries}
        </div>
    )
};