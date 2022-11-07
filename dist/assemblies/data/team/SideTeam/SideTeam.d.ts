import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const SIDE_TEAM_CLASSNAMES: string[];
export declare const SIDE_TEAM_STYLE: React.CSSProperties;
export declare type SideTeamProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    team?: ontology.Teamlike;
    away?: boolean;
};
export declare const SideTeam: FC<SideTeamProps>;
