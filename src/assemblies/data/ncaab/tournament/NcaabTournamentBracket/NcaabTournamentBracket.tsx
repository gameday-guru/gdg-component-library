import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';

export const NCAAB_TOURNAMENT_BRACKET_CLASSNAMES : string[] = [ ];
export const NCAAB_TOURNAMENT_BRACKET_STYLE : React.CSSProperties = {
    display : "grid",
    gridTemplateColumns : "1fr 1fr",
    gridTemplateRows : "1fr 1fr"
};

export type NcaabTournamentBracketProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    firstEast ? : ontology.SparseBracketlike;
    firstWest ? : ontology.SparseBracketlike;
    firstMidwest ? : ontology.SparseBracketlike;
    firstSouth ? : ontology.SparseBracketlike;
    east ? : ontology.SparseBracketlike;
    west ? : ontology.SparseBracketlike;
    midwest ? : ontology.SparseBracketlike;
    south ? : ontology.SparseBracketlike;
    onBracketUpdate ? : (
        update : (bracket : ontology.SparseBracketlike)=>Promise<ontology.SparseBracketlike>
    )=>Promise<void>;
};

export const NcaabTournamentBracket : FC<NcaabTournamentBracketProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_TOURNAMENT_BRACKET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_TOURNAMENT_BRACKET_STYLE : {}, ...props.style}}>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>
                
            </div>
        </div>
    )
};