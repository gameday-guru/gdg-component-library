import React, { FC } from 'react';
import { ButtonProps } from '../Button';
export declare const ADDER_CLASSNAMES: string[];
export declare const ADDER_STYLE: React.CSSProperties;
export declare type AdderProps = ButtonProps & {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const Adder: FC<AdderProps>;
