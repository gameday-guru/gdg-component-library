import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../../assemblies/meta';
import { MatchupContent } from '../../../../../assemblies/meta/content/MatchupContent';
import { MobileNav } from '../../../../../assemblies/meta/nav/NcaabMobileNav/MobileNav';
import { Logo } from '../../../../../components/output/icons/Logo';
import { ontology } from '../../../../../util';

export const MATCHUP_MOBILE_CLASSNAMES : string[] = [
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
];
export const MATCHUP_MOBILE_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 9fr"
};

export type MatchupMobileProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    teams ? : { [key : string] : ontology.Teamlike };
    onWhich ? : (which : "home" | "team" | "matchups")=>Promise<void>;
    homeDistro ? : ontology.PointDistributionlike;
    home ? : ontology.Teamlike;
    homeEfficiency ? : ontology.EfficiencyEntrylike;
    awayDistro ? : ontology.PointDistributionlike;
    away ? : ontology.Teamlike;
    awayEfficiency ? : ontology.EfficiencyEntrylike;
    gameProjection ? : ontology.ProjectionEntrylike;
    gameProjections ? : ontology.ProjectionEntrylike[];
    leagueAverages ? : ontology.LeagueAverageslike;
    homeGameProjections ? : ontology.ProjectedGamelike[];
    awayGameProjections ? : ontology.ProjectedGamelike[];
    game ? : ontology.GameByDatelike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const MatchupMobile : FC<MatchupMobileProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? MATCHUP_MOBILE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MATCHUP_MOBILE_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MobileNav 
                onAccountClick={props.onAccountClick}
                onFeedbackSubmit={props.onFeedbackSubmit}
                onWhich={props.onWhich} 
                which='matchups'/>
            </div>
            <div style={{
                height : '100%',
                width : '100%',
                overflowY : "scroll"
            }}>
                <MatchupContent
                onAccountClick={props.onAccountClick}
                headerProjectedGames={props.headerProjectedGames}
                headerTeams={props.headerTeams}
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                game={props.game}
                home={props.home}
                homeDistro={props.homeDistro}
                homeEfficiency={props.homeEfficiency}
                away={props.away}
                awayDistro={props.awayDistro}
                awayEfficiency={props.awayEfficiency}
                gameProjection={props.gameProjection}
                gameProjections={props.gameProjections}
                leagueAverages={props.leagueAverages}
                homeGameProjections={props.homeGameProjections}
                awayGameProjections={props.awayGameProjections}/>
            </div>
        </div>
    )
};