import React, { FC } from 'react';
export declare const DROPDOWN_CLASSNAMES: string[];
export declare const DROPDOWN_STYLE: React.CSSProperties;
export declare type DropdownProps = React.HTMLProps<HTMLSelectElement> & {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    options?: {
        [key: string]: React.ReactNode;
    };
    onOption?: (option: string) => Promise<void>;
    selected?: string;
};
export declare const Dropdown: FC<DropdownProps>;
