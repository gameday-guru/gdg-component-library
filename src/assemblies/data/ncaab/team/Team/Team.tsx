import React, {FC, ReactElement} from 'react';
import { MockOver } from '../../../../../components/output/MockOver';
import { ontology } from '../../../../../util';
import { Teamlike } from '../../../../../util/ontology';
import { GameLogAndTeamMembers } from '../GameLogAndTeamMembers';
import { SideTeam } from '../SideTeam';
import { TeamStatTripleRow } from '../TeamStatTripleRow';

export const TEAM_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4",
    "p-4",
];
export const TEAM_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr"
};

export type TeamProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    teams ? : { [key : string] : ontology.Teamlike };
    team ? : ontology.Teamlike;
    pointDistribution ? : ontology.PointDistributionlike;
    efficiency ? : ontology.EfficiencyEntrylike;
    leagueAveragePointDistribution ? : ontology.LeagueAverageslike;
    games ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    players ? : ontology.Playerlike[];

};

export const Team : FC<TeamProps>  = (props) =>{

    const _team = props.team||ontology.MockHome;

    const sideTeam = <MockOver
        Content={<SideTeam
            viusage='backdrop'
            onTeamClick={props.onTeamClick}
            team={props.team}/>}
        dependencies={[_team]}/>

    return (
        <div
        className={[...!props.overrideClasses ? TEAM_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TEAM_STYLE : {}, ...props.style}}>
            <div>
                {sideTeam}
            </div>
            <div>
                <TeamStatTripleRow
                    team={props.team}
                    pointDistribution={props.pointDistribution}
                    efficiency={props.efficiency}
                    leagueAveragePointDistribution={props.leagueAveragePointDistribution}/>
            </div>
            <div>
                <GameLogAndTeamMembers
                    players={props.players}
                    onMatchupClick={props.onMatchupClick}
                    onTeamClick={props.onTeamClick}
                    games={props.games}/>
            </div>
        </div>
    )
};