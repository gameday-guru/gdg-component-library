import React, { FC } from 'react';
export declare const CAROUSEL_CLASSNAMES: string[];
export declare const CAROUSEL_STYLE: React.CSSProperties;
export declare const CAROUSEL_CHEVRON_CLASSNAMES: string[];
export declare type CarouselProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    Entries?: React.ReactNode[];
    onLeft?: (e: React.MouseEvent, oldIndex: number, newIndex: number) => void;
    onRight?: (e: React.MouseEvent, oldIndex: number, newIndex: number) => void;
    size?: number;
    Label?: React.ReactNode;
    position?: "top" | "bottom" | "middle";
};
export declare const Carousel: FC<CarouselProps>;
