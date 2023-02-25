import React, { FC, ReactElement } from 'react';
import { ontology } from '../../../../../util';
import { BracketCorrectedMatchuplike } from '../../../../../util/ontology';
import { SideTeam } from '../../team/SideTeam';
import { BracketTeam } from '../BracketTeam/BracketTeam';
import { Vs } from '../../../../../components/output/indicators/label/Vs';
import { height } from '@mui/system';
import { Wrapper } from '../../../../../components';
import { BracketMatchup } from '../BracketMatchup/BracketMatchup';

export const BRACKET_ENTRY_CLASSNAMES: string[] = [
    "grid"
];
export const BRACKET_ENTRY_STYLE: React.CSSProperties = {
    gridTemplateColumns: "1fr 10fr 1fr",
    overflow : "visible"
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
    matchup ? : BracketCorrectedMatchuplike;
    teamsAbove ? : {[key : string] : ontology.Teamlike};
    teamsBelow ? : {[key : string] : ontology.Teamlike};
    teams ? : {[key : string] : ontology.Teamlike};
    onMatchupUpdate ? : (
        update :  (matchup : ontology.BracketCorrectedMatchuplike)=>Promise<ontology.BracketCorrectedMatchuplike>
    )=>Promise<void>;
    aboveNeedsSelection ? : boolean;
    belowNeedsSelection ? : boolean;
    getMockProjection ? : (args : {
        home_team_id : string,
        away_team_id : string,
        neutral : boolean
    })=>ontology.ProjectionEntrylike | undefined;
    getProbability ? : (args : {
        home_team_id : string,
        away_team_id : string,
    })=>{
        homeProbability ? : number,
        awayProbability ? : number, 
    }
};

export const BracketEntry: FC<BracketEntryProps> = (props) => {

    const _up = props.up || false;
    const _inheritance = props.inheritance || false;

    const handleTeamSelect = async (teams : {
        topTeamId ? : string,
        bottomTeamId ? : string
    })=>{

        if(props.onMatchupUpdate){
            props.onMatchupUpdate(async (matchup)=>{

                return {
                    ...matchup,
                    userPick : {
                        ...matchup.userPick,
                        home : teams.topTeamId
                        ? props.teamsAbove?.[teams.topTeamId]
                        : matchup.userPick?.home,
                        away : teams.bottomTeamId
                        ? props.teamsBelow?.[teams.bottomTeamId]
                        : matchup.userPick?.away
                    }
                }

            });
        }

    }

    return (
        <div
            className={[...!props.overrideClasses ? BRACKET_ENTRY_CLASSNAMES : [], ...props.classNames || []].join(" ")}
            style={{ ...!props.overrideStyle ? BRACKET_ENTRY_STYLE : {}, ...props.style }}>
            <div style={{
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
            <div style={{
                display : "grid",
                alignItems : "center"
            }}>
                <BracketMatchup 
                    getProbability={props.getProbability}
                    getMockProjection={props.getMockProjection}
                    aboveNeedsSelection={props.aboveNeedsSelection}
                    belowNeedsSelection={props.belowNeedsSelection}
                    onTeamsSelect={handleTeamSelect}
                    teamsBelow={props.teamsBelow}
                    teamsAbove={props.teamsAbove} matchup={props.matchup}/>
            </div>
            <div style={{
                display : "grid",
                gridTemplateRows : "1fr 1fr"
            }}>
                {/** This should be split between an up elbow and a down elebow */}
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
        </div>
    )
};