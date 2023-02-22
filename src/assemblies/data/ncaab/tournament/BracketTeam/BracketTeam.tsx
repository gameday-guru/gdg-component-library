import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { MockAway, MockHome } from '../../../../../util/ontology';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { BracketTeamCorrect } from './BracketTeamCorrect/BracketTeamCorrect';
import { BracketTeamIncorrect } from './BracketTeamIncorrect/BracketTeamIncorrect';
import { BracketTeamUndecided } from './BracketTeamUndecided/BracketTeamUndecided';

export const BRACKET_TEAM_CLASSNAMES : string[] = [ ];
export const BRACKET_TEAM_STYLE : React.CSSProperties = {
};

export interface Entrylike {
    bracketProbability ? : number;
    projectedScores ? : [number]|[number, number];
    actualScore ? : number;
}

export type BracketTeamProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;

    team ? : ontology.Teamlike
    away ? : boolean;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    viusage ? : Viusagelike;
    size ? : number;
    short ? : boolean;
    reverse ? : boolean;

    // ENUM these two
    inlineVisitorStatus ? : boolean;
    hideVisitorStatus ? : boolean;

    // bracket
    userTeam ? : ontology.Teamlike;
    actualTeam ? : ontology.Teamlike;
    userTeamProbability ? : number;
    actualTeamProbability ? : number;
    userTeamProjectedScore ? : number;
    actualTeamProjectedScore ? : number;
    actualScore ? : number;
    top ? : boolean;

};

export const BracketTeam : FC<BracketTeamProps>  = (props) =>{

    const _userTeam = props.userTeam||MockHome;
    const _actualTeam = props.actualTeam||MockAway;

    if(!_actualTeam) return <BracketTeamUndecided
        team={_userTeam}
        onTeamClick={props.onTeamClick}
        bracketProbability={props.userTeamProbability}
        actualScore={props.actualScore}/>

    if(_userTeam.TeamID === _actualTeam.TeamID) return <BracketTeamCorrect
        team={_userTeam}
        onTeamClick={props.onTeamClick}
        bracketProbability={props.actualTeamProbability}
        actualScore={props.actualScore}
    />

    return (
       <BracketTeamIncorrect
        userTeam={props.userTeam}
        actualTeam={props.actualTeam}
        userTeamProbability={props.userTeamProbability}
        actualTeamProbability={props.actualTeamProbability}
        userTeamProjectedScore={props.userTeamProjectedScore}
        actualTeamProjectedScore={props.actualTeamProjectedScore}
        actualScore={props.actualScore}
        onTeamClick={props.onTeamClick}
        decided={!!props.actualScore}
        top={props.top}/>
    )
};