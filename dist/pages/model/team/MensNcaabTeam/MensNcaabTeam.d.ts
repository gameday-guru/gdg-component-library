import React, { FC } from 'react';
export declare const MENS_NCAAB_TEAM_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAM_STYLE: React.CSSProperties;
export declare type MensNcaabTeamProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
};
export declare const MensNcaabTeam: FC<MensNcaabTeamProps>;
