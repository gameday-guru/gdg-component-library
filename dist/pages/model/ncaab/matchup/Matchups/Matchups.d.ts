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
    teams?: {
        [key: string]: ontology.Teamlike;
    };
    onWhich?: (which: "home" | "team" | "matchups") => Promise<void>;
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
    gamesThisWeek?: ontology.ProjectedGamelike[];
    allUpcomingGames?: ontology.ProjectedGamelike[];
};
export declare const Matchups: FC<MatchupsProps>;
