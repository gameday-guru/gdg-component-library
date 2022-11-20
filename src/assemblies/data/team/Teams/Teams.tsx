import React, {FC, ReactElement} from 'react';
import { Vs } from '../../../../components/output/indicators/label/Vs';
import { TeamEfficiencyTable, TeamEfficiencyTableEntrylike } from '../TeamEfficiencyTable/TeamEfficiencyTable';
import { TeamMatchupSelectRow } from '../TeamMatchupSelectRow/TeamMatchupSelectRow';
import { ontology } from '../../../../util';

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
};

export const Teams : FC<TeamsProps>  = (props) =>{

    const _tableEntries = props.tableEntries||[];
    const _teams = props.teams||{};

    const _efficiencyTableEntries : TeamEfficiencyTableEntrylike[] = [];
    for(const entry of _tableEntries)
        if(_teams[entry.team_id]) _efficiencyTableEntries.push({
            "Conference" : _teams[entry.team_id].Conference||"",
            "Defensive Efficiency" : entry.de,
            "Offensive Efficiency" : entry.oe,
            "Tempo" : entry.tempo,
            "Power Rating" : 0, // TODO: add power rating
            "Record" : [
                _teams[entry.team_id].Wins||0, 
                0, // TODO:  why doesn't sportsdataio direct indicate ties
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
                <TeamMatchupSelectRow style={{ height : "300px"}}/>
            </div>    
            <div>
                <TeamEfficiencyTable tableEntries={_efficiencyTableEntries}/>
            </div>
        </div>
    )
};