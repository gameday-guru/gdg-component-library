import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology, viusage } from '../../../../../util';
import { Pill } from '../../../../../components';
import { Stacked } from '../../../../../components/output/containers/comparison';
import { TeamMatchupRowProjection } from '../../matchup/TeamMatchupRowProjection';
import { UpcomingGames } from '../../matchup';

export const GAME_LOG_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4"
];
export const GAME_LOG_CONTAINER_STYLE : React.CSSProperties = {
};

export const GAME_LOG_INNER_CLASSNAMES : string[] = [ ];
export const GAME_LOG_INNER_STYLE : React.CSSProperties = {
    textAlign : "left"
};

export type GameLogProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike
    which ? : string;
    games ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

const OPTIONS = [
    "This Week",
    "Big 12",
    "ACC", 
    "PAC 12", 
    "On the Bubble"
];

export const GameLog : FC<GameLogProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? GAME_LOG_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? GAME_LOG_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? GAME_LOG_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? GAME_LOG_INNER_STYLE : {}, ...props.style}}>
                <h2 className='text-xl'>Upcoming Games</h2>
                <br/>
                <hr/>
                <br/>
                <UpcomingGames
                options={OPTIONS}
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                games={props.games}/>
            </div>
        </Wrapper>
    )
};