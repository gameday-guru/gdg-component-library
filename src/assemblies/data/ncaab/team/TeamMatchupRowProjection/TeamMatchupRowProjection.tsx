import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { DateString } from '../../../ncaab/generic';
import { GamblersTuple } from '../GamblersTuple';
import { StackedProjection } from '../StackedProjection';
import { ontology } from '../../../../../util';

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
};

export const TeamMatchupRowProjection : FC<TeamMatchupRowProjectionProps>  = (props) =>{

    return (
        <Wrapper
            viusage={"backdrop"}
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_STYLE : {}, ...props.style}}>
            <div>
                <DateString date={new Date((props.game as any).DateTime)}/>
                <br/>
            </div>
            <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_ROW_PROJECTION_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_ROW_PROJECTION_INNER_STYLE : {}, ...props.style}}>
                <div>   
                    <StackedProjection 
                        onTeamClick={props.onTeamClick}
                        home={props.home}
                        away={props.away}
                        game={props.game}
                        gameProjection={props.gameProjection}/>
                </div>
                <div>
                    <GamblersTuple 
                    game={props.game}
                    gameProjection={props.gameProjection}
                    style={{
                        height : "100%"
                    }}/>
                </div>
            </div>
        </Wrapper>
    )
};