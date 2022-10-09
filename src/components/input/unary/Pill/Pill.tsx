import React, {FC, ReactElement} from 'react';
import { Button, ButtonProps } from '../Button';

export const PILL_CLASSNAMES : string[] = [ 
    "border-2",
    "rounded-full",
    "cursor-pointer",
    "p-3",
    "gcr"
];
export const PILL_STYLE : React.CSSProperties = {
};

export type PillProps = ButtonProps & {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
};

export const Pill : FC<PillProps>  = (props) =>{

    return (
        <Button 
        overrideClasses 
        classNames={PILL_CLASSNAMES} 
        {...props}>{props.children}</Button>
    )
};