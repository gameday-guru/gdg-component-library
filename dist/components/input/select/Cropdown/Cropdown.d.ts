import React, { FC } from 'react';
import { Viusagelike } from '../../../../util/viusage/primary';
export declare const CROPDOWN_CLASSNAMES: string[];
export declare const CROPDOWN_STYLE: React.CSSProperties;
export declare type CropdownProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: Viusagelike;
    options?: {
        [key: string]: React.ReactNode;
    };
    Up?: React.ReactNode;
    Down?: React.ReactNode;
    selected?: string;
    handleOptionSelect?: (which: string) => Promise<void>;
};
export declare const Cropdown: FC<CropdownProps>;
