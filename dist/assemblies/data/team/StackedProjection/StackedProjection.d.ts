import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const STACKED_PROJECTION_CLASSNAMES: string[];
export declare const STACKED_PROJECTION_STYLE: React.CSSProperties;
export declare type StackedProjectionProps = {
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
export declare const StackedProjection: FC<StackedProjectionProps>;
