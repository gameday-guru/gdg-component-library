import React, { FC } from 'react';
import { FieldCase, FilterTerms } from '../../../../../util/filter/filter';
export declare const FILTER_MODAL_DESKTOP_CLASSNAMES: string[];
export declare const FILTER_MODAL_DESKTOP_STYLE: React.CSSProperties;
export declare type FilterModalDesktopProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    filters?: FilterTerms;
    fieldCase?: FieldCase;
    setFilters?: (filters: FilterTerms) => Promise<void>;
};
export declare const FilterModalDesktop: FC<FilterModalDesktopProps>;
