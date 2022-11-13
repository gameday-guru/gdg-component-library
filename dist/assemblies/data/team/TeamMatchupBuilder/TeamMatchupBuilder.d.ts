import React, { FC } from 'react';
export declare const TEAM_MATCHUP_BUILDER_CONTAINER_CLASSNAMES: string[];
export declare const TEAM_MATCHUP_BUILDER_CONTAINER_STYLE: React.CSSProperties;
export declare const TEAM_MATCHUP_BUILDER_INNER_CLASSNAMES: string[];
export declare const TEAM_MATCHUP_BUILDER_INNER_STYLE: React.CSSProperties;
export declare type TeamMatchupBuilderProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const TeamMatchupBuilder: FC<TeamMatchupBuilderProps>;
