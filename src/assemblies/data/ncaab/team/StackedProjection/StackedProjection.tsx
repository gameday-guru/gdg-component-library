import React, {FC, ReactElement} from 'react';
import { Vs } from '../../../../../components/output/indicators/label/Vs';
import { RowProjection } from '../RowProjection';
import { ontology } from '../../../../../util';

export const STACKED_PROJECTION_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const STACKED_PROJECTION_STYLE : React.CSSProperties = {
    gridTemplateRows : "10fr 1fr 10fr",
    gridTemplateColumns : "1fr",
    justifyItems : "center",
    justifyContent : "center",
    alignContent : "center",
    alignItems : "center"
};

export type StackedProjectionProps = {
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

export const StackedProjection : FC<StackedProjectionProps>  = (props) =>{

    console.log(props.game);

    return (
        <div
        className={[...!props.overrideClasses ? STACKED_PROJECTION_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? STACKED_PROJECTION_STYLE : {}, ...props.style}}>
            <div style={{
                width : "100%"
            }}>
                <RowProjection
                    style={{
                        padding : 4,
                        width : "100%"
                    }}
                    // classNames={["p-0"]}
                    onTeamClick={props.onTeamClick}
                    team={props.away}
                    game={props.game}
                    gameProjection={props.gameProjection}
                    away={true}/>
            </div>
            <div style={{
                display : "grid",
                gridTemplateColumns : "2fr auto 2fr",
                alignContent : "center",
                alignItems : "center",
                width : "100%",
                height : 1,
                overflow : "visible"
            }}>
                <div>

                </div>
                <div>
                    <Vs classNames={["p-4", "bg-gdg-500", "rounded-full", "text-black-500", "grid", "justify-center", "content-center"]}/>
                </div>
                <div>

                </div>
            </div>
            <div  style={{
                width : "100%"
            }}>
                <RowProjection
                    style={{
                        padding : 4,
                        width : "100%"
                    }}
                    onTeamClick={props.onTeamClick}
                    team={props.home}
                    game={props.game}
                    gameProjection={props.gameProjection}
                    away={false}/>
            </div>
        </div>
    )
};