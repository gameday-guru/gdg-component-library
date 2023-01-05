import React, { FC } from 'react';
import { ontology } from '../../../util';
export declare const LOGIN_CLASSNAMES: string[];
export declare const LOGIN_STYLE: React.CSSProperties;
export declare type TosProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    confirmTos?: () => Promise<void>;
    tos?: ontology.Toslike;
};
export declare const Tos: FC<TosProps>;
