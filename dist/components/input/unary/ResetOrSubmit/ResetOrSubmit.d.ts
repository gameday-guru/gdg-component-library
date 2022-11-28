import React, { FC } from 'react';
import { ButtonProps } from '../Button';
export declare const RESET_OR_SUBMIT_CLASSNAMES: string[];
export declare const RESET_OR_SUBMIT_STYLE: React.CSSProperties;
export declare type ResetOrSubmitProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    resetProps?: ButtonProps;
    submitProps?: ButtonProps;
};
export declare const ResetOrSubmit: FC<ResetOrSubmitProps>;
