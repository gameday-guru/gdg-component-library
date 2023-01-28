import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const USER_HEADER_CONTAINER_CLASSNAMES: string[];
export declare const USER_HEADER_CONTAINER_STYLE: React.CSSProperties;
export declare const USER_HEADER_INNER_CLASSNAMES: string[];
export declare const USER_HEADER_INNER_STYLE: React.CSSProperties;
export declare type UserHeaderProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
    username?: string;
    onLogOut?: () => Promise<void>;
    onAccountClick?: () => Promise<void>;
};
export declare const UserHeader: FC<UserHeaderProps>;
