import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const PICK_TEAM_LARGE_CLASSNAMES: string[];
export declare const PICK_TEAM_LARGE_STYLE: React.CSSProperties;
export declare type PickTeamLargeProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    teams?: ontology.Teamlike[];
    setWhich?: (which: string) => Promise<void>;
    size?: number;
};
export declare const PickTeamLarge: FC<PickTeamLargeProps>;
