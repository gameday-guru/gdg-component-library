import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const SIDEBAR_CONTAINER_CLASSNAMES: string[];
export declare const SIDEBAR_CONTAINER_STYLE: React.CSSProperties;
export declare const SIDEBAR_INNER_CLASSNAMES: string[];
export declare const SIDEBAR_INNER_STYLE: React.CSSProperties;
export declare type SidebarProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    viusage?: viusage.primary.Viusagelike;
    Header?: React.ReactNode;
    which?: string;
    options?: {
        [key: string]: React.ReactNode;
    };
};
export declare const Sidebar: FC<SidebarProps>;
