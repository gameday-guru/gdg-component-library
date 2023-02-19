import React, {FC, ReactElement, useState} from 'react';
import { Wrapper } from '../../../../../components';
import { Pill } from '../../../../../components';
import { ontology } from '../../../../../util';
import { MockProjectedGame } from '../../../../../util/ontology';
import { TeamMatchupRowProjection } from '../TeamMatchupRowProjection';
import { FilterSet } from '../../../../../components/output/containers/filter';
import { Viusagelike } from '../../../../../util/viusage/primary';

export const UPCOMING_GAMES_MOBILE_CONTAINER_CLASSNAMES : string[] = [
    "rounded-lg",
    "p-4"
];
export const UPCOMING_GAMES_MOBILE_CONTAINER_STYLE : React.CSSProperties = {
};

export const UPCOMING_GAMES_MOBILE_INNER_CLASSNAMES : string[] = [ ];
export const UPCOMING_GAMES_MOBILE_INNER_STYLE : React.CSSProperties = {
    textAlign : "left"
};

export type UpcomingGamesMobileProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    which ? : string;
    games ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    options ? : string[];
    viusage ? : Viusagelike;
    Title ? : React.ReactNode;
    presets ? : {
        [key : string] : (table : ontology.ProjectedGamelike[])=>Promise<ontology.ProjectedGamelike[]>
    }
    stackedGamblers ? : boolean;
};

export const UpcomingGamesMobile : FC<UpcomingGamesMobileProps>  = (props) =>{

    const [renderCount, setRenderCount] = useState(100);

    const _gameProjections = (props.games||Array(10).fill(MockProjectedGame));

    const [upcomingGames, setUpcomingGamesMobile] = useState(_gameProjections);

    const gameProjections = upcomingGames
    .slice(0, renderCount)
    .map((entry, i)=>{
        return (
            <TeamMatchupRowProjection 
                stackedGamblers={props.stackedGamblers}
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                key={entry.game.GameID + `x${i}`}
                home={entry.home}
                away={entry.away}
                game={entry.game}
                gameProjection={entry.gameProjection}/>
        )
    });

    return (
     
        <Wrapper
        viusage={props.viusage||"wrap"}
        classNames={[...!props.overrideClasses ? UPCOMING_GAMES_MOBILE_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? UPCOMING_GAMES_MOBILE_CONTAINER_STYLE : {}, ...props.style}}>
        <div
        className={[...!props.overrideClasses ? UPCOMING_GAMES_MOBILE_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? UPCOMING_GAMES_MOBILE_INNER_STYLE : {}, ...props.style}}>
             <FilterSet 
                presets={props.presets}
                table={_gameProjections}
                setTable={async (table)=>{
                    setUpcomingGamesMobile(table);
                }}
                fieldCase={{
                    "Team Name" : ["TEXT"]
                }}
                Title={props.Title}/>
            <br/>
            <hr/>
            <br/>
            <div className='grid gap-4'>
                {gameProjections}
            </div>
        </div>
    </Wrapper>
    
    )
};