import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const BLOG_ARTICLE_CLASSNAMES: string[];
export declare const BLOG_ARTICLE_STYLE: React.CSSProperties;
export declare type ConfirmTosProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    tos?: ontology.Toslike;
    confirmTos?: () => Promise<void>;
};
export declare const ConfirmTos: FC<ConfirmTosProps>;
