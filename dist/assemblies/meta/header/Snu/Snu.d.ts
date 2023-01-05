import React, { FC } from 'react';
import { WrapperProps } from '../../../../components';
export declare const SNU_CLASSNAMES: string[];
export declare const SNU_STYLE: React.CSSProperties;
export declare type SnuProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    size?: number;
    SearchBarEntries?: React.ReactNode[];
    searchBarInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    searchBarEntriesWrapperProps?: WrapperProps["innerProps"];
};
export declare const Snu: FC<SnuProps>;
