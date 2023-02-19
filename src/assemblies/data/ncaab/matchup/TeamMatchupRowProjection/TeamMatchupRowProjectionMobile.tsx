import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { DateString } from '../../generic';
import { GamblersTuple } from '../../team/GamblersTuple';
import { StackedProjection } from '../../team/StackedProjection';
import { ontology } from '../../../../../util';
import { Button } from '../../../../../components';
import { MockOver } from '../../../../../components/output/MockOver';

export const TEAM_MATCHUP_ROW_PROJECTION_MOBILE_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4",
    "rounded-lg",
    "gap-2",
];
export const TEAM_MATCHUP_ROW_PROJECTION_MOBILE_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_MATCHUP_ROW_PROJECTION_MOBILE_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4"
];
export const TEAM_MATCHUP_ROW_PROJECTION_MOBILE_INNER_STYLE : React.CSSProperties = {
    // gridTemplateColumns : "2fr 1fr",
    // gridTemplateRows : "1fr"
};

export type TeamMatchupRowProjectionMobileProps = {
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
    stackedGamblers ? : boolean;
};

export const TeamMatchupRowProjectionMobile : FC<TeamMatchupRowProjectionMobileProps>  = (props) =>{

    const _game = props.game||ontology.MockGame;
    const _gameProjection = props.gameProjection||ontology.MockProjectedGame.gameProjection;

    const handleMatchupClick = async ()=>{
        if(props.game) 
        props.onMatchupClick && await props.onMatchupClick(props.game.GameID.toString())
    }

    const _gamblersTuple = <MockOver
        Content={ <GamblersTuple 
            stacked={props.stackedGamblers}
            game={_game}
            gameProjection={_gameProjection}
            style={{
                height : "100%",
                fontSize : 12
            }}/>}
        dependencies={[_game, _gameProjection]}/>

    const _dateString = <MockOver
        Content={<DateString date={new Date(_game.DateTimeUTC ? (_game.DateTimeUTC + "Z") : _game.Day)}/>}
        dependencies={[_game]}/>

    return (
        <Button
            onClick={handleMatchupClick}
            viusage={"backdrop"}
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_ROW_PROJECTION_MOBILE_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_ROW_PROJECTION_MOBILE_CONTAINER_STYLE : {}, ...props.style}}>
            <div>
                {_dateString}
            </div>
            <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_ROW_PROJECTION_MOBILE_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? {
                width : "100%",
                gridTemplateColumns : "1fr"
            } : {}, ...props.style}}>
                <div>   
                    <StackedProjection 
                        style={{
                            width : "100%"
                        }}
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