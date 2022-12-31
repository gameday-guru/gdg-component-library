import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const TEAM_MATCHUP_BUILDER_CONTAINER_DROPZONE_CLASSNAMES: string[];
export declare const TEAM_MATCHUP_BUILDER_CONTAINER_DROPZONE_STYLE: React.CSSProperties;
export declare const TEAM_MATCHUP_BUILDER_INNER_DROPZONE_CLASSNAMES: string[];
export declare const TEAM_MATCHUP_BUILDER_INNER_DROPZONE_STYLE: React.CSSProperties;
export declare type TeamMatchupBuilderDropzoneProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    onClick?: () => void;
    team?: ontology.Teamlike;
    Label?: React.ReactNode;
};
export declare const TeamMatchupBuilderDropzone: FC<TeamMatchupBuilderDropzoneProps>;
