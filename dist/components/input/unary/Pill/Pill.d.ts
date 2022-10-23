import React, { FC } from 'react';
import { ButtonProps } from '../Button';
export declare const PILL_CLASSNAMES: string[];
export declare const PILL_STYLE: React.CSSProperties;
export declare type PillProps = ButtonProps & {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
};
export declare const Pill: FC<PillProps>;
