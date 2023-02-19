import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../../assemblies/meta';
import { MensNcaabTeamContent } from '../../../../../assemblies/meta/content/NcaabMensTeamContent';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { MensNcaabTeamsDesktop } from './MensNcaabTeamsDesktop';
import { MensNcaabTeamsMobile } from './MensNcaabTeamsMobile';

export const MENS_NCAAB_TEAMS_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
];
export const MENS_NCAAB_TEAMS_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type MensNcaabTeamsProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    tableEntries ? : ontology.EfficiencyEntrylike[];
    teams ? : { [key : string] : ontology.Teamlike };
    topOffensiveTeams ? : ontology.Teamlike[];
    topOffensiveTeamsStats ? : React.ReactNode[];
    topDefensiveTeams ? : ontology.Teamlike[];
    topDefensiveTeamsStats ? : React.ReactNode[];
    onWhich ? : (which : "home" | "team" | "matchups")=>Promise<void>;
    onBuildMatchup ? : (home : string, away : string)=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const MensNcaabTeams : FC<MensNcaabTeamsProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch(medium) {
        case "mobile" : return <MensNcaabTeamsMobile {...props}/>
        default : return <MensNcaabTeamsDesktop {...props}/>
    }
    
};