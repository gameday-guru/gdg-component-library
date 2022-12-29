import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { TopTeamEntry } from '../TopTeamEntry';

export const TOP_TEAMS_CONTAINER_CLASSNAMES : string[] = [
    "p-4",
    "rounded-lg"
 ];
export const TOP_TEAMS_CONTAINER_STYLE : React.CSSProperties = {
   
};


export const TOP_TEAMS_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2",
    "overflow-y-scroll"
];
export const TOP_TEAMS_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
};

export type TopTeamsProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    teams ? : ontology.Teamlike[];
    Label ? : React.ReactNode;
};

export const TopTeams : FC<TopTeamsProps>  = (props) =>{

    const _Label = props.Label||<>Top Teams</>

    const _teams = props.teams||Array(25).fill(ontology.MockHome);
    const teamEntries = _teams.map((team)=><TopTeamEntry team={team}/>)

    return (
        <Wrapper
            viusage={"wrap"}
            classNames={[...!props.overrideClasses ? TOP_TEAMS_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TOP_TEAMS_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? TOP_TEAMS_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TOP_TEAMS_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <h2 style={{
                        textAlign : 'start'
                    }} className='text-lg'>{_Label}</h2>
                    <hr/>
                </div>
                <div className='gap-2' style={{ overflow : "scroll", display : "grid", gridTemplateColumns : "1fr", }}>
                    {teamEntries}
                </div>
            </div>
        </Wrapper>
    )
};