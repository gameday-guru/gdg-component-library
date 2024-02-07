import React, {FC, ReactElement} from 'react';
import { ontology, viusage } from '../../../../../util';
import { UpcomingGames } from '../../matchup';

export const NCAAB_MENS_UPCOMING_GAMES_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4"
];
export const NCAAB_MENS_UPCOMING_GAMES_CONTAINER_STYLE : React.CSSProperties = {
};

export const NCAAB_MENS_UPCOMING_GAMES_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_UPCOMING_GAMES_INNER_STYLE : React.CSSProperties = {
    textAlign : "left"
};

export type NcaabMensUpcomingGamesProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike
    which ? : string;
    top25Games ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const NcaabMensUpcomingGames : FC<NcaabMensUpcomingGamesProps>  = (props) =>{

    return (
        <UpcomingGames
        onMatchupClick={props.onMatchupClick}
        onTeamClick={props.onTeamClick}
        Title={<h2 className='text-xl'>Top 25 Games</h2>}
        games={props.top25Games}/>
    )
};