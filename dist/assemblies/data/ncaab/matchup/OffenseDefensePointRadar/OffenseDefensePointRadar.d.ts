import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const OFFENSE_DEFENSE_POINT_RADAR_CLASSNAMES: string[];
export declare const OFFENSE_DEFENSE_POINT_RADAR_STYLE: React.CSSProperties;
export declare type OffenseDefensePointRadarProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    homeDistro?: ontology.PointDistributionMemberlike;
    home?: ontology.Teamlike;
    awayDistro?: ontology.PointDistributionMemberlike;
    away?: ontology.Teamlike;
    reverse?: boolean;
};
export declare const OffenseDefensePointRadar: FC<OffenseDefensePointRadarProps>;
