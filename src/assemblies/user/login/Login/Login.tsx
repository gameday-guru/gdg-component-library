import React, {FC, ReactElement, useState} from 'react';
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
    onForgotPassword ? : ()=>Promise<void>;
    onLogin ? : (params : {username : string, password : string})=>Promise<void>;
};

export const Login : FC<LoginProps>  = (props) =>{

    const [login, setLogin] = useState<{username : string, password : string}>({
        username : "",
        password : ""
    });

    const handleUsername = async (username : string)=>{
        setLogin({
            ...login,
            username
        })
    };

    const handlePassword = async (password : string)=>{
        setLogin({
            ...login,
            password
        });
    }

    const onSubmit = async ()=>{
        props.onLogin && props.onLogin(login);
    }

    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? LOGIN_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? LOGIN_STYLE : {}, ...props.style}}>
            <TextInput 
                onChange={(e)=>{
                    handleUsername(e.target.value)
                }}
                onSubmit={onSubmit}
                placeholder='email' fill viusage='backdrop'/>
            <TextInput 
                onChange={(e)=>{
                    handlePassword(e.target.value)
                }}
                onSubmit={onSubmit}
                type='password' placeholder='password' fill viusage='backdrop'/>
            <div style={{
                display : "flex",
                alignItems : "center",
                alignContent : "center",
                justifyItems : "right",
                justifyContent : "right"
            }}>
                <div 
                onClick={props.onForgotPassword}
                className='text-info-500'
                style={{
                    cursor : 'pointer',
                    textDecoration : 'underline'
                }}>
                    Forgot password?
                </div>
                &emsp;
                &emsp;
                <Button
                    onClick={onSubmit}
                    viusage='success'>Login</Button>
            </div>
        </Wrapper>
    )
};