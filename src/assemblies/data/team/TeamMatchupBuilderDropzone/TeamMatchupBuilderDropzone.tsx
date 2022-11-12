import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';

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
    "grid"
];
export const TEAM_MATCHUP_BUILDER_INNER_DROPZONE_STYLE : React.CSSProperties = {
    alignItems : "center"
};

export type TeamMatchupBuilderDropzoneProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamMatchupBuilderDropzone : FC<TeamMatchupBuilderDropzoneProps>  = (props) =>{

    return (
        <Wrapper 
            viusage='wrap'
            hoverAnimate
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_CONTAINER_DROPZONE_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_CONTAINER_DROPZONE_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_INNER_DROPZONE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_INNER_DROPZONE_STYLE : {}, ...props.style}}>
                Pick Team
            </div>
        </Wrapper>
    )
};