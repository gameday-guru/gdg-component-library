import React, { FC } from 'react';
export declare const ROW_TUPLE_CLASSNAMES: string[];
export declare const ROW_TUPLE_STYLE: React.CSSProperties;
export declare type RowTupleProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    line?: number;
    odds?: number;
    projectedScore?: number;
};
export declare const RowTuple: FC<RowTupleProps>;
