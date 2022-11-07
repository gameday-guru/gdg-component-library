import React, { FC } from 'react';
export declare const VS_CLASSNAMES: string[];
export declare const VS_STYLE: React.CSSProperties;
export declare type VsProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
};
export declare const Vs: FC<VsProps>;
