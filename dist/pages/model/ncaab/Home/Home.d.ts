import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const HOME_CLASSNAMES: string[];
export declare const HOME_STYLE: React.CSSProperties;
export declare type HomeProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    gameOfTheDay?: ontology.GameOfTheDaylike;
    top25Games?: ontology.ProjectedGamelike[];
    apTop25Teams?: ontology.RankTrendTeamlike[];
    gdgTop25Teams?: ontology.RankTrendTeamlike[];
    onWhich?: (which: "home" | "team" | "matchups") => Promise<void>;
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const Home: FC<HomeProps>;
