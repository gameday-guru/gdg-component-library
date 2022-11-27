import React, {FC, ReactElement, useState} from 'react';
import { Wrapper } from '../../../../components';
import { Vs } from '../../../../components/output/indicators/label/Vs';
import { ontology } from '../../../../util';
import { Teamlike } from '../../../../util/ontology';
import { TeamMatchupBuilderDropzone } from '../TeamMatchupBuilderDropzone';
import { Modal } from '../../../../components/output/containers/modal/Modal';
import { PickTeamLarge } from '../PickTeamLarge/PickTeamLarge';

export const TEAM_MATCHUP_BUILDER_CONTAINER_CLASSNAMES : string[] = [ 
    "rounded-lg",
    "p-4"
];
export const TEAM_MATCHUP_BUILDER_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_MATCHUP_BUILDER_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4"
];
export const TEAM_MATCHUP_BUILDER_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    gridTemplateRows : "1fr 9fr"
};

export type TeamMatchupBuilderProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    teams ? : {[key : string] : Teamlike}
};

export const TeamMatchupBuilder : FC<TeamMatchupBuilderProps>  = (props) =>{

    const _teams = props.teams||{};

    const [
        comparison,
        setComparison
    ] = useState<{
        left ? : string,
        right  ? : string
    }>({})

    const [leftModal, setLeftModal] = useState(false);
    const handleLeftClose = ()=>{
        setLeftModal(false);
    }
    const LeftInnerModal = <PickTeamLarge 
    teams={Object.values(_teams)}
    setWhich={async (which  : string )=>{
        setComparison({
            ...comparison,
            left : which
        })
    }}/>

    const [rightModal, setRightModal] = useState(false);
    const handleRightClose = ()=>{
        setLeftModal(false);
    }
    const RightInnerModal = <PickTeamLarge 
    teams={Object.values(_teams)}
    setWhich={async (which  : string )=>{
        setComparison({
            ...comparison,
            left : which
        })
    }}/>

    return (
        <Wrapper 
            viusage='wrap'
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <h2 className='text-lg' style={{
                        textAlign : "start"
                    }}>Team Matchup Projection</h2>
                    <hr/>
                </div>
                <div className='grid' style={{
                    gridTemplateColumns : "2fr 1fr 2fr",
                    gridTemplateRows : "1fr",
                    alignContent : "center",
                    alignItems : "center",
                    justifyItems : "center"
                }}>
                    <TeamMatchupBuilderDropzone 
                    style={{
                        height : "100%",
                        width : "100%"
                    }}/>
                    <div>
                        <Vs 
                        style={{
                            fontSize : "18px",
                            height : "60px",
                            width : "60px"
                        }}
                        classNames={["p-4", "bg-gdg-500", "rounded-full", "text-black-500", "grid", "justify-center", "content-center"]}/>
                    </div>
                    <TeamMatchupBuilderDropzone style={{
                        height : "100%",
                        width : "100%"
                    }}/>
                </div>
            </div>
            <Modal 
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                }}
                open={leftModal} onClose={handleLeftClose}>
                {LeftInnerModal}
            </Modal>
            <Modal 
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                }}
                open={rightModal} onClose={handleRightClose}>
                {RightInnerModal}
            </Modal>
        </Wrapper>
    )
};