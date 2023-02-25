import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { MockAway, MockHome } from '../../../../../util/ontology';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { BracketTeamCorrect } from './BracketTeamCorrect/BracketTeamCorrect';
import { BracketTeamIncorrect } from './BracketTeamIncorrect/BracketTeamIncorrect';
import { BracketTeamPick } from './BracketTeamPick/BracketTeamPick';
import { BracketTeamUndecided } from './BracketTeamUndecided/BracketTeamUndecided';
import { generate } from 'shortid';
import { PROJECTION_WIN_PERCENTAGE_STYLE } from '../../team';
import { BracketTeamNeedsData } from './BracketTeamNeedsData/BracketTeamNeedsData';

export const BRACKET_TEAM_CLASSNAMES : string[] = [ ];
export const BRACKET_TEAM_STYLE : React.CSSProperties = {
    display : "grid",
    gridTemplateRows : "1fr 1fr"
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

    teams ? : {[key : string] : ontology.Teamlike};

    team ? : ontology.Teamlike
    away ? : boolean;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onTeamSelect ? : (teamId : string)=>Promise<void>;
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
    needsSelection ? : boolean;
    getMockUserProjection ? : ()=>number | undefined;
    getMockActualProjection ? : ()=>number | undefined;
    getMockUserProjectionWithId ? : (id : string)=>number|undefined;
    getProbability ? : () => number | undefined;
    getProbabilityWithId ? : (id : string) => number | undefined;

};

export const BracketTeam : FC<BracketTeamProps>  = (props) =>{

    const _userTeam = props.userTeam//||MockHome;
    const _actualTeam = props.actualTeam//||MockAway;
    const _teams = props.teams||{
        [MockHome.TeamID.toString()] : MockHome,
        [MockAway.TeamID.toString()] : MockAway
    }

    let stack = [];
    if(props.needsSelection)
        stack = [
            <BracketTeamNeedsData 
            key={generate()}
            style={props.top ? {
                borderTopLeftRadius : "10px",
                borderTopRightRadius : "10px"
            } : {
                borderBottomLeftRadius : "10px",
                borderBottomRightRadius : "10px"
            }}/>
        ]
    else if(!props.actualTeam) stack = [
        ...!props.top ? [<div key={generate()}></div>] : [],
        <BracketTeamPick
            getProbabilityWithId={props.getProbabilityWithId}
            getMockUserProjectionWithId={props.getMockUserProjectionWithId}
            getMockProjection={props.getMockUserProjection}
            onTeamSelect={props.onTeamSelect}
            key={generate()}
            classNames={["p-2"]}
            style={props.top ? {
                borderTopLeftRadius : "10px",
                borderTopRightRadius : "10px"
            } : {
                borderBottomLeftRadius : "10px",
                borderBottomRightRadius : "10px"
            }}
            team={_userTeam}
            teams={_teams}
            onTeamClick={props.onTeamClick}
            bracketProbability={props.userTeamProbability}
            actualScore={props.actualScore}/>
    ];
    else if(_userTeam && (_userTeam?.TeamID === _actualTeam?.TeamID)) stack = [
        ...props.top ? [<div key={generate()}></div>] : [],
        <BracketTeamCorrect
            key={generate()}
            classNames={["p-2"]}
            style={props.top ? {
                borderTopLeftRadius : "10px",
                borderTopRightRadius : "10px"
            } : {
                borderBottomLeftRadius : "10px",
                borderBottomRightRadius : "10px"
            }}
            team={_userTeam}
            onTeamClick={props.onTeamClick}
            bracketProbability={props.actualTeamProbability}
            actualScore={props.actualScore}/>
    ];
    else if(_userTeam && _actualTeam && (_userTeam?.TeamID !== _actualTeam?.TeamID)) stack = [
        <BracketTeamIncorrect
        key={generate()}
        classNames={["p-2"]}
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
    ]
    else stack = [
        ...props.top ? [<div key={generate()}></div>] : [],
        <BracketTeamUndecided
            getProbability={props.getProbability}
            getMockProjection={props.getMockActualProjection}
            classNames={["p-2"]}
            style={props.top ? {
                borderTopLeftRadius : "10px",
                borderTopRightRadius : "10px"
            } : {
                borderBottomLeftRadius : "10px",
                borderBottomRightRadius : "10px"
            }}
            key={generate()}
            team={props.userTeam||props.actualTeam}
            userTeamProjectedScore={props.userTeamProjectedScore}
            actualTeamProjectedScore={props.actualTeamProjectedScore}
            actualScore={props.actualScore}
            onTeamClick={props.onTeamClick}
        />
    ]

    return (
       <div style={{
            display : "grid",
            gridTemplateRows : "1fr",
       }}>
            {stack}
       </div>
    )
};