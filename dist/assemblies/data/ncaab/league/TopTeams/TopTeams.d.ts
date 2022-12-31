import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const TOP_TEAMS_CONTAINER_CLASSNAMES: string[];
export declare const TOP_TEAMS_CONTAINER_STYLE: React.CSSProperties;
export declare const TOP_TEAMS_INNER_CLASSNAMES: string[];
export declare const TOP_TEAMS_INNER_STYLE: React.CSSProperties;
export declare type TopTeamsProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    teams?: ontology.Teamlike[];
    stats?: React.ReactNode[];
    Label?: React.ReactNode;
    onTeamClick?: (teamId: string) => Promise<void>;
};
export declare const TopTeams: FC<TopTeamsProps>;
