import React, { FC } from 'react';
export declare const TABEL_CLASSNAMES: string[];
export declare const TABEL_STYLE: React.CSSProperties;
export interface Tablelike {
    hiddenHeads?: string[];
    head?: string[];
    data: {
        [key: string]: any;
    }[];
    toReact: {
        [key: string]: (v: any) => React.ReactNode;
    };
    compare: {
        [key: string]: (a: any, b: any) => number;
    };
}
export declare type TableProps = {
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    table: Tablelike;
    defaultSortBy?: {
        [key: string]: number;
    };
};
export declare const orderData: (table: Tablelike, sortBy: {
    [key: string]: number;
}) => Tablelike["data"];
export declare const getColumns: (table: Tablelike) => string[];
export declare const getColumn: (table: Tablelike, which: string) => any[];
export declare const Table: FC<TableProps>;
