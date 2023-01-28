import React, { FC } from 'react';
export declare const PASSWORD_RESET_CLASSNAMES: string[];
export declare const PASSWORD_RESET_STYLE: React.CSSProperties;
export declare type PasswordResetProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    onPasswordResetRequest?: (email: string) => Promise<void>;
};
export declare const PasswordReset: FC<PasswordResetProps>;
