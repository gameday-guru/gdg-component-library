import React, {FC, ReactElement, useState} from 'react';
import { TextInput } from '../../../../components/input/text/TextInput';
import { ontology } from '../../../../util';

export const PICK_TEAM_LARGE_CLASSNAMES : string[] = [ ];
export const PICK_TEAM_LARGE_STYLE : React.CSSProperties = {
};

export type PickTeamLargeProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    teams ? : ontology.Teamlike[];
    setWhich ? : (which : string)=>Promise<void>;
    size ? : number;
};

export const PickTeamLarge : FC<PickTeamLargeProps>  = (props) =>{

    const _teams = props.teams||[];
    const [filteredTeams, setFilteredTeams] = useState<ontology.Teamlike[]>([])

    const handleTextSearch = (text : string)=>{
        const searchTeams = _teams.filter((team)=>{
            return text.toLowerCase().includes(team.Name.toLowerCase());
        })
        setFilteredTeams(searchTeams);
    }

    const teamSelectors = filteredTeams
    .map((team)=>{

        return <div 
        onClick={()=>{
            props.setWhich && props.setWhich(team.TeamID.toString())
            .then(()=>{
                // TODO: this should really be a button, but we need some kind of success reporting
            })
            .catch(()=>{
                // TODO: tie into error reporting system
            })
        }}
        className='cursor-pointer'
        style={{
            display : "grid",
            gridTemplateColumns : "1fr",
            justifyContent : "center",
            alignContent : "center"
        }}>
            <div>
                <img src={team.TeamLogoUrl} width="300px"/>
            </div>
            <div>
                {team.Name}
            </div>
        </div>

    }).slice(0, props.size||5)

    return (
        <div
        className={[...!props.overrideClasses ? PICK_TEAM_LARGE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? PICK_TEAM_LARGE_STYLE : {}, ...props.style}}>
            <TextInput onChange={(e)=>{
                handleTextSearch(e.target.value)
            }}/>
            <div 
            className='gap-2'
            style={{
                display : 'flex'
            }}>
                {teamSelectors}
            </div>
        </div>
    )
};