import React, { FC } from 'react';
export declare const PROJECTION_ZERO_SUM_CLASSNAMES: string[];
export declare const PROJECTION_ZERO_SUM_STYLE: React.CSSProperties;
export declare type ProjectionZeroSumProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    homeScore?: number;
    awayScore?: number;
};
export declare const ProjectionZeroSum: FC<ProjectionZeroSumProps>;
