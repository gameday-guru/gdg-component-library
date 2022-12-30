import React, { FC } from 'react';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
export declare const STACKED_TEAM_CLASSNAMES: string[];
export declare const STACKED_TEAM_STYLE: React.CSSProperties;
export declare type StackedTeamProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    Team?: ontology.Teamlike;
    onTeamClick?: (teamId: string) => Promise<void>;
    viusage?: Viusagelike;
};
export declare const StackedTeam: FC<StackedTeamProps>;
