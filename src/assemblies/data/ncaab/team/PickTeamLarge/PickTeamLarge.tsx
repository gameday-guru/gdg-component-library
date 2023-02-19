import React, {FC, ReactElement, useState} from 'react';
import { Wrapper } from '../../../../../components';
import { TextInput } from '../../../../../components/input/text/TextInput';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';

export const PICK_TEAM_LARGE_CLASSNAMES : string[] = [

 ];
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

    const medium = useSupportedMedia();

    const _teams = props.teams||[];
    const [filteredTeams, setFilteredTeams] = useState<ontology.Teamlike[]>(_teams)

    const handleTextSearch = (text : string)=>{
        const searchTeams = _teams.filter((team)=>{
            return (text.length < 1) 
            || text.toLowerCase().includes(team.School.toLowerCase())
            || text.toLowerCase().includes(team.School.toLowerCase());
        })
        setFilteredTeams(searchTeams);
    }

    const teamSelectors = filteredTeams
    .map((team)=>{

        return <Wrapper 
        onClick={()=>{
            props.setWhich && props.setWhich(team.TeamID.toString())
            .then(()=>{
                // TODO: this should really be a button, but we need some kind of success reporting
            })
            .catch(()=>{
                // TODO: tie into error reporting system
            })
        }}
        classNames={['cursor-pointer', 'rounded', 'p-4']}
        style={{
            display : "grid",
            gridTemplateColumns : "1fr",
            justifyContent : "center",
            alignContent : "center",
            justifyItems : 'center',
            alignItems : 'center'
        }}
        viusage='wrap'
        hoverAnimate>
        <div>
            <img src={team.TeamLogoUrl} width={medium === "mobile" ? "75px" : "300px"}/>
        </div>
        <div>
            {team.School}
        </div>
        </Wrapper>

    })

    return (
        <div
        className={[...!props.overrideClasses ? PICK_TEAM_LARGE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? PICK_TEAM_LARGE_STYLE : {}, ...props.style}}>
            <TextInput 
            placeholder='Search teams'
            style={{
                width : '100%'
            }}
            viusage='backdrop' fill
            onChange={(e)=>{
                handleTextSearch(e.target.value)
            }}/>
            <br/>
            <br/>
            <div 
            className='gap-4'
            style={{
                display : 'grid',
                gridTemplateColumns : medium === "mobile" ? '1fr' : '1fr 1fr 1fr',
                overflowY : 'scroll',
                height : '300px'
            }}>
                {teamSelectors}
            </div>
        </div>
    )
};