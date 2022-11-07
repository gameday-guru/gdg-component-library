import React, { FC } from 'react';
export declare const LOGO_CLASSNAMES: string;
export declare const LOGO_STYLE: React.CSSProperties;
export interface LogoInjectionlike {
    (props: React.PropsWithChildren<LogoProps>): React.PropsWithChildren<LogoProps>;
}
export declare type LogoProps = {
    color?: React.CSSProperties["color"];
    style?: React.CSSProperties;
    injections?: LogoInjectionlike[];
};
export declare const Logo: FC<LogoProps>;
