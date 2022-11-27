import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { ontology } from '../../../../util';

export const TEAM_MATCHUP_BUILDER_CONTAINER_DROPZONE_CLASSNAMES : string[] = [
    "rounded-lg",
    "border-gdg-500",
    "border-dashed",
    "border-2",
    "text-gdg-500", 
    "grid",
    "cursor-pointer"
];
export const TEAM_MATCHUP_BUILDER_CONTAINER_DROPZONE_STYLE : React.CSSProperties = {
    justifyContent : "center",
    alignItems : "center",
    alignContent : "center"
};

export const TEAM_MATCHUP_BUILDER_INNER_DROPZONE_CLASSNAMES : string[] = [
    "text-gdg-500",
    "grid",
    "h-full",
    "w-full"
];
export const TEAM_MATCHUP_BUILDER_INNER_DROPZONE_STYLE : React.CSSProperties = {
    alignItems : "center",
    height : "100%",
    width : "100%"
};

export type TeamMatchupBuilderDropzoneProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    onClick ? : ()=>void;
    team ? : ontology.Teamlike
};

export const TeamMatchupBuilderDropzone : FC<TeamMatchupBuilderDropzoneProps>  = (props) =>{

    return (
        <Wrapper 
            onClick={props.onClick}
            viusage='wrap'
            hoverAnimate
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_CONTAINER_DROPZONE_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_CONTAINER_DROPZONE_STYLE : {}, ...props.style}}>
            {!props.team && <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_INNER_DROPZONE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_INNER_DROPZONE_STYLE : {}, ...props.style}}>
                Pick Team
            </div>}
            {props.team && <Wrapper 
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
                <img src={props.team.TeamLogoUrl} width="300px"/>
            </div>
            <div>
                {props.team.School}
            </div>
            </Wrapper>}
        </Wrapper>
    )
};