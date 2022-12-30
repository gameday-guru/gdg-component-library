import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { GameLog } from '../GameLog/GameLog';
import { Players } from '../TeamPlayers/TeamPlayers';

export const GAME_LOG_AND_TEAM_MEMBERS_CLASSNAMES : string[] = [
    "grid",
    "gap-4"
 ];
export const GAME_LOG_AND_TEAM_MEMBERS_STYLE : React.CSSProperties = {
    gridTemplateColumns : "2fr 1fr"
};

export type GameLogAndTeamMembersProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    games ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const GameLogAndTeamMembers : FC<GameLogAndTeamMembersProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? GAME_LOG_AND_TEAM_MEMBERS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? GAME_LOG_AND_TEAM_MEMBERS_STYLE : {}, ...props.style}}>
            <div>
                <GameLog
                    onTeamClick={props.onTeamClick}
                    onMatchupClick={props.onMatchupClick}
                    games={props.games}/>
            </div>
            <div>
                <Players/>
            </div>
        </div>
    )
};