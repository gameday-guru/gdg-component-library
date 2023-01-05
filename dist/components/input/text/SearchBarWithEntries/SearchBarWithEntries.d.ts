import React, { FC } from 'react';
import { Viusagelike } from '../../../../util/viusage/primary';
import { WrapperProps } from '../../../output';
export declare const SEARCH_BAR_WITH_ENTRIES_CLASSNAMES: string[];
export declare const SEARCH_BAR_WITH_ENTRIES_STYLE: React.CSSProperties;
export declare type SearchBarWithEntriesProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    Entries?: React.ReactNode[];
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    viusage?: Viusagelike;
    entriesHeight?: React.CSSProperties["height"];
    entriesWrapperProps?: WrapperProps["innerProps"];
};
export declare const SearchBarWithEntries: FC<SearchBarWithEntriesProps>;
