import React, { FC } from 'react';
export declare const LOGIN_CLASSNAMES: string[];
export declare const LOGIN_STYLE: React.CSSProperties;
export declare type PasswordResetProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    passwordResetMessage?: string;
};
export declare const PasswordReset: FC<PasswordResetProps>;
