import React, { FC } from 'react';
import { PillProps } from "../Pill";
export declare const PEG_PILL_CLASSNAMES: string[];
export declare const PEG_PILL_STYLE: React.CSSProperties;
export declare const PEG_CONTAINER_CLASSNAMES: string[];
export declare const PEG_CHILD_CONTAINER_CLASSNAMES: string[];
export declare const PEG_CHILD_CONTAINER_STYLE: React.CSSProperties;
export declare type PegPillProps = PillProps & {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    pegSize?: number;
    Peg?: React.ReactNode;
};
export declare const PegPill: FC<PegPillProps>;
