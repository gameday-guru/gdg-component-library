import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const TEAM_GAGURU_STATS_BAR_CHART_CLASSNAMES: string[];
export declare const TEAM_GAGURU_STATS_BAR_CHART_STYLE: React.CSSProperties;
export declare type TeamGaguruStatsBarChartProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    team?: ontology.Teamlike;
    teamEfficiency?: ontology.EfficiencyEntrylike;
    leagueAverages?: ontology.LeagueAverageslike;
};
export declare const TeamGaguruStatsBarChart: FC<TeamGaguruStatsBarChartProps>;
