import React, {FC, ReactElement} from 'react';
import { SideTeam } from '../../../team/SideTeam';
import { ontology } from '../../../../../../util';
import { Viusagelike } from '../../../../../../util/viusage/primary';
import { Wrapper } from '../../../../../../components';
import { spawn } from 'child_process';
import { BracketTeamUndecided } from '../BracketTeamUndecided/BracketTeamUndecided';

export const BRACKET_TEAM_CORRECT_CLASSNAMES : string[] = [
    "text-success-500"
];
export const BRACKET_TEAM_CORRECT_STYLE : React.CSSProperties = {
    display : 'grid',
    gridTemplateColumns : "5fr 2fr 2fr 2fr",
    alignContent : "center",
    alignItems : "center",
    fontSize : 10
};

export type BracketTeamCorrectProps = {
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
    getMockProjection ? : ()=>number | undefined

};

export const BracketTeamCorrect : FC<BracketTeamCorrectProps>  = (props) =>{

    return (
        <BracketTeamUndecided {...props} classNames={["text-success-500", ...props.classNames||[]]}/>
    )

};