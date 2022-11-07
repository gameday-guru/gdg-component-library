import React, { FC } from 'react';
export declare const NCAAB_MENS_OVERVIEW_CLASSNAMES: string[];
export declare const NCAAB_MENS_OVERVIEW_STYLE: React.CSSProperties;
export declare type NcaabMensOverviewProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
};
export declare const NcaabMensOverview: FC<NcaabMensOverviewProps>;
