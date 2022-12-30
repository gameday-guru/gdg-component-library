import React, { FC } from 'react';
export declare const MATCHUP_CLASSNAMES: string[];
export declare const MATCHUP_STYLE: React.CSSProperties;
export declare type MockMatchupProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const MockMatchup: FC<MockMatchupProps>;
