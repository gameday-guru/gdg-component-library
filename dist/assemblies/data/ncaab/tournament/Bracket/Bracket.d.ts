import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const BRACKET_CLASSNAMES: string[];
export declare const BRACKET_STYLE: React.CSSProperties;
export declare type BracketProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    bracket?: ontology.SparseBracketlike;
    onBracketUpdate?: (update: (bracket: ontology.SparseBracketlike) => Promise<ontology.SparseBracketlike>) => Promise<void>;
    mirror?: boolean;
    getMockProjection?: (args: {
        home_team_id: string;
        away_team_id: string;
        neutral: boolean;
    }) => ontology.ProjectionEntrylike | undefined;
    getProbability?: (args: {
        home_team_id: string;
        away_team_id: string;
        pos: {
            rowNo: number;
            colNo: number;
        };
    }) => {
        homeProbability?: number;
        awayProbability?: number;
    };
};
export declare const Bracket: FC<BracketProps>;
