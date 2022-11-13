import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const MENS_NCAAB_TEAM_CONTENT_CONTAINER_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAM_CONTENT_CONTAINER_STYLE: React.CSSProperties;
export declare const MENS_NCAAB_TEAM_CONTENT_INNER_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAM_CONTENT_INNER_STYLE: React.CSSProperties;
export declare type MensNcaabTeamContentProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
};
export declare const MensNcaabTeamContent: FC<MensNcaabTeamContentProps>;
