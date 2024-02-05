import React, { FC, ReactElement } from 'react';
import { ontology } from '../../../../../util';
import { BracketMatchupStackdown } from '../BracketMatchupStackdown/BracketMatchupStackdown';
import { BracketGameViewlike, MockBracketGameView } from '../../../../../util/ontology';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { BracketMatchupBuilderStackdown } from '../BracketMatchupBuilderStackdown/BracketMatchupBuilderStackdown';

export const BRACKET_ENTRY_CLASSNAMES: string[] = [
    "grid"
];
export const BRACKET_ENTRY_STYLE: React.CSSProperties = {
    gridTemplateColumns: "1fr 20fr 1fr",
    overflow : "visible",
};

export type BracketEntryProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    up?: boolean;
    inheritance?: boolean;
    getBracketGameView ? : ()=>(BracketGameViewlike|undefined);
    onWinnerSelect ? : (id : string)=>Promise<void>;
    onTeamSelect ? : (id : string, top : boolean)=>Promise<void>;
    teams ? : ontology.Teamlike[];
    viusage ? : Viusagelike;
    noLeader ? : boolean;
    reverse ? : boolean;
    center ? : boolean;
    builder ? : boolean;
};

export const BracketEntry: FC<BracketEntryProps> = (props) => {

    const _up = props.up || false;
    const _inheritance = props.inheritance || false;

    const _bracketGameView = (props.getBracketGameView && props.getBracketGameView());
    
    const LineIn = <div style={{
        display : "grid",
        gridTemplateRows : "1fr 1fr"
    }}>
        <div style={{
            ..._inheritance ? {
                borderBottom: "3px solid",
            } : {

            }
        }}>{/** THIS IS WHERE the in line should go */}</div>
        <div>

        </div>
    </div>

    const Elbow = <div style={{
        display : "grid",
        gridTemplateRows : "1fr 1fr"
    }}>
        {/** This should be split between an up elbow and a down elebow */}
        {!props.noLeader && <div style={{
            ..._up ? {
                borderBottom: "3px solid",
                ...props.reverse ? {
                    borderLeft : "3px solid"
                } : {
                    borderRight: "3px solid"
                }
            } : {

            }
            // _
            //  |
        }}>

        </div>}
        {!props.noLeader && <div style={{
            ..._up ? {

            } : {
                borderTop: "3px solid",
                ...props.reverse ? {
                    borderLeft : "3px solid"
                } : {
                    borderRight: "3px solid"
                }
            }
            //  |
            // -
        }}>
        </div>}
    </div>;

    const Left = props.reverse ? Elbow : LineIn;
    const Right = props.reverse ? LineIn : Elbow;

    if(props.builder) return (
        <div
            className={[...!props.overrideClasses ? BRACKET_ENTRY_CLASSNAMES : [], ...props.classNames || []].join(" ")}
            style={{ ...!props.overrideStyle ? BRACKET_ENTRY_STYLE : {}, ...props.style }}>
            {Left}
            <div style={{
                display : "grid",
                alignItems : "center",
                alignContent : "center"
            }}>
                <BracketMatchupBuilderStackdown
                    style={{
                        height : "100%"
                    }}
                    teams={props.teams}
                    onTeamSelect={props.onTeamSelect}
                    center={props.center}
                    reverse={props.reverse}
                    bracketGameView={_bracketGameView}
                    onWinnerSelect={props.onWinnerSelect}
                    viusage={props.viusage}/>
            </div>
            {Right}
        </div>
    ) 

    return (
        <div
            className={[...!props.overrideClasses ? BRACKET_ENTRY_CLASSNAMES : [], ...props.classNames || []].join(" ")}
            style={{ ...!props.overrideStyle ? BRACKET_ENTRY_STYLE : {}, ...props.style }}>
            {Left}
            <div style={{
                display : "grid",
                alignItems : "center",
                alignContent : "center"
            }}>
                <BracketMatchupStackdown
                    style={{
                        height : "100%"
                    }}
                    center={props.center}
                    reverse={props.reverse}
                    bracketGameView={_bracketGameView}
                    onWinnerSelect={props.onWinnerSelect}
                    viusage={props.viusage}/>
            </div>
            {Right}
        </div>
    )
};