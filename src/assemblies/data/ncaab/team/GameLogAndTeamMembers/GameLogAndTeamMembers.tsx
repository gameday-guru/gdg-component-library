import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { GameLog } from '../GameLog/GameLog';
import { Players } from '../TeamPlayers/TeamPlayers';

export const GAME_LOG_AND_TEAM_MEMBERS_CLASSNAMES : string[] = [
    "grid",
    "gap-4"
 ];
export const GAME_LOG_AND_TEAM_MEMBERS_STYLE : React.CSSProperties = {
    // gridTemplateColumns : "2fr 1fr"
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
    players ? : ontology.Playerlike[];
};

export const GameLogAndTeamMembers : FC<GameLogAndTeamMembersProps>  = (props) =>{

    const medium = useSupportedMedia();

    return (
        <div
        className={[...!props.overrideClasses ? GAME_LOG_AND_TEAM_MEMBERS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? {
            ...medium ? {
                gridTemplateColumns : "1fr"
            } : {
                gridTemplateColumns : "2fr 1fr"
            }
        } : {}, ...props.style}}>
            <div>
                <GameLog
                    onTeamClick={props.onTeamClick}
                    onMatchupClick={props.onMatchupClick}
                    games={props.games}/>
            </div>
            <div>
                <Players players={props.players}/>
            </div>
        </div>
    )
};