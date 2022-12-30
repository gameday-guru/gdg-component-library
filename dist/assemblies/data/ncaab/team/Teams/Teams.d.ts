import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const TEAMS_CLASSNAMES: string[];
export declare const TEAMS_STYLE: React.CSSProperties;
export declare type TeamsProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    tableEntries?: ontology.EfficiencyEntrylike[];
    teams?: {
        [key: string]: ontology.Teamlike;
    };
    topOffensiveTeams?: ontology.Teamlike[];
    topDefensiveTeams?: ontology.Teamlike[];
    onBuildMatchup?: (home: string, away: string) => Promise<void>;
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const Teams: FC<TeamsProps>;
