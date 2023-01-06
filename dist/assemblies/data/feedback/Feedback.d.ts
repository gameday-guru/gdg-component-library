import React, { FC } from 'react';
export declare const FEEDBACK_CLASSNAMES: string[];
export declare const FEEDBACK_STYLE: React.CSSProperties;
export declare type FeedbackProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    onFeedbackSubmit?: (feedback: string) => Promise<void>;
};
export declare const Feedback: FC<FeedbackProps>;
