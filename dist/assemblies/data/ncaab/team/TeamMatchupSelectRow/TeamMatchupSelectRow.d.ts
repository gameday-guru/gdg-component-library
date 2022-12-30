import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const TEAM_MATCHUP_SELECT_ROW_CLASSNAMES: string[];
export declare const TEAM_MATCHUP_SELECT_ROW_STYLE: React.CSSProperties;
export declare type TeamMatchupSelectRowProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    topOffensiveTeams?: ontology.Teamlike[];
    topDefensiveTeams?: ontology.Teamlike[];
    teams?: {
        [key: string]: ontology.Teamlike;
    };
    onBuildMatchup?: (home: string, away: string) => Promise<void>;
    onTeamClick?: (teamId: string) => Promise<void>;
};
export declare const TeamMatchupSelectRow: FC<TeamMatchupSelectRowProps>;
