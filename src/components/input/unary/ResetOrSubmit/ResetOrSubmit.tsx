import React, {FC, ReactElement} from 'react';

export const RESET_OR_SUBMIT_CLASSNAMES : string[] = [ ];
export const RESET_OR_SUBMIT_STYLE : React.CSSProperties = {
};

export type ResetOrSubmitProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const ResetOrSubmit : FC<ResetOrSubmitProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? RESET_OR_SUBMIT_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? RESET_OR_SUBMIT_STYLE : {}, ...props.style}}>

        </div>
    )
};