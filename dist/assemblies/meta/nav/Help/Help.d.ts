import React, { FC } from 'react';
export declare const HELP_CLASSNAMES: string[];
export declare const HELP_STYLE: React.CSSProperties;
export declare type HelpProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    onFeedbackSubmit?: (feedback: string) => Promise<void>;
};
export declare const Help: FC<HelpProps>;
