import React, {FC, ReactElement, useState} from 'react';
import { Wrapper } from '../../../../../components';
import { Pill } from '../../../../../components';
import { ontology } from '../../../../../util';
import { MockProjectedGame } from '../../../../../util/ontology';
import { TeamMatchupRowProjection } from '../TeamMatchupRowProjection';

export const UPCOMING_GAMES_CONTAINER_CLASSNAMES : string[] = [ ];
export const UPCOMING_GAMES_CONTAINER_STYLE : React.CSSProperties = {
};

export const UPCOMING_GAMES_INNER_CLASSNAMES : string[] = [ ];
export const UPCOMING_GAMES_INNER_STYLE : React.CSSProperties = {
};

export type UpcomingGamesProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    which ? : string;
    games ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    options ? : string[];
};

export const UpcomingGames : FC<UpcomingGamesProps>  = (props) =>{

    const [renderCount, setRenderCount] = useState(100);

    const _options = props.options||[
        "This Week",
        "Big 12",
        "ACC", 
        "PAC 12", 
        "On the Bubble"
    ];
    const selections = _options
    .map((display, i)=>{
        return <Pill 
            emphasis={props.which === display ? 500 : 300}
            viusage={props.which === display || ( !props.which && i ===0 )? 'navigate' : 'wrap'}
            key={display}>
                {display}
        </Pill>
    });
    const gameProjections = (props.games||Array(10).fill(MockProjectedGame))
    .slice(0, renderCount)
    .map((entry, i)=>{
        return (
            <TeamMatchupRowProjection 
                onTeamClick={props.onTeamClick}
                key={entry.game.GameID}
                home={entry.home}
                away={entry.away}
                game={entry.game}
                gameProjection={entry.gameProjection}/>
        )
    });

    return (
        <>
            <div style={{
                gridTemplateColumns : '1fr 1fr 1fr 1fr 1fr'
            }} className='grid gap-2 text-sm'>
                {selections}
            </div>
            <br/>
            <div 
            className='grid gap-2 text-sm'>
                {gameProjections}
            </div>
        </>
    )
};