import React, {FC, ReactElement} from 'react';
import { NcaabMensTop25 } from '../../league';
import { NcaabMensOverviewStack } from '../NcaabMensOverviewStack';
import { ontology } from '../../../../../util';

export const NCAAB_MENS_MOBILE_OVERVIEW_CLASSNAMES : string[] = [
    "grid",
    "gap-4",
    "p-4"
 ];
export const NCAAB_MENS_MOBILE_OVERVIEW_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr"
};

export type NcaabMensMobileOverviewProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    gameOfTheDay ? : ontology.ProjectedGamelike;
    top25Games ? : ontology.ProjectedGamelike[];
    apTop25Teams ? : ontology.RankTrendTeamlike[];
    gdgTop25Teams ? : ontology.RankTrendTeamlike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    blogs ? : ontology.BlogArticlelike[];
    onBlogClick ? : (id : string)=>Promise<void>;
};

export const NcaabMensMobileOverview : FC<NcaabMensMobileOverviewProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_MENS_MOBILE_OVERVIEW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_MENS_MOBILE_OVERVIEW_STYLE : {}, ...props.style}}>
            <div>
                <NcaabMensOverviewStack
                blogs={props.blogs}
                onBlogClick={props.onBlogClick}
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                top25Games={props.top25Games}
                gameOfTheDay={props.gameOfTheDay}/>
            </div>
            <div>
                <NcaabMensTop25 
                onTeamClick={props.onTeamClick}
                apTop25={props.apTop25Teams}
                gdgTop25={props.gdgTop25Teams}
                classNames={["rounded-lg"]}/>
            </div>
        </div>
    )
};