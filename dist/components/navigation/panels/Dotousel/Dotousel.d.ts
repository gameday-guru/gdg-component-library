import React, { FC } from 'react';
import { viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';
export declare const DOTOUSEL_CLASSNAMES: string[];
export declare const DOTOUSEL_STYLE: React.CSSProperties;
export declare const DOTOUSEL_NVA_WRAPPER_CLASSNAMES: string[];
export declare type DotouselProps = {
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    Entries?: React.ReactNode[];
    size?: number;
    viusage?: viusage.primary.Viusagelike;
    emphasis?: Emphasislike;
};
export declare const Dotousel: FC<DotouselProps>;
