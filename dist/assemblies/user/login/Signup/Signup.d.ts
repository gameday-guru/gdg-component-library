import React, { FC } from 'react';
export declare const SIGNUP_CLASSNAMES: string[];
export declare const SIGNUP_STYLE: React.CSSProperties;
export declare type SignupProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    onSignup?: (params: {
        username: string;
        password: string;
        passwordConfirmation: string;
    }) => Promise<void>;
};
export declare const Signup: FC<SignupProps>;
