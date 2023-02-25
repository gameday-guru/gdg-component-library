import React, { FC } from 'react';
import { Viusagelike } from '../../../../../../util/viusage/primary';
export declare const BRACKET_TEAM_NEEDS_DATA_CLASSNAMES: string[];
export declare const BRACKET_TEAM_NEEDS_DATA_STYLE: React.CSSProperties;
export declare type BracketTeamNeedsDataProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: Viusagelike;
};
export declare const BracketTeamNeedsData: FC<BracketTeamNeedsDataProps>;
