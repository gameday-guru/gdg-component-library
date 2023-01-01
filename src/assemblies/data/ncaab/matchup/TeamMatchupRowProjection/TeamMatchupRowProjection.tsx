import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { DateString } from '../../generic';
import { GamblersTuple } from '../../team/GamblersTuple';
import { StackedProjection } from '../../team/StackedProjection';
import { ontology } from '../../../../../util';
import { Button } from '../../../../../components';
import { MockOver } from '../../../../../components/output/MockOver';

export const TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4",
    "rounded-lg"
];
export const TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_MATCHUP_ROW_PROJECTION_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const TEAM_MATCHUP_ROW_PROJECTION_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "3fr 1fr"
};

export type TeamMatchupRowProjectionProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    home ? : ontology.Teamlike;
    away ? : ontology.Teamlike;
    game ? : ontology.GameByDatelike;
    gameProjection ? : ontology.ProjectionEntrylike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (matchupId : string)=>Promise<void>;
    gamblers ? : boolean;
};

export const TeamMatchupRowProjection : FC<TeamMatchupRowProjectionProps>  = (props) =>{

    const _game = props.game||ontology.MockHome;
    const _gameProjection = props.gameProjection||ontology.MockProjectedGame;

    const handleMatchupClick = async ()=>{
        if(props.game) 
        props.onMatchupClick && await props.onMatchupClick(props.game.GameID.toString())
    }

    const _gamblersTuple = <MockOver
        Content={ <GamblersTuple 
            game={props.game}
            gameProjection={props.gameProjection}
            style={{
                height : "100%"
            }}/>}
        dependencies={[_game, _gameProjection]}/>

    return (
        <Button
            onClick={handleMatchupClick}
            viusage={"backdrop"}
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_STYLE : {}, ...props.style}}>
            <div>
                <DateString date={new Date((props.game as any)?.DateTime||0)}/>
                <br/>
            </div>
            <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_ROW_PROJECTION_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? {
                gridTemplateColumns : props.gamblers !== false ? "3fr 1fr" : "1fr"
            } : {}, ...props.style}}>
                <div>   
                    <StackedProjection 
                        
                        onTeamClick={props.onTeamClick}
                        home={props.home}
                        away={props.away}
                        game={props.game}
                        gameProjection={props.gameProjection}/>
                </div>
                <div>
                    {props.gamblers !== false && _gamblersTuple}
                </div>
            </div>
        </Button>
    )
};