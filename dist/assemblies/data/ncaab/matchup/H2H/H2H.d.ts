import React, { FC } from 'react';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
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
    onTeamClick?: (teamId: string) => Promise<void>;
    viusage?: Viusagelike;
};
export declare const H2H: FC<H2HProps>;
