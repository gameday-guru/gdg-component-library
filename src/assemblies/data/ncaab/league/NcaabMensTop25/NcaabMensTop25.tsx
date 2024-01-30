import React, {FC, ReactElement, useState} from 'react';
import { Wrapper } from '../../../../../components';
import { MockOver } from '../../../../../components/output/MockOver';
import { ontology, viusage } from '../../../../../util';
import { DateString } from '../../generic';
import { NcaabMensTop25Entry } from '../NcaabMensTop25Entry';

export const NCAAB_MENS_TOP25_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4"
];
export const NCAAB_MENS_TOP25_CONTAINER_STYLE : React.CSSProperties = {

};

export const NCAAB_MENS_TOP25_INNER_CLASSNAMES : string[] = [
    "grid",
    "gap-2"
 ];
export const NCAAB_MENS_TOP25_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
};

export type NcaabMensTop25Props = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    apTop25 ? : ontology.RankTrendTeamlike[];
    gdgTop25 ? : ontology.RankTrendTeamlike[];
    which ? : "ap" | "gdg";
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const NcaabMensTop25 : FC<NcaabMensTop25Props>  = (props) =>{

    const [which, setWhich] = useState<"ap"|"gdg">(props.which||"ap");

    const _apTop25 = (
        !props.apTop25||props.apTop25?.length < 1 ? Array(25).fill(ontology.MockRankTrendTeam) : props.apTop25
    )
    .map((entry)=>{
        console.log('key: ', `apTop25Item-${entry.team.TeamID}`);
        return (
            <MockOver
                key={`apTop25Item-${entry.team.TeamID}-`}
                Content={<NcaabMensTop25Entry 
                    onTeamClick={props.onTeamClick}
                    key={entry.team.TeamID}
                    team={entry.team}
                    rank={entry.rank}
                    trend={entry.trend}
                    efficiency={entry.efficiency}/>}
                dependencies={[entry]}/>
    
        )
    });

    const _gdgTop25 = (
        !props.gdgTop25||props.gdgTop25?.length < 1 ? Array(25).fill(ontology.MockRankTrendTeam) : props.gdgTop25
    )
    .map((entry)=>{
        return (
            <MockOver
                key={`gdgTop25Item-${entry.team.TeamID}`}
                Content={<NcaabMensTop25Entry 
                    onTeamClick={props.onTeamClick}
                    key={entry.team.TeamID}
                    team={entry.team}
                    rank={entry.rank}
                    trend={entry.trend}
                    efficiency={entry.efficiency}/>}
                dependencies={[entry]}/>
        
        )
    })

    return (
        <Wrapper
        viusage={props.viusage||"wrap"}
        classNames={[...!props.overrideClasses ? NCAAB_MENS_TOP25_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? NCAAB_MENS_TOP25_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? NCAAB_MENS_TOP25_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? NCAAB_MENS_TOP25_INNER_STYLE : {}, ...props.style}}>
                <h2 className='text-xl'>Top 25</h2>
                <div style={{
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr"
                }}>
                    <div className='text-lg cursor-pointer' 
                    onClick={()=>setWhich('ap')}
                    style={{
                        borderBottom : which === "ap" ? `1px solid #019875` : undefined
                    }}>AP</div>
                    <div className='text-lg cursor-pointer' 
                    onClick={()=>setWhich('gdg')}
                    style={{
                        borderBottom : which === "gdg" ? `1px solid #019875` : undefined
                    }}>Gameday Guru</div>
                </div>
                <hr/>
                <div>
                    <DateString/>
                </div>
                <div className='grid gap-2 text-sm'>
                    {which === "ap" ? _apTop25 : _gdgTop25}
                </div>
            </div>
        </Wrapper>
    )
};