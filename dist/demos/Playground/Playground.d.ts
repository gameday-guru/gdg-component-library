import React, { FC } from 'react';
export declare const PLAYGROUND_CLASSNAMES: string[];
export declare const PLAYGROUND_STYLE: React.CSSProperties;
export declare const pythagoreanWin: (home_team_score: number, away_team_score: number) => [number, number];
export declare type PlaygroundProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const Playground: FC<PlaygroundProps>;
