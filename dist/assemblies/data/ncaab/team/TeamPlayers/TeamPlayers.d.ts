import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const PLAYERS_CONTAINER_CLASSNAMES: string[];
export declare const PLAYERS_CONTAINER_STYLE: React.CSSProperties;
export declare const PLAYERS_INNER_CLASSNAMES: string[];
export declare const PLAYERS_INNER_STYLE: React.CSSProperties;
export declare type PlayersProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    players?: ontology.Playerlike[];
    Label?: React.ReactNode;
};
export declare const Players: FC<PlayersProps>;
