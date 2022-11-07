import React, { FC } from 'react';
export declare const STACKED_POSTBLOCK_CLASSNAMES: string[];
export declare const STACKED_POSTBLOCK_STYLE: React.CSSProperties;
export declare type StackedPostblockProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    Label?: React.ReactNode;
    Value?: React.ReactNode;
};
export declare const StackedPostblock: FC<StackedPostblockProps>;
