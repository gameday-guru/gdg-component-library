import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { DateString } from '../../generic';
import { H2H } from '../H2H';
import { ProjectionZeroSum } from '../../team/ProjectionZeroSum';
import { ProjectionWinPercentage } from '../../team/ProjectionWinPercentage';
import { ontology } from '../../../../../util';
import { MockGame, MockProjection } from '../../../../../util/ontology';
import { Button } from '../../../../../components';

export const STACKED_MATCHUP_CONTAINER_CLASSNAMES : string[] = [
    "rounded-lg",
    "p-4"
 ];
export const STACKED_MATCHUP_CONTAINER_STYLE : React.CSSProperties = {
};

export const STACKED_MATCHUP_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4"
];
export const STACKED_MATCHUP_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    justifyContent : "center",
    justifyItems : "center",
    alignContent : "center",
    alignItems : "center"
};

export type StackedMatchupProps = {
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
};

export const StackedMatchup : FC<StackedMatchupProps>  = (props) =>{

    const _gameProjection = props.gameProjection||MockProjection;
    const _game = props.game||MockGame;

    const handleMatchupClick = async ()=>{
        props.onMatchupClick && props.onMatchupClick(_game.GameID.toString());
    }

    return (
        <Button
            onClick={handleMatchupClick}
            viusage='backdrop'
            classNames={[...!props.overrideClasses ? STACKED_MATCHUP_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? STACKED_MATCHUP_CONTAINER_STYLE : {}, ...props.style}}>
            <div style={{
                display : "grid",
                justifyContent : "center",
                justifyItems : "center"
            }}>
                <DateString date={new Date((props.game as any)?.DateTime||0)}/>
            </div>
            <br/>
            <div
            className={[...!props.overrideClasses ? STACKED_MATCHUP_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? STACKED_MATCHUP_INNER_STYLE : {}, ...props.style}}>
                <div className='text-sm'>   
                    <H2H
                        viusage='backdrop'
                        onTeamClick={props.onTeamClick}
                        Home={props.home}
                        Away={props.away}/>
                </div>
                <div className='gap-2' style={{
                    display : "grid",
                    alignContent : "center",
                    gridTemplateColumns : "1fr"
                }}>
                    <ProjectionZeroSum
                        homeScore={_gameProjection.home_team_score}
                        awayScore={_gameProjection.away_team_score}/>
                </div>
            </div>
        </Button>
    )
};