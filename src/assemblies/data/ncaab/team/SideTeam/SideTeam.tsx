import React, {FC, ReactElement} from 'react';
import { Button } from '../../../../../components';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';

export const SIDE_TEAM_CLASSNAMES : string[] = [
    "grid",
    "gap-2"
];
export const SIDE_TEAM_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 3fr",
    alignContent : "center",
    alignItems : "center"
};

export type SideTeamProps = {
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
};

export const SideTeam : FC<SideTeamProps>  = (props) =>{

    const team = props.team||ontology.MockHome;
    const _onClick = async (e : React.MouseEvent)=>{
        e.stopPropagation();
        props.onTeamClick && props.onTeamClick(team.TeamID.toString());
    }

    return (
        <Button
        onClick={_onClick}
        viusage={props.viusage||'wrap'}
        {...props}
        classNames={[...!props.overrideClasses ? SIDE_TEAM_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? SIDE_TEAM_STYLE : {}, ...props.style}}>
            <div>
                <img width={60} src={team.TeamLogoUrl}/>
            </div>
            <div>
                <h2 className='text'>{team.Name}</h2>
                <h2 className='text-sm'>{props.away ? "Away" : "Home"}</h2>
            </div>
        </Button>
    )
};