import React, { FC } from 'react';
import { vistate, viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';
export declare const WRAPPER_CLASSNAMES: string[];
export declare const WRAPPER_STYLE: React.CSSProperties;
export declare type WrapperProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    emphasis?: Emphasislike;
    /** Which visual state to enforce. */
    vistate?: vistate.primary.Vistatelike;
    /** Which visual usage to take advantage of. */
    viusage?: viusage.primary.Viusagelike;
    /** Invert the color? */
    invert?: boolean;
    /** */
    hoverAnimate?: boolean;
};
export declare const Wrapper: FC<WrapperProps>;
