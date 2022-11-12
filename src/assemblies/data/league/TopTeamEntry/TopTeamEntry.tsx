import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { ontology } from '../../../../util';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';

export const TOP_TEAM_ENTRY_CONTAINER_CLASSNAMES : string[] = [
    "p-4",
    "rounded-lg"
 ];
export const TOP_TEAM_ENTRY_CONTAINER_STYLE : React.CSSProperties = {
   
};


export const TOP_TEAM_ENTRY_INNER_CLASSNAMES : string[] = [ 
    "flex",
    "text-sm",
    "cursor-pointer"
];
export const TOP_TEAM_ENTRY_INNER_STYLE : React.CSSProperties = {
    alignContent : "center",
    alignItems : "center"
};

export type TopTeamEntryProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    team ? : ontology.Teamlike;
};

export const TopTeamEntry : FC<TopTeamEntryProps>  = (props) =>{

    const _team = props.team||ontology.MockHome;

    return (
        <Wrapper
            viusage={"backdrop"}
            hoverAnimate
            classNames={[...!props.overrideClasses ? TOP_TEAM_ENTRY_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TOP_TEAM_ENTRY_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? TOP_TEAM_ENTRY_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TOP_TEAM_ENTRY_INNER_STYLE : {}, ...props.style}}>
                <img height={24} width={24} src={_team.TeamLogoUrl}/>
                &emsp;
                {_team.Name}
            </div>
        </Wrapper>
    )
};