import React, {FC, ReactElement} from 'react';
import { Button, Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';

export const TOP_TEAM_ENTRY_CONTAINER_CLASSNAMES : string[] = [
    "p-4",
    "rounded-lg",
    "grid"
 ];
export const TOP_TEAM_ENTRY_CONTAINER_STYLE : React.CSSProperties = {
   alignContent : "center",
   alignItems : "center"
};


export const TOP_TEAM_ENTRY_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "text-sm",
    "cursor-pointer"
];
export const TOP_TEAM_ENTRY_INNER_STYLE : React.CSSProperties = {
    alignContent : "center",
    alignItems : "center",
    gridTemplateColumns : "1fr 4fr 2fr"
};

export type TopTeamEntryProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    team ? : ontology.Teamlike;
    stat ? : React.ReactNode;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    rank ? : number;
};

export const TopTeamEntry : FC<TopTeamEntryProps>  = (props) =>{

    const _team = props.team||ontology.MockHome;

    const handleTeamClick = async ()=>{
        props.onTeamClick && props.onTeamClick(_team.TeamID.toString());
    }

    return (
        <Button
            onClick={handleTeamClick}
            viusage={"backdrop"}
            classNames={[...!props.overrideClasses ? TOP_TEAM_ENTRY_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TOP_TEAM_ENTRY_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? TOP_TEAM_ENTRY_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TOP_TEAM_ENTRY_INNER_STYLE : {}, ...props.style}}>
                <div style={{
                    display : "flex"
                }}>
                    {props.rank && <span>{props.rank}.&nbsp;</span>}
                    <img height={24} width={24} src={_team.TeamLogoUrl}/>
                </div>
                &emsp;
                {_team.School}
                <span style={{
                    opacity : .5,
                    fontSize : 10
                }}>{props.stat}</span>
            </div>
        </Button>
    )
};