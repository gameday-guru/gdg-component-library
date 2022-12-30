import React, { FC } from 'react';
export declare const DATE_STRING_CLASSNAMES: string[];
export declare const DATE_STRING_STYLE: React.CSSProperties;
export declare type DateStringProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    date?: Date;
};
export declare const DateString: FC<DateStringProps>;
