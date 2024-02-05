import React, {FC, ReactElement, useState} from 'react';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { Wrapper } from '../../../../../components';
import { SideTeam } from '../../team/SideTeam';
import { StackedPostblock } from '../../../../../components/output/containers/field';
import { generate } from 'shortid';
import { BracketMatchupStackdownMember } from '../BracketMatchupStackdownMember/BracketMatchupStackdownMember';
import { Cropdown } from '../../../../../components/input/select/Cropdown';
import { useMemo } from 'react';
import { TeamSearch } from '../../../../meta/header/MensCollegeBasketballHeader/TeamSearch';
import { Modal } from '../../../../../components/output/containers/modal/Modal';

export const BRACKET_MATCHUP_STACKDOWN_MEMBER_CLASSNAMES : string[] = [ 
    "gap-2"
];
export const BRACKET_MATCHUP_STACKDOWN_MEMBER_STYLE : React.CSSProperties = {
    display : 'grid',
    gridTemplateColumns : "1fr",
    // gridTemplateRows : "1fr 1fr",
    alignContent : "center",
    alignItems : "center",
    fontSize : 10,
    height : "70px",
    position : "relative"
};

export type BracketMatchupBuilderStackdownMemberProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    team ? : ontology.Teamlike
    onTeamClick ? : (teamId : string)=>Promise<void>;
    viusage ? : Viusagelike;
    size ? : number;
    short ? : boolean;
    reverse ? : boolean;

    // bracket
    bracketProbability ? : number;
    gameProbability ? : number;
    projectedScore ? : number;
    actualScore ? : number;
    rank ? : number;

    //
    teams ? : ontology.Teamlike[];

};

export const BracketMatchupBuilderStackdownMember : FC<BracketMatchupBuilderStackdownMemberProps>  = (props) =>{

    const _viusage = props.viusage||"wrap";
    const _teams = props.teams||[];

    const [search, setSearch] = useState(false);


    const Options = 
        <Modal 
            className='p-4'
            style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
            }}
            open={search} onClose={()=>setSearch(false)}>
            <div 
            className='p-4'
            style={{
            //  overflow : "hidden",
            alignContent : "center",
            display : "grid",
            }}>
                Select team
                <TeamSearch 
                viusage='backdrop'
                onTeamClick={props.onTeamClick}
                style={{
                    // fontSize : 8,
                    // zIndex : 20000,
                    // position : "absolute",
                    // left : 200,
                    //  : 8000000
                    // width : 100
                    // zIndex : 2000,
                    // position : "absolute",
                    // top : -50,
                    // opacity : 1.0
                }} teams={_teams}/>
            </div>
        </Modal>
    ;

    return (
        <Wrapper
        onContextMenu={(e)=>{
            e.preventDefault()
            setSearch(!search)
        }}
        viusage={_viusage}
        classNames={[...!props.overrideClasses ? BRACKET_MATCHUP_STACKDOWN_MEMBER_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BRACKET_MATCHUP_STACKDOWN_MEMBER_STYLE : {}, ...props.style}}>
            {search ? Options : <BracketMatchupStackdownMember style={{
               // zIndex : -1
            }} {...props}/>}
        </Wrapper>
    )
};