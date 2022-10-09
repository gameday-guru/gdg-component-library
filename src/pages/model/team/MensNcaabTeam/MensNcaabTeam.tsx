import React, {FC, ReactElement} from 'react';

export const MENS_NCAAB_TEAM_CLASSNAMES : string = 
    "";
export const MENS_NCAAB_TEAM_STYLE : React.CSSProperties = {
};

export type MensNcaabTeamProps = {
    style ? : React.CSSProperties
};

export const MensNcaabTeam : FC<MensNcaabTeamProps>  = ({style}) =>{

    return (
        <div
        className={MENS_NCAAB_TEAM_CLASSNAMES}
        style={{...MENS_NCAAB_TEAM_STYLE, ...style}}>

        </div>
    )
};