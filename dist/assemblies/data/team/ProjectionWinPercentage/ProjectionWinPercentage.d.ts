import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const PROJECTION_WIN_PERCENTAGE_CLASSNAMES: string[];
export declare const PROJECTION_WIN_PERCENTAGE_STYLE: React.CSSProperties;
export declare type ProjectionWinPercentageProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    homeTeam?: ontology.Teamlike;
    homeEff?: ontology.EfficiencyEntrylike;
    awayTeam?: ontology.Teamlike;
    awayEff?: ontology.EfficiencyEntrylike;
    gameProjection?: ontology.ProjectionEntrylike;
};
export declare const ProjectionWinPercentage: FC<ProjectionWinPercentageProps>;
