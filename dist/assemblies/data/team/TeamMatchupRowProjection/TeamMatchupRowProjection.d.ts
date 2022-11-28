import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_CLASSNAMES: string[];
export declare const TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_STYLE: React.CSSProperties;
export declare const TEAM_MATCHUP_ROW_PROJECTION_INNER_CLASSNAMES: string[];
export declare const TEAM_MATCHUP_ROW_PROJECTION_INNER_STYLE: React.CSSProperties;
export declare type TeamMatchupRowProjectionProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    home?: ontology.Teamlike;
    away?: ontology.Teamlike;
    game?: ontology.GameByDatelike;
    gameProjection?: ontology.ProjectionEntrylike;
};
export declare const TeamMatchupRowProjection: FC<TeamMatchupRowProjectionProps>;
