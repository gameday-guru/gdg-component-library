import React, { FC } from 'react';
import { ontology } from '../../../../../util';
import { BracketCorrectedMatchuplike } from '../../../../../util/ontology';
export declare const BRACKET_MATCHUP_CLASSNAMES: string[];
export declare const BRACKET_MATCHUP_STYLE: React.CSSProperties;
export declare type BracketMatchupProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    up?: boolean;
    inheritance?: boolean;
    matchup?: BracketCorrectedMatchuplike;
    home?: ontology.Teamlike;
    away?: ontology.Teamlike;
    teamsAbove?: {
        [key: string]: ontology.Teamlike;
    };
    teams?: {
        [key: string]: ontology.Teamlike;
    };
    teamsBelow?: {
        [key: string]: ontology.Teamlike;
    };
    onTeamsSelect?: (teams: {
        topTeamId?: string;
        bottomTeamId?: string;
    }) => Promise<void>;
    aboveNeedsSelection?: boolean;
    belowNeedsSelection?: boolean;
    getMockProjection?: (args: {
        home_team_id: string;
        away_team_id: string;
        neutral: boolean;
    }) => ontology.ProjectionEntrylike | undefined;
    getProbability?: (args: {
        home_team_id: string;
        away_team_id: string;
    }) => {
        homeProbability?: number;
        awayProbability?: number;
    };
};
export declare const BracketMatchup: FC<BracketMatchupProps>;
