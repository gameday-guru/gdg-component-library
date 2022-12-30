import React, { FC } from 'react';
import { EfficiencyEntrylike, LeagueAverageslike, PointDistributionlike } from '../../../../../util/ontology';
export declare const TEAM_STAT_TRIPLE_ROW_CLASSNAMES: string[];
export declare const TEAM_STAT_TRIPLE_ROW_STYLE: React.CSSProperties;
export declare type TeamStatTripleRowProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    pointDistribution?: PointDistributionlike;
    efficiency?: EfficiencyEntrylike;
    leagueAveragePointDistribution?: LeagueAverageslike;
};
export declare const TeamStatTripleRow: FC<TeamStatTripleRowProps>;
