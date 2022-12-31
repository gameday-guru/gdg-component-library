import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const NCAAB_MENS_OVERVIEW_STACK_CLASSNAMES: string[];
export declare const NCAAB_MENS_OVERVIEW_STACK_STYLE: React.CSSProperties;
export declare type NcaabMensOverviewStackProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    gameOfTheDay?: ontology.ProjectedGamelike;
    top25Games?: ontology.ProjectedGamelike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const NcaabMensOverviewStack: FC<NcaabMensOverviewStackProps>;
