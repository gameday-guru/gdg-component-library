import React, { FC } from 'react';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
export declare const BRACKET_TEAM_CLASSNAMES: string[];
export declare const BRACKET_TEAM_STYLE: React.CSSProperties;
export interface Entrylike {
    bracketProbability?: number;
    projectedScores?: [number] | [number, number];
    actualScore?: number;
}
export declare type BracketTeamProps = {
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
    away?: boolean;
    onTeamClick?: (teamId: string) => Promise<void>;
    onTeamSelect?: (teamId: string) => Promise<void>;
    viusage?: Viusagelike;
    size?: number;
    short?: boolean;
    reverse?: boolean;
    inlineVisitorStatus?: boolean;
    hideVisitorStatus?: boolean;
    userTeam?: ontology.Teamlike;
    actualTeam?: ontology.Teamlike;
    userTeamProbability?: number;
    actualTeamProbability?: number;
    userTeamProjectedScore?: number;
    actualTeamProjectedScore?: number;
    actualScore?: number;
    top?: boolean;
    needsSelection?: boolean;
    getMockUserProjection?: () => number | undefined;
    getMockActualProjection?: () => number | undefined;
    getMockUserProjectionWithId?: (id: string) => number | undefined;
    getProbability?: () => number | undefined;
    getProbabilityWithId?: (id: string) => number | undefined;
};
export declare const BracketTeam: FC<BracketTeamProps>;
