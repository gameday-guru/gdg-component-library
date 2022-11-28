import React, { FC } from 'react';
export declare const LOGIN_SIGNUP_CLASSNAMES: string[];
export declare const LOGIN_SIGNUP_STYLE: React.CSSProperties;
export declare type LoginSignupProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    which?: "login" | "signup";
    onLogin?: (params: {
        username: string;
        password: string;
    }) => Promise<void>;
    onSignup?: (params: {
        username: string;
        password: string;
        passwordConfirmation: string;
    }) => Promise<void>;
};
export declare const LoginSignup: FC<LoginSignupProps>;
