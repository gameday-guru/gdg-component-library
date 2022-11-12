import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { Vs } from '../../../../components/output/indicators/label/Vs';
import { TeamMatchupBuilderDropzone } from '../TeamMatchupBuilderDropzone';

export const TEAM_MATCHUP_BUILDER_CONTAINER_CLASSNAMES : string[] = [ 
    "grid",
    "rounded-lg",
    "text-lg",
    "p-4"
];
export const TEAM_MATCHUP_BUILDER_CONTAINER_STYLE : React.CSSProperties = {
  
};

export const TEAM_MATCHUP_BUILDER_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4",
    "h-full"
];
export const TEAM_MATCHUP_BUILDER_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : '2fr 1fr 2fr',
    // gridTemplateRows : "1fr",
    justifyContent : "center",
    justifyItems : "center",
    alignContent : "center",
    alignItems : "center"
};

export type TeamMatchupBuilderProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamMatchupBuilder : FC<TeamMatchupBuilderProps>  = (props) =>{

    return (
        <Wrapper 
            viusage='wrap'
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_CONTAINER_STYLE : {}, ...props.style}}>
            <h2 style={{
                textAlign : "start"
            }}>Team Matchup Projection</h2>
            <hr/>
            <br/>
            <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_INNER_STYLE : {}, ...props.style}}>
                <TeamMatchupBuilderDropzone style={{
                    height : "250px"
                }} classNames={["w-full"]}/>
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
                    height : "250px"
                }} classNames={["w-full"]}/>
            </div>
        </Wrapper>
    )
};