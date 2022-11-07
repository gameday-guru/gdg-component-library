import React, { FC } from 'react';
export declare const LEFT_RIGHT_CLASSNAMES: string[];
export declare const LEFT_RIGHT_STYLE: React.CSSProperties;
export declare const LEFT_RIGHT_LEFT_CLASSNAMES: string[];
export declare const LEFT_RIGHT_RIGHT_CLASSNAMES: string[];
export declare type LeftRightProps = {
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    Left?: React.ReactNode;
    Right?: React.ReactNode;
};
export declare const LeftRight: FC<LeftRightProps>;
