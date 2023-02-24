import React, {FC, ReactElement} from 'react';

export const NCAAB_TOURNAMENT_BRACKET_CLASSNAMES : string[] = [ ];
export const NCAAB_TOURNAMENT_BRACKET_STYLE : React.CSSProperties = {
};

export type NcaabTournamentBracketProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const NcaabTournamentBracket : FC<NcaabTournamentBracketProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_TOURNAMENT_BRACKET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_TOURNAMENT_BRACKET_STYLE : {}, ...props.style}}>

        </div>
    )
};