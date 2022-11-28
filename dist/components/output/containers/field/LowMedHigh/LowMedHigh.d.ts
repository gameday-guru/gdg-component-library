import React, { FC } from 'react';
export declare const LOW_MED_HIGH_CLASSNAMES: string[];
export declare const LOW_MED_HIGH_STYLE: React.CSSProperties;
export declare type LowMedHighProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    which?: "low" | "med" | "high";
};
export declare const LowMedHigh: FC<LowMedHighProps>;
