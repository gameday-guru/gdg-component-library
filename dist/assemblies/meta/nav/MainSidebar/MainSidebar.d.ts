import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const SIDEBAR_CONTAINER_CLASSNAMES: string[];
export declare const SIDEBAR_CONTAINER_STYLE: React.CSSProperties;
export declare const SIDEBAR_INNER_CLASSNAMES: string[];
export declare const SIDEBAR_INNER_STYLE: React.CSSProperties;
export declare type MainSidebarProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    viusage?: viusage.primary.Viusagelike;
    which?: "home" | "team" | "matchups";
    onWhich?: (which: "home" | "team" | "matchups") => Promise<void>;
    onFeedbackSubmit?: (feedback: string) => Promise<void>;
};
export declare const MainSidebar: FC<MainSidebarProps>;
