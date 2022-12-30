import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const TEAM_POINT_DISTRIBUTION_CLASSNAMES: string[];
export declare const TEAM_POINT_DISTRIBUTION_STYLE: React.CSSProperties;
export declare type TeamPointDistributionProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    pointDistribution?: ontology.PointDistributionMemberlike;
    Header?: React.ReactNode;
};
export declare const TeamPointDistribution: FC<TeamPointDistributionProps>;
