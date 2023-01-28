import React, { FC } from 'react';
export declare const LOGIN_CLASSNAMES: string[];
export declare const LOGIN_STYLE: React.CSSProperties;
export declare type SelfOverviewProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const SelfOverview: FC<SelfOverviewProps>;
