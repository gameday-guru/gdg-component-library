import React, { FC } from 'react';
import { viusage } from '../../../../util';
import { ontology } from '../../../../util';
export declare const MENS_NCAAB_TEAM_CONTENT_CONTAINER_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAM_CONTENT_CONTAINER_STYLE: React.CSSProperties;
export declare const MENS_NCAAB_TEAM_CONTENT_INNER_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAM_CONTENT_INNER_STYLE: React.CSSProperties;
export declare type MensNcaabTeamContentProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
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
export declare const MensNcaabTeamContent: FC<MensNcaabTeamContentProps>;
