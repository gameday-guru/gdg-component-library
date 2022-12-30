import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const MATCHUPS_CLASSNAMES: string[];
export declare const MATCHUPS_STYLE: React.CSSProperties;
export declare type MatchupsProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    gamesThisWeek?: ontology.ProjectedGamelike[];
    allUpcomingGames?: ontology.ProjectedGamelike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const Matchups: FC<MatchupsProps>;
