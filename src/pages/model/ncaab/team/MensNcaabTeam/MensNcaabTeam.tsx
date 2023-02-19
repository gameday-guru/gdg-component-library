import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../../assemblies/meta';
import { MensNcaabTeamIndividualContent } from '../../../../../assemblies/meta/content/NcaabMensTeamIndividualContent';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { MensNcaabTeamDesktop } from './MensNcaabTeamDesktop';
import { MensNcaabTeamMobile } from './MensNcaabTeamMobile';

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
    players ? : ontology.Playerlike[];
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const MensNcaabTeam : FC<MensNcaabTeamIndividualProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch(medium){
        case "mobile" : return <MensNcaabTeamMobile {...props}/>;
        default : return <MensNcaabTeamDesktop {...props}/>
    }
   
};