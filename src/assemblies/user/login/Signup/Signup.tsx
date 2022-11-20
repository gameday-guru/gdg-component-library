import React, {FC, ReactElement, useState} from 'react';
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
    onSignup ? : (params : {username : string, password : string, passwordConfirmation : string})=>Promise<void>;
};

export const Signup : FC<SignupProps>  = (props) =>{

    const [signup, setSignup] = useState<{
        username : string, 
        password : string,
        passwordConfirmation : string,
    }>({
        username : "",
        password : "",
        passwordConfirmation : ""
    });

    const handleUsername = async (username : string)=>{
        setSignup({
            ...signup,
            username
        })
    };

    const handlePassword = async (password : string)=>{
        setSignup({
            ...signup,
            password
        });
    }

    const handlePasswordConfirmation = async (passwordConfirmation : string)=>{
        setSignup({
            ...signup,
            passwordConfirmation
        });
    }

    const onSubmit = async ()=>{
        props.onSignup && props.onSignup(signup);
    }


    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? SIGNUP_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? SIGNUP_STYLE : {}, ...props.style}}>
            <TextInput 
                onChange={(e)=>{
                    handleUsername(e.target.value);
                }}
                onSubmit={onSubmit}
                placeholder='email' fill viusage='backdrop'/>
            <TextInput 
                onChange={(e)=>{
                    handlePassword(e.target.value)
                }}
                onSubmit={onSubmit}
                type={'password'} placeholder='password' fill viusage='backdrop'/>
            <TextInput 
                onChange={(e)=>{
                    handlePasswordConfirmation(e.target.value)
                }}
                onSubmit={onSubmit}
                type={'password'} placeholder='confirm password' fill viusage='backdrop'/>
            <div style={{
                display : "flex",
                alignItems : "center",
                alignContent : "center",
                justifyItems : "right",
                justifyContent : "right"
            }}>
                <Button
                    onClick={onSubmit}
                    viusage='do'>Signup</Button>
            </div>
        </Wrapper>
    )
};