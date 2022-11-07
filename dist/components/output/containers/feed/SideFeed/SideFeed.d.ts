import React, { FC } from 'react';
export declare const SIDE_FEED_CLASSNAMES: string[];
export declare const SIDE_FEED_STYLE: React.CSSProperties;
export declare const SIDE_FEED_INNER_CLASSNAMES: string[];
export declare const SIDE_FEED_INNER_STYLE: React.CSSProperties;
export declare type SideFeedProps = {
    Header?: React.ReactNode;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
};
/**
 * Produces a SideFeed React Node.
 * @param props
 * @returns
 */
export declare const SideFeed: FC<SideFeedProps>;
