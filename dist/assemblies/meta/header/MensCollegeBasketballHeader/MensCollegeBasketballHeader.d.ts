import React, { FC } from 'react';
import { viusage } from '../../../../util';
export declare const MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_CLASSNAMES: string[];
export declare const MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_STYLE: React.CSSProperties;
export declare const MENS_COLLEGE_BASKETBALL_HEADER_INNER_CLASSNAMES: string[];
export declare const MENS_COLLEGE_BASKETBALL_HEADER_INNER_STYLE: React.CSSProperties;
export declare type MensCollegeBasketballHeaderProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
};
export declare const MensCollegeBasketballHeader: FC<MensCollegeBasketballHeaderProps>;
