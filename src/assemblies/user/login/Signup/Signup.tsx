import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { TextInput } from '../../../../components/input/text/TextInput';
import { Button } from '../../../../components';

export const SIGNUP_CLASSNAMES : string[] = [
    "grid",
    "p-4",
    "rounded",
    "gap-2"
 ];
export const SIGNUP_STYLE : React.CSSProperties = {
    width : "400px"
};

export type SignupProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Signup : FC<SignupProps>  = (props) =>{

    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? SIGNUP_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? SIGNUP_STYLE : {}, ...props.style}}>
            <TextInput placeholder='email' fill viusage='backdrop'/>
            <TextInput type={'password'} placeholder='password' fill viusage='backdrop'/>
            <TextInput type={'password'} placeholder='confirm password' fill viusage='backdrop'/>
            <div style={{
                display : "flex",
                alignItems : "center",
                alignContent : "center",
                justifyItems : "right",
                justifyContent : "right"
            }}>
                <Button
                    viusage='do'>Signup</Button>
            </div>
        </Wrapper>
    )
};