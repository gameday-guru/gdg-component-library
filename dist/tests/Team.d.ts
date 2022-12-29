import React, { FC } from 'react';
export declare const HOME_CLASSNAMES: string[];
export declare const HOME_STYLE: React.CSSProperties;
export declare type TeamProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const Team: FC<TeamProps>;
