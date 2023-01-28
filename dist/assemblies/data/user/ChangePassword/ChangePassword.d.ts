import React, { FC } from 'react';
export declare const CHANGE_PASSWORD_CLASSNAMES: string[];
export declare const CHANGE_PASSWORD_STYLE: React.CSSProperties;
export declare type ChangePasswordProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    onChangePasswordSubmit?: (args: {
        password: string;
        confirmedPassword: string;
    }) => Promise<void>;
};
export declare const ChangePassword: FC<ChangePasswordProps>;
