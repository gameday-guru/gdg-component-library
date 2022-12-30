import React, {FC, ReactElement} from 'react';
import { TeamMatchupBuilder } from '../TeamMatchupBuilder';
import { TopTeams } from '../../league/TopTeams';
import { ontology } from '../../../../../util';

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
    topOffensiveTeams ? : ontology.Teamlike[];
    topDefensiveTeams ? : ontology.Teamlike[];
    teams ? : {[key : string] : ontology.Teamlike};
    onBuildMatchup ? : (home : string, away : string)=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const TeamMatchupSelectRow : FC<TeamMatchupSelectRowProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? TEAM_MATCHUP_SELECT_ROW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TEAM_MATCHUP_SELECT_ROW_STYLE : {}, ...props.style}}>
            <TopTeams 
            onTeamClick={props.onTeamClick}
            Label="Top Offensive Teams"
            teams={props.topOffensiveTeams}
            style={{ height : "100%", overflow : "scroll"}}/>
            <TopTeams 
            onTeamClick={props.onTeamClick}
            Label="Top Defensive Teams"
            teams={props.topDefensiveTeams}
            style={{ height : "100%",  overflow : "scroll" }}/>
            <TeamMatchupBuilder 
            onBuildMatchup={props.onBuildMatchup}
            teams={props.teams}
            style={{ height : "100%",  overflow : "scroll" }}/>
        </div>
    )
};