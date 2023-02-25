import React, {FC, ReactElement} from 'react';
import { SideTeam } from '../../../team/SideTeam';
import { ontology } from '../../../../../../util';
import { Viusagelike } from '../../../../../../util/viusage/primary';
import { Wrapper } from '../../../../../../components';
import { spawn } from 'child_process';

export const BRACKET_TEAM_CORRECT_CLASSNAMES : string[] = [
  
];
export const BRACKET_TEAM_CORRECT_STYLE : React.CSSProperties = {
    display : 'grid',
    gridTemplateColumns : "5fr 2fr 2fr 2fr",
    alignContent : "center",
    alignItems : "center",
    fontSize : 10
};

export type BracketTeamUndecidedProps = {
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
    bracketProbability ? : number;
    userTeamProjectedScore ? : number;
    actualTeamProjectedScore ? : number;
    actualScore ? : number;
    getMockProjection ? : ()=>number | undefined;
    getProbability ? : () => number | undefined;


};

export const BracketTeamUndecided : FC<BracketTeamUndecidedProps>  = (props) =>{

    const _viusage = props.viusage || "wrap";
    const _bracketProbability = props.getProbability 
    && props.getProbability()||props.bracketProbability||0;

    const _userTeamProjectedScore = props.getMockProjection 
    && props.getMockProjection()||props.userTeamProjectedScore||0.0;

    const _projectedScores = props.actualTeamProjectedScore 
    ? [_userTeamProjectedScore, props.actualTeamProjectedScore]
    : [_userTeamProjectedScore];
    // const _actualScore = 68.4;

    const ScoreProjection = _projectedScores.length > 1 
    ? <>
        <span className='text-error-500' style={{
            textDecoration : "line-through"
        }}>
            {_projectedScores[0].toFixed(1)}
        </span>
        &emsp;
        <span>
            {_projectedScores[1].toFixed(1)}
        </span>
    </> 
    : <>
        <span>
            {_projectedScores[0].toFixed(1)}
        </span>
    </>;

    return (
        <Wrapper
        viusage={_viusage}
        classNames={[...!props.overrideClasses ? BRACKET_TEAM_CORRECT_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BRACKET_TEAM_CORRECT_STYLE : {}, ...props.style}}>
            <SideTeam 
            team={props.team}
            classNames={props.classNames?.filter(name=>name.startsWith("text-"))} style={{
                fontSize : 10,
                padding : 0
            }} hideVisitorStatus viusage={_viusage}/>
            <div>
                {Math.round(_bracketProbability * 100)}%
            </div>
            <div>
                {ScoreProjection}
            </div>
            <div>
                {props.actualScore || "--"}
            </div>
        </Wrapper>
    )
};