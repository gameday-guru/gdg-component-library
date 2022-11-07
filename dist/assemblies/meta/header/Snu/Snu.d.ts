import React, { FC } from 'react';
export declare const SNU_CLASSNAMES: string[];
export declare const SNU_STYLE: React.CSSProperties;
export declare type SnuProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    size?: number;
};
export declare const Snu: FC<SnuProps>;
