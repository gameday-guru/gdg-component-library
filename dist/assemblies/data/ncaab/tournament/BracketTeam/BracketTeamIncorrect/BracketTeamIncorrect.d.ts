import React, { FC } from 'react';
import { ontology } from '../../../../../../util';
import { Viusagelike } from '../../../../../../util/viusage/primary';
export declare const BRACKET_TEAM_CORRECT_CLASSNAMES: string[];
export declare const BRACKET_TEAM_CORRECT_STYLE: React.CSSProperties;
export declare type BracketTeamIncorrectProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    incorrectTeam?: ontology.Teamlike;
    team?: ontology.Teamlike;
    away?: boolean;
    onTeamClick?: (teamId: string) => Promise<void>;
    viusage?: Viusagelike;
    size?: number;
    short?: boolean;
    reverse?: boolean;
    inlineVisitorStatus?: boolean;
    hideVisitorStatus?: boolean;
    decided?: boolean;
    top?: boolean;
    userTeam?: ontology.Teamlike;
    actualTeam?: ontology.Teamlike;
    userTeamProbability?: number;
    actualTeamProbability?: number;
    userTeamProjectedScore?: number;
    actualTeamProjectedScore?: number;
    actualScore?: number;
    getMockProjection?: () => number | undefined;
};
export declare const BracketTeamIncorrect: FC<BracketTeamIncorrectProps>;
