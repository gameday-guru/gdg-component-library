import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const MATHCUP_COMPISON_MOBILE_CLASSNAMES: string[];
export declare const MATHCUP_COMPISON_MOBILE_STYLE: React.CSSProperties;
export declare type MatchupComparisonMobileProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    homeDistro?: ontology.PointDistributionlike;
    home?: ontology.Teamlike;
    homeEfficiency?: ontology.EfficiencyEntrylike;
    awayDistro?: ontology.PointDistributionlike;
    away?: ontology.Teamlike;
    awayEfficiency?: ontology.EfficiencyEntrylike;
    gameProjection?: ontology.ProjectionEntrylike;
    gameProjections?: ontology.ProjectionEntrylike[];
    leagueAverages?: ontology.LeagueAverageslike;
    game?: ontology.GameByDatelike;
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const MatchupComparisonMobile: FC<MatchupComparisonMobileProps>;