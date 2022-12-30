import React, {FC, ReactElement} from 'react';
import { NcaabMensBlogs } from '../NcaabMensBlogs';
import { NcaabMensGameOfTheDay } from '../../matchup/NcaabMensGameOfTheDay';
import { NcaabMensUpcomingGames } from '../NcaabMensUpcomingGames';
import { ontology } from '../../../../../util';

export const NCAAB_MENS_OVERVIEW_STACK_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4"
];
export const NCAAB_MENS_OVERVIEW_STACK_STYLE : React.CSSProperties = {
};

export type NcaabMensOverviewStackProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    gameOfTheDay ? : ontology.GameOfTheDaylike;
    top25Games ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const NcaabMensOverviewStack : FC<NcaabMensOverviewStackProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_MENS_OVERVIEW_STACK_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_MENS_OVERVIEW_STACK_STYLE : {}, ...props.style}}>
            <div>
                <NcaabMensBlogs classNames={["rounded-lg"]}/>
            </div>
            <div>
                <NcaabMensGameOfTheDay 
                onTeamClick={props.onTeamClick}
                home={props.gameOfTheDay?.home}
                away={props.gameOfTheDay?.away}
                gameProjection={props.gameOfTheDay?.gameProjection}
                classNames={["rounded-lg"]}/>
            </div>
            <div>
                <NcaabMensUpcomingGames
                onTeamClick={props.onTeamClick} 
                top25Games={props.top25Games}
                classNames={["rounded-lg"]}/>
            </div>
        </div>
    )
};