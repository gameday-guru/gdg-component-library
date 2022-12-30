import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const ROW_PROJECTION_CLASSNAMES: string[];
export declare const ROW_PROJECTION_STYLE: React.CSSProperties;
export declare type RowProjectionProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    team?: ontology.Teamlike;
    game?: ontology.GameByDatelike;
    gameProjection?: ontology.ProjectionEntrylike;
    away?: boolean;
    onTeamClick?: (teamId: string) => Promise<void>;
};
export declare const RowProjection: FC<RowProjectionProps>;
