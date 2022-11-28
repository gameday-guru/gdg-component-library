import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const MENS_NCAAB_TEAM_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAM_STYLE: React.CSSProperties;
export declare type MensNcaabTeamProps = {
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
    topDefensiveTeams?: ontology.Teamlike[];
    onWhich?: (which: "home" | "team" | "matchups") => Promise<void>;
};
export declare const MensNcaabTeam: FC<MensNcaabTeamProps>;
