import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const TEAM_MATCHUPS_CLASSNAMES: string[];
export declare const TEAM_MATCHUPS_STYLE: React.CSSProperties;
export declare type TeamMatchupsProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    games?: ontology.ProjectedGamelike[];
    team?: ontology.Teamlike;
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const TeamMatchups: FC<TeamMatchupsProps>;
