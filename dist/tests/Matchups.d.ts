import React, { FC } from 'react';
export declare const MATCHUPS_CLASSNAMES: string[];
export declare const MATCHUPS_STYLE: React.CSSProperties;
export declare type MatchupsProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const Matchups: FC<MatchupsProps>;
