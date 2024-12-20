import React, { FC } from 'react';
import { ontology, viusage } from '../../../../../util';
export declare const NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_CLASSNAMES: string[];
export declare const NCAAB_MENS_ALL_UPCOMING_GAMES_CONTAINER_STYLE: React.CSSProperties;
export declare const NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_CLASSNAMES: string[];
export declare const NCAAB_MENS_ALL_UPCOMING_GAMES_INNER_STYLE: React.CSSProperties;
export declare type NcaabMensAllUpcomingGamesProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
    which?: string;
    allUpcomingGames?: ontology.ProjectedGamelike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const isOnTheBubble: (team: ontology.Teamlike) => boolean;
export declare const ALL_UPCOMING_GAMES_PRESETS: {
    [key: string]: (table: ontology.ProjectedGamelike[]) => Promise<ontology.ProjectedGamelike[]>;
};
export declare const NcaabMensAllUpcomingGames: FC<NcaabMensAllUpcomingGamesProps>;
