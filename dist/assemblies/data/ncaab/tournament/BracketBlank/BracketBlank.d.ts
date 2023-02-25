import React, { FC } from 'react';
export declare const BRACKET_BLANK_CLASSNAMES: string[];
export declare const BRACKET_BLANK_STYLE: React.CSSProperties;
export declare type BracketBlankProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    continuation?: boolean;
};
export declare const BracketBlank: FC<BracketBlankProps>;
