import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const TOP_TEAM_ENTRY_CONTAINER_CLASSNAMES: string[];
export declare const TOP_TEAM_ENTRY_CONTAINER_STYLE: React.CSSProperties;
export declare const TOP_TEAM_ENTRY_INNER_CLASSNAMES: string[];
export declare const TOP_TEAM_ENTRY_INNER_STYLE: React.CSSProperties;
export declare type TopTeamEntryProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    team?: ontology.Teamlike;
    onTeamClick?: (teamId: string) => Promise<void>;
};
export declare const TopTeamEntry: FC<TopTeamEntryProps>;
