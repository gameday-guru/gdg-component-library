import React, { FC } from 'react';
import { Teamlike } from '../../../../../util/ontology';
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
    teams?: {
        [key: string]: Teamlike;
    };
    onBuildMatchup?: (home: string, away: string) => Promise<void>;
};
export declare const TeamMatchupBuilder: FC<TeamMatchupBuilderProps>;
