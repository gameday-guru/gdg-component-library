import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const NCAAB_MENS_BLOGS_CONTAINER_CLASSNAMES: string[];
export declare const NCAAB_MENS_BLOGS_CONTAINER_STYLE: React.CSSProperties;
export declare const NCAAB_MENS_BLOGS_INNER_CLASSNAMES: string[];
export declare const NCAAB_MENS_BLOGS_INNER_STYLE: React.CSSProperties;
export declare type NcaabMensBlogsProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
};
export declare const NcaabMensBlogs: FC<NcaabMensBlogsProps>;
