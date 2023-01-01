import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { RowTuple } from '../RowTuple';
import { SideTeam } from '../SideTeam';

export const ROW_PROJECTION_CLASSNAMES : string[] = [ 
    "grid",
    "rounded-lg",
    "border",
    "border-2",
    "border-gdg-500",
    "p-4"
];
export const ROW_PROJECTION_STYLE : React.CSSProperties = {
    gridTemplateColumns : "3fr 1fr 3fr",
    alignContent : "center",
    alignItems : "center"
};

export type RowProjectionProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    team ? : ontology.Teamlike;
    game ? : ontology.GameByDatelike;
    gameProjection ? : ontology.ProjectionEntrylike
    away ? : boolean;
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const RowProjection : FC<RowProjectionProps>  = (props) =>{

    const _projectedScore = props.away ?
    props.gameProjection?.away_team_score
    : props.gameProjection?.home_team_score;

    const _line = props.away ? 
    Math.abs(props.game?.PointSpread||0)
    : (props.game?.PointSpread||0);
   
    const _odds = props.away ?
    props.game?.AwayPointSpreadPayout 
    : props.game?.HomePointSpreadPayout;


    return (
        <div
        className={[...!props.overrideClasses ? ROW_PROJECTION_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? ROW_PROJECTION_STYLE : {}, ...props.style}}>
            <div>
                <SideTeam
                    onTeamClick={props.onTeamClick}
                    team={props.team}
                    away={props.away}/>
            </div>
            <div>
                {/** Leave Empty */}
            </div>
            <div>
                <RowTuple 
                    line={_line}
                    odds={_odds ? Number.parseFloat(_odds) : undefined}
                    projectedScore={_projectedScore}
                    actualScore={props.away ? props.game?.AwayTeamScore : props.game?.HomeTeamScore}/>
            </div>
        </div>
    )
};