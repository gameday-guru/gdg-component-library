import React, {FC, ReactElement} from 'react';
import { Tos as TosPage } from "../../pages/tos/Tos";

export const TOS_CLASSNAMES : string[] = [ ];
export const TOS_STYLE : React.CSSProperties = {
};

export type TosProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Tos : FC<TosProps>  = (props) =>{

    return (
        <TosPage/>
    )
};