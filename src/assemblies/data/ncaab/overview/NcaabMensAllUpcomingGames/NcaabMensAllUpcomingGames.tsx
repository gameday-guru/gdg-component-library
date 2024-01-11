import React, {FC, ReactElement, useState} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology, viusage } from '../../../../../util';
import { Pill } from '../../../../../components';
import { Stacked } from '../../../../../components/output/containers/comparison';
import { TeamMatchupRowProjection } from '../../matchup/TeamMatchupRowProjection';
import { UpcomingGames } from '../../matchup';
import { FilterSet } from '../../../../../components/output/containers/filter';

export const NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4"
];
export const NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_STYLE : React.CSSProperties = {
};

export const NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_STYLE : React.CSSProperties = {
    textAlign : "left"
};

export type NcaabMensAllUpcomingGamesProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike
    which ? : string;
    allUpcomingGames ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const isOnTheBubble = (team : ontology.Teamlike)=>{

    // ranked teams are not on the bubble
    if(team.ApRank) return false;

    const wins = team.Wins||0;
    const losses = team.Losses||0;
    const total = (wins + losses)||1;
    return (wins/total) > .75

}

export const ALL_UPCOMING_GAMES_PRESETS : {
    [key : string] : (table : ontology.ProjectedGamelike[])=>Promise<ontology.ProjectedGamelike[]>
} = {
    "All" : async (table)=>table,
    "Big 12" : async (table)=>{
        return table.filter((game)=>{
            return game.home.Conference === "Big 12" || game.away.Conference === "Big 12"
        })
    },
    "PAC 12" : async (table)=>{
        return table.filter((game)=>{
            return game.home.Conference === "Pac-12" || game.away.Conference === "Pac-12"
        })
    },
    "ACC" : async (table)=>{
        return table.filter((game)=>{
            return game.home.Conference === "Atlantic Coast" || game.away.Conference === "Atlantic Coast"
        })
    },
    "On the Bubble" : async (table)=>{
        return table.filter((game)=>{

            return isOnTheBubble(game.home) || isOnTheBubble(game.away);
        })
    },
}

export const NcaabMensAllUpcomingGames : FC<NcaabMensAllUpcomingGamesProps>  = (props) =>{

    return (
        <UpcomingGames 
        stackedGamblers={true}
        onMatchupClick={props.onMatchupClick}
        onTeamClick={props.onTeamClick}
        Title={<h2 className='text-2xl'>Today's Games</h2>}
        games={props.allUpcomingGames}/>
    )
};