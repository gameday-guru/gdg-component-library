import React, { FC } from 'react';
import { FieldCase, FilterToken } from '../../../../../util/filter/filter';
export declare const FILTER_EXPRESSION_DESKTOP_CLASSNAMES: string[];
export declare const FILTER_EXPRESSION_DESKTOP_STYLE: React.CSSProperties;
export declare type FilterExpressionDesktopProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    fieldCase?: FieldCase;
    filter?: FilterToken;
    setFilter?: (filter: FilterToken) => Promise<void>;
    removeFilter?: () => Promise<void>;
};
export declare const FilterExpressionDesktop: FC<FilterExpressionDesktopProps>;
