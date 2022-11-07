import React, { FC } from 'react';
export declare const ROW_PROJECTION_CLASSNAMES: string[];
export declare const ROW_PROJECTION_STYLE: React.CSSProperties;
export declare type RowProjectionProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const RowProjection: FC<RowProjectionProps>;
