import React, {FC, ReactElement} from 'react';
import { TeamMatchupBuilder } from '../TeamMatchupBuilder';

export const TEAM_MATCHUP_SELECT_ROW_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4"
];
export const TEAM_MATCHUP_SELECT_ROW_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 1fr 2fr",
    gridTemplateRows : "1fr"
};

export type TeamMatchupSelectRowProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamMatchupSelectRow : FC<TeamMatchupSelectRowProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? TEAM_MATCHUP_SELECT_ROW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TEAM_MATCHUP_SELECT_ROW_STYLE : {}, ...props.style}}>
            <div>

            </div>
            <div>

            </div>
         
            <TeamMatchupBuilder/>
        </div>
    )
};