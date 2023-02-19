import React, {FC, ReactElement} from 'react';
import { TeamMatchupBuilder } from '../TeamMatchupBuilder';
import { TopTeams } from '../../league/TopTeams';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';

export const TEAM_MATCHUP_SELECT_ROW_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4"
];
export const TEAM_MATCHUP_SELECT_ROW_STYLE : React.CSSProperties = {
    
};

export type TeamMatchupSelectRowProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    topOffensiveTeams ? : ontology.Teamlike[];
    topOffensiveTeamsStats ? : React.ReactNode[];
    topDefensiveTeams ? : ontology.Teamlike[];
    topDefensiveTeamsStats ? : React.ReactNode[];
    teams ? : {[key : string] : ontology.Teamlike};
    onBuildMatchup ? : (home : string, away : string)=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const TeamMatchupSelectRow : FC<TeamMatchupSelectRowProps>  = (props) =>{

    const medium = useSupportedMedia();

    return (
        <div
        className={[...!props.overrideClasses ? TEAM_MATCHUP_SELECT_ROW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? {
            ...medium === "mobile" ? {
                gridTemplateColumns : "1fr",
                gridTemplateRows : "300px 300px 300px"
            }  : {
                gridTemplateColumns : "1fr 1fr 2fr",
                gridTemplateRows : "1fr"
            }
        } : {}, ...props.style}}>
            <TopTeams 
            onTeamClick={props.onTeamClick}
            Label="Top Offensive Teams"
            teams={props.topOffensiveTeams}
            stats={props.topOffensiveTeamsStats}
            style={{ height : "100%", overflow : "scroll"}}/>
            <TopTeams 
            onTeamClick={props.onTeamClick}
            Label="Top Defensive Teams"
            teams={props.topDefensiveTeams}
            stats={props.topDefensiveTeamsStats}
            style={{ height : "100%",  overflow : "scroll" }}/>
            <TeamMatchupBuilder 
            onBuildMatchup={props.onBuildMatchup}
            teams={props.teams}
            style={{ height : "100%",  overflow : "scroll" }}/>
        </div>
    )
};