import React, { FC } from 'react';
import { ontology } from '../../../../util';
export declare const NCAAB_MENS_TOP25_ENTRY_CONTAINER_CLASSNAMES: string[];
export declare const NCAAB_MENS_TOP25_ENTRY_CONTAINER_STYLE: React.CSSProperties;
export declare const NCAAB_MENS_TOP25_ENTRY_INNER_CLASSNAMES: string[];
export declare const NCAAB_MENS_TOP25_ENTRY_INNER_STYLE: React.CSSProperties;
export declare type NcaabMensTop25EntryProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    team?: ontology.Teamlike;
    rank?: number;
    trend?: boolean;
};
export declare const NcaabMensTop25Entry: FC<NcaabMensTop25EntryProps>;
