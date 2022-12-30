import React, { FC } from 'react';
import { FieldCase, FilterTerms } from '../../../../../util/filter/filter';
export declare const FILTER_MODAL_CLASSNAMES: string[];
export declare const FILTER_MODAL_STYLE: React.CSSProperties;
export declare type FilterModalProps = {
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
export declare const FilterModal: FC<FilterModalProps>;
