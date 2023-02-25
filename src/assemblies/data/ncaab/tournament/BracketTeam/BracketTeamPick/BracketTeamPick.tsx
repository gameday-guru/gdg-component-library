import React, {FC, ReactElement} from 'react';
import { SideTeam } from '../../../team/SideTeam';
import { ontology } from '../../../../../../util';
import { Viusagelike } from '../../../../../../util/viusage/primary';
import { Wrapper } from '../../../../../../components';
import { spawn } from 'child_process';
import { BracketTeamUndecided } from '../BracketTeamUndecided/BracketTeamUndecided';
import { Cropdown } from '../../../../../../components/input/select/Cropdown';

export const BRACKET_TEAM_CORRECT_CLASSNAMES : string[] = [
  
];
export const BRACKET_TEAM_CORRECT_STYLE : React.CSSProperties = {
    display : 'grid',
    // gridTemplateColumns : "5fr 2fr 2fr 2fr",
    alignContent : "center",
    alignItems : "center",
    fontSize : 10
};

export type BracketTeamPickProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;

    teams ? : {[key : string] : ontology.Teamlike}
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
    bracketProbability ? : number;
    userTeamProjectedScore ? : number;
    actualTeamProjectedScore ? : number;
    actualScore ? : number;
    getMockProjection ? : ()=>number | undefined;
    getMockUserProjectionWithId ? : (id : string)=>number|undefined;
    getProbabilityWithId ? : (id : string) => number | undefined;

};

export const BracketTeamPick : FC<BracketTeamPickProps>  = (props) =>{

    const _viusage = props.viusage || "wrap";

    const _Teams : {[key : string] : React.ReactNode} = {};
    for(const [id, team] of Object.entries((props.teams||{})))
        _Teams[id] = <BracketTeamUndecided  
        getMockProjection={()=>{
            return props.getMockUserProjectionWithId && props.getMockUserProjectionWithId(id)
        }}
        getProbability={()=>{
            return props.getProbabilityWithId && props.getProbabilityWithId(id)
        }}
        team={team}
        classNames={props.classNames?.filter(name=>name.startsWith("text-"))} style={{
            fontSize : 10,
            padding : 0
        }} hideVisitorStatus viusage={_viusage}/>

    const handleTeamSelect = async (teamId : string)=>{
        if(props.onTeamSelect) await props.onTeamSelect(teamId);
    }

    return (
        <Wrapper
        viusage={_viusage}
        classNames={[...!props.overrideClasses ? BRACKET_TEAM_CORRECT_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BRACKET_TEAM_CORRECT_STYLE : {}, ...props.style}}>
            <Cropdown 
                options={_Teams} 
                selected={props.team?.TeamID?.toString()}
                handleOptionSelect={handleTeamSelect}/>
        </Wrapper>
    )
};