import React, {FC, ReactElement} from 'react';

export const LOGO_CLASSNAMES : string = 
    "";
export const LOGO_STYLE : React.CSSProperties = {
    cursor : "pointer"
};

export interface LogoInjectionlike {
    (props : React.PropsWithChildren<LogoProps>) 
     : React.PropsWithChildren<LogoProps>
}; 

export type LogoProps = {
    color ? : React.CSSProperties["color"],
    style ? : React.CSSProperties, 
    injections ? : LogoInjectionlike[]
};

export const Logo : FC<LogoProps>  = (props) =>{
    // inject the dependencies in the order they are provided
    const _props =
    (props.injections||[])
    .reduce((last, injection)=>injection(last), {
        color : "#33b864",
        ...props
    } as LogoProps);   

    return (
        <div
        onClick={()=>window.location.href = "/"}
        className={LOGO_CLASSNAMES}
        style={{...LOGO_STYLE, ..._props.style}}> 
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="100%" height="100%" viewBox="0 0 120.000000 120.000000"
            preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)"
                fill={_props.color} stroke="none">
                    <path d="M614 1130 c-261 -28 -468 -217 -505 -459 -25 -168 52 -354 193 -464
                    73 -57 169 -103 246 -118 80 -15 278 -7 350 15 l52 17 0 144 c0 99 3 145 11
                    145 6 0 25 -12 42 -26 l31 -26 8 23 c17 46 90 351 85 356 -7 7 -364 -64 -389
                    -78 -20 -11 -19 -12 17 -49 l37 -38 -36 -40 c-20 -22 -61 -59 -91 -82 -65 -50
                    -57 -53 -178 62 -68 65 -77 78 -77 109 0 65 28 126 81 173 60 54 121 76 208
                    76 85 0 128 -13 191 -55 29 -19 54 -35 56 -35 2 0 4 67 4 149 0 107 -4 151
                    -12 159 -13 10 -140 37 -213 45 -22 3 -72 1 -111 -3z m476 -435 c0 -33 -63
                    -275 -72 -275 -5 0 -21 11 -36 25 -15 14 -29 25 -32 25 -3 0 -36 -30 -75 -66
                    -134 -126 -237 -219 -251 -227 -18 -10 -32 0 -136 94 -45 41 -84 73 -87 71 -3
                    -1 -22 -17 -41 -35 -69 -63 -63 -63 -110 -2 -23 30 -40 59 -38 64 1 5 45 46
                    96 91 81 69 96 79 110 68 8 -7 54 -45 101 -85 64 -54 89 -69 100 -63 27 16
                    211 186 211 195 0 2 -14 19 -32 37 l-31 32 154 32 c85 17 157 32 162 33 4 0 7
                    -6 7 -14z"/>
                </g>
            </svg>
        </div>
    )
};