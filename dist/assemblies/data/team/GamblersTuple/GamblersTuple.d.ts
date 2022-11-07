import React, { FC } from 'react';
export declare const GAMBLERS_TUPLE_CLASSNAMES: string[];
export declare const GAMBLERS_TUPLE_STYLE: React.CSSProperties;
export declare type GamblersTupleProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const GamblersTuple: FC<GamblersTupleProps>;
