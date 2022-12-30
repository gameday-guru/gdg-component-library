import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const TEAM_CLASSNAMES: string[];
export declare const TEAM_STYLE: React.CSSProperties;
export declare type TeamProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    teams?: {
        [key: string]: ontology.Teamlike;
    };
    team?: ontology.Teamlike;
    pointDistribution?: ontology.PointDistributionlike;
    efficiency?: ontology.EfficiencyEntrylike;
    leagueAveragePointDistribution?: ontology.LeagueAverageslike;
    games?: ontology.ProjectedGamelike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const Team: FC<TeamProps>;
