import React, {FC, ReactElement} from 'react';

export const MENS_COLLEGE_BASKETBALL_CLASSNAMES : string[] = [ ];
export const MENS_COLLEGE_BASKETBALL_STYLE : React.CSSProperties = {
};

export type MensCollegeBasketballProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const MensCollegeBasketball : FC<MensCollegeBasketballProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? MENS_COLLEGE_BASKETBALL_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MENS_COLLEGE_BASKETBALL_STYLE : {}, ...props.style}}>

        </div>
    )
};