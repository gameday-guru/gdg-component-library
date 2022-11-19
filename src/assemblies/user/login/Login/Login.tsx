import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { TextInput } from '../../../../components/input/text/TextInput';
import { Button } from '../../../../components';

export const LOGIN_CLASSNAMES : string[] = [
    "grid",
    "p-4",
    "rounded",
    "gap-2"
 ];
export const LOGIN_STYLE : React.CSSProperties = {
    width : "400px"
};

export type LoginProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Login : FC<LoginProps>  = (props) =>{

    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? LOGIN_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? LOGIN_STYLE : {}, ...props.style}}>
            <TextInput placeholder='email' fill viusage='backdrop'/>
            <TextInput type='password' placeholder='password' fill viusage='backdrop'/>
            <div style={{
                display : "flex",
                alignItems : "center",
                alignContent : "center",
                justifyItems : "right",
                justifyContent : "right"
            }}>
                <Button
                    viusage='success'>Login</Button>
            </div>
        </Wrapper>
    )
};