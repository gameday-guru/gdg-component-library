import React, { FC } from 'react';
import { ontology, viusage } from '../../../../../util';
export declare const NCAAB_MENS_BLOGS_DESKTOP_CONTAINER_CLASSNAMES: string[];
export declare const NCAAB_MENS_BLOGS_DESKTOP_CONTAINER_STYLE: React.CSSProperties;
export declare const NCAAB_MENS_BLOGS_DESKTOP_INNER_CLASSNAMES: string[];
export declare const NCAAB_MENS_BLOGS_DESKTOP_INNER_STYLE: React.CSSProperties;
export declare type NcaabMensBlogsDesktopProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
    blogs?: ontology.BlogArticlelike[];
    onBlogClick?: (id: string) => Promise<void>;
};
export declare const NcaabMensBlogsDesktop: FC<NcaabMensBlogsDesktopProps>;
