import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology, viusage } from '../../../../../util';
import { Pill } from '../../../../../components';
import { Stacked } from '../../../../../components/output/containers/comparison';
import { TeamMatchupRowProjection } from '../../matchup/TeamMatchupRowProjection';
import { UpcomingGames } from '../../matchup';
import { ALL_UPCOMING_GAMES_PRESETS } from '../../overview/NcaabMensAllUpcomingGames/NcaabMensAllUpcomingGames';

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



export const GameLog : FC<GameLogProps>  = (props) =>{

    return (
        <UpcomingGames
        onMatchupClick={props.onMatchupClick}
        onTeamClick={props.onTeamClick}
        Title={<h2 className='text-xl'>Games</h2>}
        presets={ALL_UPCOMING_GAMES_PRESETS}
        games={props.games}/>
    )
};