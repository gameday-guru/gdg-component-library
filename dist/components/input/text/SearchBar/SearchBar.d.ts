import React, { FC } from 'react';
import { Viusagelike } from '../../../../util/viusage/primary';
export declare const SEARCH_BAR_CLASSNAMES: string[];
export declare const SEARCH_BAR_STYLE: React.CSSProperties;
export declare type SearchBarProps = {
    Icon?: React.ReactNode;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    viusage?: Viusagelike;
};
export declare const SearchBar: FC<SearchBarProps>;
