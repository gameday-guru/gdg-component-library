import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const SELF_OVERVIEW_CONTENT_CONTAINER_CLASSNAMES: string[];
export declare const SELF_OVERVIEW_CONTENT_CONTAINER_STYLE: React.CSSProperties;
export declare const SELF_OVERVIEW_CONTENT_INNER_CLASSNAMES: string[];
export declare const SELF_OVERVIEW_CONTENT_INNER_STYLE: React.CSSProperties;
export declare type SelfOverviewContentProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
    onChangePasswordSubmit?: (args: {
        password: string;
        confirmedPassword: string;
    }) => Promise<void>;
    username?: string;
    onLogOut?: () => Promise<void>;
    onAccountClick?: () => Promise<void>;
};
export declare const SelfOverviewContent: FC<SelfOverviewContentProps>;
