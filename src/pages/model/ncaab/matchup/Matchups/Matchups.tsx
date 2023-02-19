import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../../assemblies/meta';
import { MatchupsContent } from '../../../../../assemblies/meta/content/MatchupsContent';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { MatchupsDesktop } from './MatchupsDesktop';
import { MatchupsMobile } from './MatchupsMobile';

export const MATCHUPS_CLASSNAMES : string[] = [
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
];
export const MATCHUPS_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type MatchupsProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    teams ? : { [key : string] : ontology.Teamlike };
    onWhich ? : (which : "home" | "team" | "matchups")=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    gamesThisWeek ? : ontology.ProjectedGamelike[];
    allUpcomingGames ? : ontology.ProjectedGamelike[];
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const Matchups : FC<MatchupsProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch(medium){
        case "mobile" : return <MatchupsMobile {...props}/>
        default : return <MatchupsDesktop {...props}/>
    }
    
};