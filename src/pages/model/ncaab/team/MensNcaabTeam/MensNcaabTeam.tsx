import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../../assemblies/meta';
import { MensNcaabTeamIndividualContent } from '../../../../../assemblies/meta/content/NcaabMensTeamIndividualContent';
import { ontology } from '../../../../../util';

export const MENS_NCAAB_TEAM_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
];
export const MENS_NCAAB_TEAM_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type MensNcaabTeamIndividualProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    tableEntries ? : ontology.EfficiencyEntrylike[];
    teams ? : { [key : string] : ontology.Teamlike };
    team ? : ontology.Teamlike;
    leagueAverages ? : ontology.LeagueAverageslike;
    pointDistribution ? : ontology.PointDistributionlike;
    games ? : ontology.ProjectedGamelike[];
    onWhich ? : (which : "home" | "team" | "matchups")=>Promise<void>;
    efficiency ? : ontology.EfficiencyEntrylike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const MensNcaabTeam : FC<MensNcaabTeamIndividualProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? MENS_NCAAB_TEAM_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MENS_NCAAB_TEAM_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MainSidebar 
                which='team'
                onWhich={props.onWhich}
                style={{
                    height : '100%'
                }}/>
            </div>
            <div className='overflow-y-scroll' style={{
                height : '100%',
                width : '100%',
                overflow : 'scroll'
            }}>
                <MensNcaabTeamIndividualContent
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                efficiency={props.efficiency}
                pointDistribution={props.pointDistribution}
                leagueAverages={props.leagueAverages}
                games={props.games}
                team={props.team}/>
            </div>
        </div>
    )
};