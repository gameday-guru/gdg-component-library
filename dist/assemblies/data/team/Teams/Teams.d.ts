import React, { FC } from 'react';
import { ontology } from '../../../../util';
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
};
export declare const Teams: FC<TeamsProps>;
