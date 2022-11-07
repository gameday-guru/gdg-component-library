import React, { FC } from 'react';
export declare const LOGOED_SIDEBAR_CLASSNAMES: string[];
export declare const LOGOED_SIDEBAR_STYLE: React.CSSProperties;
export declare type LogoedSidebarProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    options?: {
        [key: string]: React.ReactNode;
    };
    which?: string;
};
export declare const LogoedSidebar: FC<LogoedSidebarProps>;
