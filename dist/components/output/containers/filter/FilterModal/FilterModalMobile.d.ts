import React, { FC } from 'react';
import { FieldCase, FilterTerms } from '../../../../../util/filter/filter';
export declare const FILTER_MODAL_MOBILE_CLASSNAMES: string[];
export declare const FILTER_MODAL_MOBILE_STYLE: React.CSSProperties;
export declare type FilterModalMobileProps = {
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
export declare const FilterModalMobile: FC<FilterModalMobileProps>;
