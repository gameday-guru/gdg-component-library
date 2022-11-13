import React, { FC } from 'react';
export declare const TEAM_EFFICIENCY_TABLE_CLASSNAMES: string[];
export declare const TEAM_EFFICIENCY_TABLE_STYLE: React.CSSProperties;
export declare type TeamEfficiencyTableProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const TeamEfficiencyTable: FC<TeamEfficiencyTableProps>;
