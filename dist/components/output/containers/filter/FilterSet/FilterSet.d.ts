import React, { FC } from 'react';
import { viusage } from '../../../../../util';
import { Emphasislike } from '../../../../../util/color/emphasis';
import { FieldCase } from '../../../../../util/filter/filter';
export declare const FILTER_SET_CLASSNAMES: string[];
export declare const FILTER_SET_STYLE: React.CSSProperties;
export declare type FilterSetProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    Title?: React.ReactNode;
    /** Which visual usage to take advantage of. */
    viusage?: viusage.primary.Viusagelike;
    emphasis?: Emphasislike;
    invert?: boolean;
    table?: any[];
    setTable?: (table: any[]) => Promise<void>;
    resetTable?: (table: any[]) => Promise<void>;
    fieldCase?: FieldCase;
};
export declare const FilterSet: FC<FilterSetProps>;
