import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const WEEK_MATCHUP_CAROUSEL_CLASSNAMES: string[];
export declare const WEEK_MATCHUP_CAROUSEL_STYLE: React.CSSProperties;
export declare type WeekMatchupCarouselProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    groupBy?: number;
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
    gamesThisWeek?: ontology.ProjectedGamelike[];
};
export declare const WeekMatchupCarousel: FC<WeekMatchupCarouselProps>;
