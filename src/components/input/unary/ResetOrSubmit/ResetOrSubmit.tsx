import React, {FC, ReactElement} from 'react';
import { Button, ButtonProps } from '../Button';

export const RESET_OR_SUBMIT_CLASSNAMES : string[] = [
    "flex",
    "gap-2"
];
export const RESET_OR_SUBMIT_STYLE : React.CSSProperties = {
};

export type ResetOrSubmitProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    resetProps ? : ButtonProps;
    submitProps ? : ButtonProps;
};

export const ResetOrSubmit : FC<ResetOrSubmitProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? RESET_OR_SUBMIT_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? RESET_OR_SUBMIT_STYLE : {}, ...props.style}}>
            <Button viusage='error' {...props.resetProps}>
                Reset
            </Button>
            <Button viusage='success' {...props.submitProps}>
                Submit
            </Button>
        </div>
    )
};