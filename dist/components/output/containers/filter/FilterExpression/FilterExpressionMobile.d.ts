import React, { FC } from 'react';
import { FieldCase, FilterToken } from '../../../../../util/filter/filter';
export declare const FILTER_EXPRESSION_MOBILE_CLASSNAMES: string[];
export declare const FILTER_EXPRESSION_MOBILE_STYLE: React.CSSProperties;
export declare type FilterExpressionMobileProps = {
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
export declare const FilterExpressionMobile: FC<FilterExpressionMobileProps>;
