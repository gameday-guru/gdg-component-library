import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const MENS_NCAAB_TEAMS_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAMS_STYLE: React.CSSProperties;
export declare type MensNcaabTeamsDesktopProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    tableEntries?: ontology.EfficiencyEntrylike[];
    teams?: {
        [key: string]: ontology.Teamlike;
    };
    topOffensiveTeams?: ontology.Teamlike[];
    topOffensiveTeamsStats?: React.ReactNode[];
    topDefensiveTeams?: ontology.Teamlike[];
    topDefensiveTeamsStats?: React.ReactNode[];
    onWhich?: (which: "home" | "team" | "matchups") => Promise<void>;
    onBuildMatchup?: (home: string, away: string) => Promise<void>;
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
    headerProjectedGames?: ontology.ProjectedGamelike[];
    headerTeams?: ontology.Teamlike[];
    onFeedbackSubmit?: (feedback: string) => Promise<void>;
    onAccountClick?: () => Promise<void>;
};
export declare const MensNcaabTeamsDesktop: FC<MensNcaabTeamsDesktopProps>;
