import React, { FC, ReactElement } from 'react';
import { ontology } from '../../../../../util';
import { BracketCorrectedMatchuplike, ProjectionEntrylike } from '../../../../../util/ontology';
import { SideTeam } from '../../team/SideTeam';
import { BracketTeam } from '../BracketTeam/BracketTeam';
import { Vs } from '../../../../../components/output/indicators/label/Vs';
import { height } from '@mui/system';
import { Wrapper } from '../../../../../components';

export const BRACKET_MATCHUP_CLASSNAMES: string[] = [
    "grid"
];
export const BRACKET_MATCHUP_STYLE: React.CSSProperties = {
    // gridTemplateRows: "10fr 1fr 10fr",
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
    teamsAbove ? : {[key : string] : ontology.Teamlike};
    teams ? : {[key : string] : ontology.Teamlike};
    teamsBelow ? : {[key : string] : ontology.Teamlike};
    onTeamsSelect ? : (teams : {
        topTeamId ? : string,
        bottomTeamId ? : string
    })=>Promise<void>;
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

export const BracketMatchup: FC<BracketMatchupProps> = (props) => {

    const mkHandleTeamSelect = (top : boolean)=>async (teamId : string)=>{

        if(props.onTeamsSelect){

            if(top) await props.onTeamsSelect({
                topTeamId : teamId
            });
            else props.onTeamsSelect({
                bottomTeamId : teamId
            });


        }

    }

    const getMockProjectionUser = () : ProjectionEntrylike | undefined =>{

        if(props.getMockProjection 
            && props?.matchup?.userPick?.home
            && props?.matchup?.userPick?.away
        ){

            return props.getMockProjection({
                home_team_id : props.matchup.userPick.home.TeamID.toString(),
                away_team_id : props.matchup.userPick.away.TeamID.toString(),
                neutral : true
            });

        }

        return undefined;

    }

    const getMockProjectionUserHome = () : number | undefined => {

        return getMockProjectionUser()?.home_team_score;

    }

    const getMockProjectionUserAway = () : number | undefined =>{

        return getMockProjectionUser()?.away_team_score;

    }

    const getMockProjectionUserWithIdHome = (homeId : string) : number | undefined =>{

        if(props.getMockProjection 
            && props?.matchup?.userPick?.away
        ){

            return props.getMockProjection({
                home_team_id : homeId,
                away_team_id : props.matchup.userPick.away.TeamID.toString(),
                neutral : true
            })?.home_team_score;

        }

        return undefined;

    }

    const getMockProjectionUserWithIdAway = (awayId : string) : number | undefined =>{

        if(props.getMockProjection 
            && props?.matchup?.userPick?.home
        ){

            return props.getMockProjection({
                home_team_id : props.matchup.userPick.home.TeamID.toString(),
                away_team_id : awayId,
                neutral : true
            })?.away_team_score;

        }

        return undefined;

    }

    const getMockProjectionActual = () : ProjectionEntrylike | undefined =>{

        if(props.getMockProjection 
            && props?.matchup?.actualGame?.home
            && props?.matchup?.actualGame?.away
        ){

            return props.getMockProjection({
                home_team_id : props.matchup.actualGame.home.TeamID.toString(),
                away_team_id : props.matchup.actualGame.away.TeamID.toString(),
                neutral : true
            });

        }

        return undefined;

    }

    const getMockProjectionActualHome = () : number | undefined => {

        return getMockProjectionActual()?.home_team_score;

    }

    const getMockProjectionActualAway = () : number | undefined =>{

        return getMockProjectionActual()?.away_team_score;

    }
 
    const getHomeProbability = () : number | undefined =>{

        const home = props.matchup?.actualGame?.home 
        || props.matchup?.userPick?.home;
        const away = props.matchup?.actualGame?.away
        || props.matchup?.userPick?.away

        if(!(
            props.getProbability
            && home
            && away
        )) return undefined;

        const prob = props.getProbability({
            home_team_id : home.TeamID.toString(),
            away_team_id : away.TeamID.toString()
        });

        return prob.homeProbability;

    }

    const getAwayProbability = () : number | undefined =>{

        const home = props.matchup?.actualGame?.home 
        || props.matchup?.userPick?.home;
        const away = props.matchup?.actualGame?.away
        || props.matchup?.userPick?.away

        if(!(
            props.getProbability
            && home
            && away
        )) return undefined;

        const prob = props.getProbability({
            home_team_id : home.TeamID.toString(),
            away_team_id : away.TeamID.toString()
        });

        return prob.awayProbability;

    }

    const getHomeProbabilityWithId = (id : string) : number | undefined =>{

        const away = props.matchup?.actualGame?.away
        || props.matchup?.userPick?.away

        if(!(
            props.getProbability
            && away
        )) return undefined;

        console.log("Getting home probability with id", id, away.TeamID.toString());

        const prob = props.getProbability({
            home_team_id : id,
            away_team_id : away.TeamID.toString()
        });

        console.log(prob);

        return prob.homeProbability;

    }

    const getAwayProbabilityWithId = (id : string) : number | undefined =>{

        const home = props.matchup?.actualGame?.home 
        || props.matchup?.userPick?.home;

        if(!(
            props.getProbability
            && home
        )) return undefined;

        const prob = props.getProbability({
            home_team_id : home.TeamID.toString(),
            away_team_id : id
        });

        return prob.awayProbability;

    }

    return (
        <div
            className={[...!props.overrideClasses ? BRACKET_MATCHUP_CLASSNAMES : [], ...props.classNames || []].join(" ")}
            style={{ ...!props.overrideStyle ? BRACKET_MATCHUP_STYLE : {}, ...props.style }}>
            <div>
                <BracketTeam
                    getProbabilityWithId={getHomeProbabilityWithId}
                    getProbability={getHomeProbability}
                    getMockUserProjectionWithId={getMockProjectionUserWithIdHome}
                    getMockActualProjection={getMockProjectionActualHome}
                    getMockUserProjection={getMockProjectionUserHome}
                    needsSelection={props.aboveNeedsSelection}
                    onTeamSelect={mkHandleTeamSelect(true)}
                    teams={props.teamsAbove} 
                    actualTeam={props?.matchup?.actualGame?.home}
                    actualTeamProjectedScore={props?.matchup?.actualGame?.gameProjection?.home_team_score}
                    actualTeamProbability={props?.matchup?.actualGame?.homeProbability}
                    userTeam={props?.matchup?.userPick?.home}
                    userTeamProjectedScore={props?.matchup?.userPick?.gameProjection?.home_team_score}
                    userTeamProbability={props?.matchup?.userPick?.homeProbability}
                    actualScore={props?.matchup?.actualGame?.game?.HomeTeamScore}
                    top/>
            </div>
            <div>
                <Wrapper viusage='wrap'>
                    vs
                </Wrapper>
            </div>
            <div>
                <BracketTeam 
                    getProbabilityWithId={getAwayProbabilityWithId}
                    getProbability={getAwayProbability}
                    getMockUserProjectionWithId={getMockProjectionUserWithIdAway}
                    getMockActualProjection={getMockProjectionActualAway}
                    getMockUserProjection={getMockProjectionUserAway}
                    needsSelection={props.belowNeedsSelection}
                    onTeamSelect={mkHandleTeamSelect(false)}
                    teams={props.teamsBelow} 
                    actualTeam={props?.matchup?.actualGame?.away}
                    actualTeamProjectedScore={props?.matchup?.actualGame?.gameProjection?.away_team_score}
                    actualTeamProbability={props?.matchup?.actualGame?.awayProbability}
                    userTeam={props?.matchup?.userPick?.away}
                    userTeamProjectedScore={props?.matchup?.userPick?.gameProjection?.away_team_score}
                    userTeamProbability={props?.matchup?.userPick?.awayProbability}
                    actualScore={props?.matchup?.actualGame?.game?.AwayTeamScore}/>
            </div>
        </div>
    )
};