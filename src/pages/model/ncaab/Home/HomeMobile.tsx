import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../assemblies/meta';
import { ontology } from '../../../../util';
import { HomeMobileContent } from '../../../../assemblies/meta/content/HomeContent/HomeMobileContent';
import { Logo } from '../../../../components/output/icons/Logo';
import { MobileNav } from '../../../../assemblies/meta/nav/NcaabMobileNav/MobileNav';

export const HOME_MOBILE_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900"
];
export const HOME_MOBILE_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 9fr"
};

export type HomeMobileProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    gameOfTheDay ? : ontology.ProjectedGamelike;
    top25Games ? : ontology.ProjectedGamelike[];
    apTop25Teams ? : ontology.RankTrendTeamlike[];
    gdgTop25Teams ? : ontology.RankTrendTeamlike[];
    onWhich ? : (which : "home" | "team" | "matchups")=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
    blogs ? : ontology.BlogArticlelike[];
    onBlogClick ? : (id : string)=>Promise<void>;
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const HomeMobile : FC<HomeMobileProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? HOME_MOBILE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HOME_MOBILE_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MobileNav 
                    onAccountClick={props.onAccountClick}
                    onFeedbackSubmit={props.onFeedbackSubmit}
                    onWhich={props.onWhich} 
                    which='home'/>
            </div>
            <div style={{
                height : '100%',
                width : '100%',
                overflowY : "scroll"
            }}>
                <HomeMobileContent 
                onAccountClick={props.onAccountClick}
                blogs={props.blogs}
                onBlogClick={props.onBlogClick}
                headerProjectedGames={props.headerProjectedGames}
                headerTeams={props.headerTeams}
                onTeamClick={props.onTeamClick}
                onMatchupClick={props.onMatchupClick}
                gameOfTheDay={props.gameOfTheDay}
                top25Games={props.top25Games}
                apTop25Teams={props.apTop25Teams}
                gdgTop25Teams={props.gdgTop25Teams}/>
            </div>
        </div>
    )
};