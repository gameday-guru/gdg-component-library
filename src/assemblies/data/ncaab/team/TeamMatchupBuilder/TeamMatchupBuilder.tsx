import React, {FC, ReactElement, useState} from 'react';
import { Button, Wrapper } from '../../../../../components';
import { Vs } from '../../../../../components/output/indicators/label/Vs';
import { Teamlike } from '../../../../../util/ontology';
import { TeamMatchupBuilderDropzone } from '../TeamMatchupBuilderDropzone';
import { Modal } from '../../../../../components/output/containers/modal/Modal';
import { PickTeamLarge } from '../PickTeamLarge/PickTeamLarge';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';

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
    onBuildMatchup ? : (home : string, away : string)=>Promise<void>;
};

export const TeamMatchupBuilder : FC<TeamMatchupBuilderProps>  = (props) =>{

    const _teams = props.teams||{};
    const medium = useSupportedMedia();
    const wrapperWidth = medium === "mobile" ? '80%' : '600px';
    const wrapperHeight = medium === "mobile" ? '100%' : '400px';

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
    const LeftInnerModal =
    <Wrapper  
    viusage='wrap'
    classNames={['p-4', 'rounded']}
    style={{
        height : wrapperHeight,
        width : wrapperWidth,
        overflow : 'scroll'
    }}> 
        <PickTeamLarge 
        teams={Object.values(_teams)}
        setWhich={async (which  : string )=>{
            setComparison({
                ...comparison,
                left : which
            });
            setLeftModal(false);
        }}/>
    </Wrapper>

    const [rightModal, setRightModal] = useState(false);
    const handleRightClose = ()=>{
        setLeftModal(false);
    }
    const RightInnerModal = 
    <Wrapper  
    viusage='wrap'
    classNames={['p-4', 'rounded']}
    style={{
        height : wrapperHeight,
        width : wrapperWidth,
        overflow : 'scroll',
    }}> 
        <PickTeamLarge 
        teams={Object.values(_teams)}
        setWhich={async (which  : string )=>{
            setComparison({
                ...comparison,
                right : which
            });
            setRightModal(false);
        }}/>
    </Wrapper>

    const handleBuildMatchup = async ()=>{
        
        if(comparison.left && comparison.right && props.onBuildMatchup)
            props.onBuildMatchup(comparison.left, comparison.right); // https://github.com/gameday-guru/gameday-guru/issues/16
    }

    // #16

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
                <div className='grid gap-4' style={{
                    gridTemplateColumns : "2fr 1fr 2fr",
                    gridTemplateRows : "1fr",
                    alignContent : "center",
                    alignItems : "center",
                    justifyItems : "center"
                }}>
                    <TeamMatchupBuilderDropzone 
                    key={'left'}
                    team={comparison.left ? _teams[comparison.left] : undefined}
                    Label={<h2 className='p-4'>Pick Away Team</h2>}
                    onClick={()=>{
                        setRightModal(false);
                        setLeftModal(true);
                    }}
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
                        <br/>
                        {
                            (comparison.left !== undefined)
                            && (comparison.right !== undefined)
                            && <Button viusage='backdrop'
                            onClick={handleBuildMatchup}>
                                Go
                            </Button>
                        }
                    </div>
                    <TeamMatchupBuilderDropzone 
                    key={'right'}
                    team={comparison.right ? _teams[comparison.right] : undefined}
                    Label={<h2 className='p-4'>Pick Home Team</h2>}
                    onClick={()=>{
                        setLeftModal(false);
                        setRightModal(true);
                    }}
                    style={{
                        height : "100%",
                        width : "100%"
                    }}/>
                </div>
            </div>
            <Modal 
                className='p-4'
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