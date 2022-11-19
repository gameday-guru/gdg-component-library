import React, {FC, ReactElement} from 'react';

export const SPORTSDATAIO_CLASSNAMES : string[] = [ ];
export const SPORTSDATAIO_STYLE : React.CSSProperties = {
};

export type SportsdataioProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Sportsdataio : FC<SportsdataioProps>  = (props) =>{

    return (
        <a href="https://sportsdata.io" target="_blank">
            <img width={"150px"} src="https://sportsdata.io/assets/images/badges/sportsdataio_light_ss_300.png" alt="Powered by SportsDataIO"/>
        </a>
    )
};