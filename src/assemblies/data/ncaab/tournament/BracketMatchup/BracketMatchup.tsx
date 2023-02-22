import React, { FC, ReactElement } from 'react';
import { ontology } from '../../../../../util';
import { BracketCorrectedMatchuplike } from '../../../../../util/ontology';
import { SideTeam } from '../../team/SideTeam';
import { BracketTeam } from '../BracketTeam/BracketTeam';
import { Vs } from '../../../../../components/output/indicators/label/Vs';
import { height } from '@mui/system';
import { Wrapper } from '../../../../../components';

export const BRACKET_MATCHUP_CLASSNAMES: string[] = [
    "grid"
];
export const BRACKET_MATCHUP_STYLE: React.CSSProperties = {
    gridTemplateColumns: "1fr 5fr 1fr",
    gridTemplateRows: "10fr 10fr",
};

export type BracketMatchupProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    up?: boolean;
    inheritance?: boolean;
    matchup ? : BracketCorrectedMatchuplike;
    home?: ontology.Teamlike;
    away?: ontology.Teamlike;
};

export const BracketMatchup: FC<BracketMatchupProps> = (props) => {

    const _up = props.up || false;
    const _inheritance = props.inheritance || false;

    return (
        <div
            className={[...!props.overrideClasses ? BRACKET_MATCHUP_CLASSNAMES : [], ...props.classNames || []].join(" ")}
            style={{ ...!props.overrideStyle ? BRACKET_MATCHUP_STYLE : {}, ...props.style }}>
            <div style={{
                    ..._inheritance ? {
                        borderBottom: "3px solid",
                    } : {

                    }
                    //  |
                    //  |--
                    //  |
                }}></div>
            <div style={{
                display : "grid",
                alignContent : "end",
                alignItems : "end",
                position : "relative",
                paddingBottom : "10px"
            }}>
                <BracketTeam 
                    actualTeam={props?.matchup?.actualGame?.home}
                    actualTeamProjectedScore={props?.matchup?.actualGame?.gameProjection?.home_team_score}
                    actualTeamProbability={props?.matchup?.actualGame?.homeProbability}
                    userTeam={props?.matchup?.userPick?.home}
                    userTeamProjectedScore={props?.matchup?.userPick?.gameProjection?.home_team_score}
                    userTeamProbability={props?.matchup?.userPick?.homeProbability}
                    actualScore={props?.matchup?.actualGame?.game?.HomeTeamScore}
                    top/>
                <Vs 
                    style={{
                        color : "white",
                        position : "absolute",
                        height : "20px",
                        width : "20px",
                        bottom : "-10px",
                        zIndex : 1000
                    }}/>
            </div>
            <div style={{
                ..._up ? {
                    borderBottom: "3px solid",
                    borderRight: "3px solid"
                } : {

                }
                // _
                //  |
            }}>

            </div>
            <div>
            </div>
            <div style={{
                paddingTop : "10px"
            }}>
                <BracketTeam 
                    actualTeam={props?.matchup?.actualGame?.away}
                    actualTeamProjectedScore={props?.matchup?.actualGame?.gameProjection?.away_team_score}
                    actualTeamProbability={props?.matchup?.actualGame?.awayProbability}
                    userTeam={props?.matchup?.userPick?.away}
                    userTeamProjectedScore={props?.matchup?.userPick?.gameProjection?.away_team_score}
                    userTeamProbability={props?.matchup?.userPick?.awayProbability}
                    actualScore={props?.matchup?.actualGame?.game?.AwayTeamScore}/>
            </div>
            <div style={{
                ..._up ? {

                } : {
                    borderTop: "3px solid",
                    borderRight: "3px solid"
                }
                //  |
                // -
            }}>
            </div>
        </div>
    )
};