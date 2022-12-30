import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const NCAAB_MENS_OVERVIEW_CLASSNAMES: string[];
export declare const NCAAB_MENS_OVERVIEW_STYLE: React.CSSProperties;
export declare type NcaabMensOverviewProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    gameOfTheDay?: ontology.GameOfTheDaylike;
    top25Games?: ontology.ProjectedGamelike[];
    apTop25Teams?: ontology.RankTrendTeamlike[];
    gdgTop25Teams?: ontology.RankTrendTeamlike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const NcaabMensOverview: FC<NcaabMensOverviewProps>;
