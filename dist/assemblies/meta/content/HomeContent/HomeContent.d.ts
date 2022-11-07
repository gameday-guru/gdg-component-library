import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const HOME_CONTENT_CONTAINER_CLASSNAMES: string[];
export declare const HOME_CONTENT_CONTAINER_STYLE: React.CSSProperties;
export declare const HOME_CONTENT_INNER_CLASSNAMES: string[];
export declare const HOME_CONTENT_INNER_STYLE: React.CSSProperties;
export declare type HomeContentProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
};
export declare const HomeContent: FC<HomeContentProps>;
