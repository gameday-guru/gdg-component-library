import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const SIDE_PLAYER_CLASSNAMES: string[];
export declare const SIDE_PLAYER_STYLE: React.CSSProperties;
export declare type SidePlayerProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    player?: ontology.Playerlike;
    onTeamClick?: (teamId: string) => Promise<void>;
};
export declare const SidePlayer: FC<SidePlayerProps>;
