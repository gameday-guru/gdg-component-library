import React, { FC } from 'react';
export declare const STACKED_CLASSNAMES: string[];
export declare const STACKED_STYLE: React.CSSProperties;
export declare const STACKED_TOP_CLASSNAMES: string[];
export declare const STACKED_FLOATER_CLASSNAMES: string[];
export declare const STACKED_BOTTOM_CLASSNAMES: string[];
export declare const STACKED_GRIDCOL_TEMPLATE: React.CSSProperties;
export declare type StackedProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    Title?: React.ReactNode;
    TopHead?: React.ReactNode;
    TopBody?: React.ReactNode;
    BottomHead?: React.ReactNode;
    BottomBody?: React.ReactNode;
    Comparison?: React.ReactNode;
    wrapperClassNames?: string[];
};
export declare const Stacked: FC<StackedProps>;
