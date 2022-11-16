import React, {FC, ReactElement} from 'react';
import { Button, ButtonProps } from '../Button';
import { Plus } from 'react-bootstrap-icons';

export const ADDER_CLASSNAMES : string[] = [ ];
export const ADDER_STYLE : React.CSSProperties = {
};

export type AdderProps = ButtonProps & {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Adder : FC<AdderProps>  = (props) =>{

    return (
        <Button 
            {...props}>
                <div style={{
                    display : "flex",
                    alignContent : "center",
                    alignItems : "center"
                }}>
                    <Plus/>
                    {props.children}
                </div>
        </Button>
    )
};