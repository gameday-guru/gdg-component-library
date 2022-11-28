import React, { FC } from 'react';
export declare const LOGIN_CLASSNAMES: string[];
export declare const LOGIN_STYLE: React.CSSProperties;
export declare type LoginProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
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
export declare const Login: FC<LoginProps>;
