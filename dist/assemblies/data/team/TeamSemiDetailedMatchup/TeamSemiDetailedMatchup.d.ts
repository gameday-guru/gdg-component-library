import React, { FC } from 'react';
export declare const TEAM_DETAILED_MATCHUP_CONTAINER_CLASSNAMES: string[];
export declare const TEAM_DETAILED_MATCHUP_CONTAINER_STYLE: React.CSSProperties;
export declare const TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES: string[];
export declare const TEAM_DETAILED_MATCHUP_INNER_STYLE: React.CSSProperties;
export declare type TeamSemiDetailedMatchupProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const TeamSemiDetailedMatchup: FC<TeamSemiDetailedMatchupProps>;
