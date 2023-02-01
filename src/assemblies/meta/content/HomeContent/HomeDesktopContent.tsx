import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { MensCollegeBasketballHeader } from '../../header';
import { NcaabMensOverview } from '../../../data/ncaab/overview/NcaabMensOverview/NcaabMensOverview';
import { ontology } from '../../../../util';

export const HOME_DESKTOP_CONTENT_CONTAINER_CLASSNAMES : string[] = [ ];
export const HOME_DESKTOP_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
};

export const HOME_DESKTOP_CONTENT_INNER_CLASSNAMES : string[] = [ ];
export const HOME_DESKTOP_CONTENT_INNER_STYLE : React.CSSProperties = {
    
};

export type HomeDesktopContentProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    gameOfTheDay ? : ontology.ProjectedGamelike;
    top25Games ? : ontology.ProjectedGamelike[];
    apTop25Teams ? : ontology.RankTrendTeamlike[];
    gdgTop25Teams ? : ontology.RankTrendTeamlike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
    blogs ? : ontology.BlogArticlelike[];
    onBlogClick ? : (id : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const HomeDesktopContent : FC<HomeDesktopContentProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? HOME_DESKTOP_CONTENT_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? HOME_DESKTOP_CONTENT_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? HOME_DESKTOP_CONTENT_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? HOME_DESKTOP_CONTENT_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <MensCollegeBasketballHeader
                    onAccountClick={props.onAccountClick}
                    onTeamClick={props.onTeamClick}
                    onMatchupClick={props.onMatchupClick}
                    teams={props.headerTeams}
                    projectedGames={props.headerProjectedGames}/>
                </div>
                <div>
                    <NcaabMensOverview
                    blogs={props.blogs}
                    onBlogClick={props.onBlogClick}
                    onTeamClick={props.onTeamClick}
                    onMatchupClick={props.onMatchupClick}
                    gameOfTheDay={props.gameOfTheDay}
                    top25Games={props.top25Games}
                    apTop25Teams={props.apTop25Teams}
                    gdgTop25Teams={props.gdgTop25Teams}/>
                </div>
            </div>
        </Wrapper>
    )
};