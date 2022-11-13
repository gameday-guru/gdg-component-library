import React, { FC } from 'react';
export declare const TEAM_MATCHUP_SELECT_ROW_CLASSNAMES: string[];
export declare const TEAM_MATCHUP_SELECT_ROW_STYLE: React.CSSProperties;
export declare type TeamMatchupSelectRowProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const TeamMatchupSelectRow: FC<TeamMatchupSelectRowProps>;
