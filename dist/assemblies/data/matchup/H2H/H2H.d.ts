import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const H_2_H_CLASSNAMES: string[];
export declare const H_2_H_STYLE: React.CSSProperties;
export declare type H2HProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    Home?: ontology.Teamlike;
    Away?: ontology.Teamlike;
};
export declare const H2H: FC<H2HProps>;
