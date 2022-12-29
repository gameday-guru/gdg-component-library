import React, {FC, ReactElement} from 'react';
import { Button } from '../../../../../components';
import { ontology } from '../../../../../util';

export const STACKED_TEAM_CLASSNAMES : string[] = [ ];
export const STACKED_TEAM_STYLE : React.CSSProperties = {
    color : "white",
    display : "grid",
    justifyContent : "center",
    justifyItems : "center" 
};

export type StackedTeamProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    Team ? : ontology.Teamlike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const StackedTeam : FC<StackedTeamProps>  = (props) =>{

    // defaults
    const _home = props.Team||ontology.MockHome;
    const _onClick = async ()=>{
        props.onTeamClick && props.onTeamClick(_home.TeamID.toString())
    }

    return (
        <Button
        onClick={_onClick}
        viusage='wrap'
        {...props}
        classNames={[...!props.overrideClasses ? STACKED_TEAM_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? STACKED_TEAM_STYLE : {}, ...props.style}}>
            <img width={60} src={_home.TeamLogoUrl}/>
            <br/>
            {_home.Name}
        </Button>
    )
};