import React, { FC } from 'react';
import { ButtonProps } from '../Button';
export declare const FILTER_CONTAINER_CLASSNAMES: string[];
export declare const FILTER_CONTAINER_STYLE: React.CSSProperties;
export declare const FILTER_INNER_CLASSNAMES: string[];
export declare const FILTER_INNER_STYLE: React.CSSProperties;
export declare type FilterProps = ButtonProps & {
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    size?: number;
    Icon?: React.ReactNode;
};
export declare const Filter: FC<FilterProps>;
