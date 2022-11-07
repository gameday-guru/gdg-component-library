import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const NCAAB_MENS_TOP25_CONTAINER_CLASSNAMES: string[];
export declare const NCAAB_MENS_TOP25_CONTAINER_STYLE: React.CSSProperties;
export declare const NCAAB_MENS_TOP25_INNER_CLASSNAMES: string[];
export declare const NCAAB_MENS_TOP25_INNER_STYLE: React.CSSProperties;
export declare type NcaabMensTop25Props = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
};
export declare const NcaabMensTop25: FC<NcaabMensTop25Props>;
