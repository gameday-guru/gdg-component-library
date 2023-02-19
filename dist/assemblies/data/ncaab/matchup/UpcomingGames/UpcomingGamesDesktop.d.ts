import React, { FC } from 'react';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
export declare const UPCOMING_GAMES_DESKTOP_CONTAINER_CLASSNAMES: string[];
export declare const UPCOMING_GAMES_DESKTOP_CONTAINER_STYLE: React.CSSProperties;
export declare const UPCOMING_GAMES_DESKTOP_INNER_CLASSNAMES: string[];
export declare const UPCOMING_GAMES_DESKTOP_INNER_STYLE: React.CSSProperties;
export declare type UpcomingGamesDesktopProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    which?: string;
    games?: ontology.ProjectedGamelike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
    options?: string[];
    viusage?: Viusagelike;
    Title?: React.ReactNode;
    presets?: {
        [key: string]: (table: ontology.ProjectedGamelike[]) => Promise<ontology.ProjectedGamelike[]>;
    };
    stackedGamblers?: boolean;
};
export declare const UpcomingGamesDesktop: FC<UpcomingGamesDesktopProps>;
