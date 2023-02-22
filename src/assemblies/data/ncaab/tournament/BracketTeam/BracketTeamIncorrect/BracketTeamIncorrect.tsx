import React, {FC, ReactElement} from 'react';
import { SideTeam } from '../../../team/SideTeam';
import { ontology } from '../../../../../../util';
import { Viusagelike } from '../../../../../../util/viusage/primary';
import { Wrapper } from '../../../../../../components';
import { spawn } from 'child_process';
import { BracketTeamCorrect } from '../BracketTeamCorrect/BracketTeamCorrect';
import { BracketTeamUndecided } from '../BracketTeamUndecided/BracketTeamUndecided';

export const BRACKET_TEAM_CORRECT_CLASSNAMES : string[] = [

];
export const BRACKET_TEAM_CORRECT_STYLE : React.CSSProperties = {
    display : 'grid',
    gridTemplateRows : "1fr 1fr"
};

export type BracketTeamIncorrectProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    incorrectTeam ? : ontology.Teamlike
    team ? : ontology.Teamlike;
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
    decided ? : boolean;
    top ? : boolean;

    userTeam ? : ontology.Teamlike;
    actualTeam ? : ontology.Teamlike;
    userTeamProbability ? : number;
    actualTeamProbability ? : number;
    userTeamProjectedScore ? : number;
    actualTeamProjectedScore ? : number;
    actualScore ? : number;

};

export const BracketTeamIncorrect : FC<BracketTeamIncorrectProps>  = (props) =>{

    const _viusage = props.viusage || "wrap";

    const Correct = <div>
        <BracketTeamUndecided  
            team={props.actualTeam}
            bracketProbability={props.actualTeamProbability}
            userTeamProjectedScore={props.userTeamProjectedScore}
            actualScore={props.actualScore}
            onTeamClick={props.onTeamClick}
            classNames={props.decided ? ['text-success-500'] : []}/>
    </div>;
    const Incorrect =  <div style={{
        position : "relative"
    }}>
        <BracketTeamUndecided  
            team={props.userTeam}
            bracketProbability={props.userTeamProbability}
            userTeamProjectedScore={props.userTeamProjectedScore}
            onTeamClick={props.onTeamClick}
            classNames={['text-error-500']}/>
        <hr style={{
            position : "absolute",
            top : "50%",
            width : "100%"
        }} className='border-error-500'/>
    </div>;

    const _stack = props.top ? [Correct, Incorrect] : [Incorrect, Correct];

    return (
        <Wrapper
        viusage={_viusage}
        classNames={[...!props.overrideClasses ? BRACKET_TEAM_CORRECT_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BRACKET_TEAM_CORRECT_STYLE : {}, ...props.style}}>
            {_stack}
        </Wrapper>
    )
};