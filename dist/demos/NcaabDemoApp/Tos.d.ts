import React, { FC } from 'react';
export declare const TOS_CLASSNAMES: string[];
export declare const TOS_STYLE: React.CSSProperties;
export declare type TosProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const Tos: FC<TosProps>;
