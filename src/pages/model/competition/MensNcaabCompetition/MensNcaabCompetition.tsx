import React, {FC, ReactElement} from 'react';

export const MENS_NCAAB_COMPETITION_CLASSNAMES : string = 
    "";
export const MENS_NCAAB_COMPETITION_STYLE : React.CSSProperties = {
};

export type MensNcaabCompetitionProps = {
    style ? : React.CSSProperties
};

export const MensNcaabCompetition : FC<MensNcaabCompetitionProps>  = ({style}) =>{

    return (
        <div
        className={MENS_NCAAB_COMPETITION_CLASSNAMES}
        style={{...MENS_NCAAB_COMPETITION_STYLE, ...style}}>

        </div>
    )
};