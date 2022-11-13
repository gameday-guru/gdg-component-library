import React, {FC, ReactElement, RefObject, useRef} from 'react';
import { Wrapper } from '../../Wrapper';

export const MODAL_CLASSNAMES : string[] = [
    "absolute"
];
export const MODAL_STYLE : React.CSSProperties = {
};

export type ModalProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    right ? : boolean;
    bottom ? :  boolean;
    gap ? : number;
    Modal ? : React.ReactNode;
};

export const Modal : FC<ModalProps>  = (props) =>{

    const horizontal : React.CSSProperties = 
    props.right ? {
        right : -(props.gap || 10)
    } : {
        left : -(props.gap || 10)
    };
    
    const vertical : React.CSSProperties =
    props.bottom ? {
        bottom : -(props.gap || 10)
    } : {
        top : -(props.gap || 10)
    };
    

    return (
        <div  style={{
            position : "relative",
            ...props.style
        }} {...props}>
            {props.children}
            <Wrapper
                viusage='wrap'
                classNames={[...!props.overrideClasses ? MODAL_CLASSNAMES : [], ...props.classNames||[]]}
                style={{
                    ...!props.overrideStyle ? MODAL_STYLE : {}, 
                    ...vertical, 
                    ...horizontal, 
                    ...props.style
                }}>
                    {props.Modal}
            </Wrapper>
        </div>
    )
};