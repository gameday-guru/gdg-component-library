import React, { FC } from 'react';
export declare const SELF_OVERVIEW_CLASSNAMES: string[];
export declare const SELF_OVERVIEW_STYLE: React.CSSProperties;
export declare type SelfOverviewDesktopProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    onWhich?: (which: "overview" | "tos") => Promise<void>;
    onFeedbackSubmit?: (feedback: string) => Promise<void>;
    onChangePasswordSubmit?: (args: {
        password: string;
        confirmedPassword: string;
    }) => Promise<void>;
    username?: string;
    onLogOut?: () => Promise<void>;
};
export declare const SelfOverviewDesktop: FC<SelfOverviewDesktopProps>;
