import React, {FC, ReactElement} from 'react';

export const FIRST_LANDING_CLASSNAMES : string = 
    "";
export const FIRST_LANDING_STYLE : React.CSSProperties = {
};

export type FirstLandingProps = {
    style ? : React.CSSProperties
};

export const FirstLanding : FC<FirstLandingProps>  = ({style}) =>{

    return (
        <div
        className={FIRST_LANDING_CLASSNAMES}
        style={{...FIRST_LANDING_STYLE, ...style}}>

        </div>
    )
};