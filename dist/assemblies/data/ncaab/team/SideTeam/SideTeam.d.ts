import React, { FC } from 'react';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
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
    onTeamClick?: (teamId: string) => Promise<void>;
    viusage?: Viusagelike;
};
export declare const SideTeam: FC<SideTeamProps>;
