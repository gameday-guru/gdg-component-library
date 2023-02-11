import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../assemblies/meta';
import { HomeContent } from '../../../../assemblies/meta/content/HomeContent/HomeContent';
import { ontology } from '../../../../util';
import { SupportedMedialike } from '../../../../util/media';
import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';

export const HOME_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900"
];
export const HOME_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type HomeProps = {
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
    medium ? : SupportedMedialike
};

export const Home : FC<HomeProps>  = (props) =>{

    switch (props.medium) {

        case "mobile" : return <HomeMobile {...props}/>

        default : return <HomeDesktop {...props} />

    }

    return (
        <div
        className={[...!props.overrideClasses ? HOME_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HOME_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MainSidebar
                onFeedbackSubmit={props.onFeedbackSubmit}
                onWhich={props.onWhich} 
                which='home'
                style={{
                    height : '100%'
                }}/>
            </div>
            <div style={{
                height : '100%',
                width : '100%',
                overflowY : "scroll"
            }}>
                <HomeContent 
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