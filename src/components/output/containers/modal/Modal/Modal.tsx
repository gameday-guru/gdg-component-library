import React, {FC, ReactElement, RefObject, useRef} from 'react';
import { Wrapper } from '../../Wrapper';
import { Modal as MuiModal, ModalProps as MuiModalProps } from '@mui/material';

export const MODAL_CLASSNAMES : string[] = [
    "rounded-lg"
];
export const MODAL_STYLE : React.CSSProperties = {
};

export type ModalProps = MuiModalProps & {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    right ? : boolean;
    bottom ? :  boolean;
    gap ? : number;
};

export const Modal : FC<ModalProps>  = (props) =>{

    const ref = useRef<HTMLDivElement>();

    const horizontal : React.CSSProperties = 
    props.right ? {
        left : (ref.current?.clientLeft||0) + (ref.current?.clientWidth||0) + (props.gap|| 10)
    } : {
        right : (ref.current?.clientLeft||0) + (ref.current?.clientWidth||0) + (props.gap|| 10)
    };
    
    const vertical : React.CSSProperties =
    props.bottom ? {
        top : (ref.current?.clientTop||0) + (ref.current?.clientWidth||0) + (props.gap|| 10)
    } : {
        top : -(props.gap || 10)
    };
    

    return (
        <MuiModal {...props}>
            <Wrapper
                viusage='wrap'
                classNames={[...!props.overrideClasses ? MODAL_CLASSNAMES : [], ...props.classNames||[]]}
                style={{
                    ...!props.overrideStyle ? MODAL_STYLE : {}, 
                    ...vertical, 
                    ...horizontal, 
                    ...props.style
                }}>
                    {props.children}
            </Wrapper>
        </MuiModal>
    )
};