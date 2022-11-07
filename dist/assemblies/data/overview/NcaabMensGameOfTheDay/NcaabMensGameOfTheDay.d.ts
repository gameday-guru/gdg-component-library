import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_CLASSNAMES: string[];
export declare const NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_STYLE: React.CSSProperties;
export declare const NCAAB_MENS_GAME_OF_THE_DAY_INNER_CLASSNAMES: string[];
export declare const NCAAB_MENS_GAME_OF_THE_DAY_INNER_STYLE: React.CSSProperties;
export declare type NcaabMensGameOfTheDayProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
};
export declare const NcaabMensGameOfTheDay: FC<NcaabMensGameOfTheDayProps>;
