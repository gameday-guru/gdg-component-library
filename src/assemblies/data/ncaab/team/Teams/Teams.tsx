import React, {FC, ReactElement} from 'react';
import { TeamEfficiencyTable, TeamEfficiencyTableEntrylike } from '../TeamEfficiencyTable/TeamEfficiencyTable';
import { TeamMatchupSelectRow } from '../TeamMatchupSelectRow/TeamMatchupSelectRow';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';

export const TEAMS_CLASSNAMES : string[] = [
    "grid",
    "gap-4",
    "p-4",
 ];
export const TEAMS_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
};

export type TeamsProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    tableEntries ? : ontology.EfficiencyEntrylike[];
    teams ? : { [key : string] : ontology.Teamlike };
    topOffensiveTeams ? : ontology.Teamlike[];
    topOffensiveTeamsStats ? : React.ReactNode[];
    topDefensiveTeams ? : ontology.Teamlike[];
    topDefensiveTeamsStats ? : React.ReactNode[];
    onBuildMatchup ? : (home : string, away : string)=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const Teams : FC<TeamsProps>  = (props) =>{

    const medium = useSupportedMedia();

    const _tableEntries = props.tableEntries||[];
    const _teams = props.teams||{};

    const _efficiencyTableEntries : TeamEfficiencyTableEntrylike[] = [];
    for(const entry of _tableEntries)
        if(_teams[entry.team_id]) _efficiencyTableEntries.push({
            "Conference" : _teams[entry.team_id].Conference||"",
            "Defensive Efficiency" : entry.de,
            "Offensive Efficiency" : entry.oe,
            "Tempo" : entry.tempo,
            "Power Rating" : .56 *entry.oe - .44 * entry.de, // TODO: add power rating
            "Record" : [
                _teams[entry.team_id].Wins||0, 
                0, // TODO:  why doesn't sportsdataio indicate ties
                _teams[entry.team_id].Losses||0, 
            ],
            "Team Name" : _teams[entry.team_id],
            "Liked" : false
        })

    return (
        <div
        className={[...!props.overrideClasses ? TEAMS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TEAMS_STYLE : {}, ...props.style}}>
            <div>
                <TeamMatchupSelectRow 
                onTeamClick={props.onTeamClick}
                onBuildMatchup={props.onBuildMatchup}
                topDefensiveTeams={props.topDefensiveTeams}
                topDefensiveTeamsStats={props.topDefensiveTeamsStats}
                topOffensiveTeams={props.topOffensiveTeams}
                topOffensiveTeamsStats={props.topOffensiveTeamsStats}
                teams={props.teams}
                style={{ height :  medium !== "mobile" ? "300px" : undefined }}/>
            </div>    
            <div>
                <TeamEfficiencyTable 
                onTeamClick={props.onTeamClick}
                tableEntries={_efficiencyTableEntries}/>
            </div>
        </div>
    )
};