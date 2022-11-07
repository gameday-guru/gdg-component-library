import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../util';

export const SIDE_TEAM_CLASSNAMES : string[] = [
    "grid",
    "gap-2"
];
export const SIDE_TEAM_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 3fr"
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
};

export const SideTeam : FC<SideTeamProps>  = (props) =>{

    const team = props.team||ontology.MockHome;

    return (
        <div
        className={[...!props.overrideClasses ? SIDE_TEAM_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? SIDE_TEAM_STYLE : {}, ...props.style}}>
            <div>
                <img width={60} src={team.TeamLogoUrl}/>
            </div>
            <div>
                <h2 className='text'>{team.Name}</h2>
                <h2 className='text-sm'>{props.away ? "Away" : "Home"}</h2>
            </div>
        </div>
    )
};