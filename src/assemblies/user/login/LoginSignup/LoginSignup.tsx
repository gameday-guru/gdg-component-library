import React, {FC, ReactElement, useState} from 'react';
import { Wrapper } from '../../../../components';
import { TextInput } from '../../../../components/input/text/TextInput';
import { Button } from '../../../../components';
import { Login } from '../Login/Login';
import { Signup } from '../Signup';
import { Logo } from '../../../../components/output/icons/Logo';

export const LOGIN_SIGNUP_CLASSNAMES : string[] = [
    "grid",
    "p-4",
    "rounded",
    "gap-2",
 ];
export const LOGIN_SIGNUP_STYLE : React.CSSProperties = {
    width : "500px",
    justifyContent : "center",
    justifyItems : "center"
};

export type LoginSignupProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    which ? : "login" | "signup";
};

export const LoginSignup : FC<LoginSignupProps>  = (props) =>{

    const [which, setWhich] = useState<"login"|"signup">(props.which||"login");


    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? LOGIN_SIGNUP_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? LOGIN_SIGNUP_STYLE : {}, ...props.style}}>
            <Logo style={{
                width : "200px"
            }}/>
            <div 
            className='gap-2'
            style={{
                display : "flex",
                alignContent : "center",
                alignItems : "center"
            }}>
                <div 
                className='cursor-pointer'
                onClick={()=>setWhich("login")}
                style={{
                    textDecoration : which === "login" ? "underline" : undefined,
                }}>
                    Login
                </div>
                |
                <div 
                className='cursor-pointer'
                onClick={()=>setWhich("signup")}
                style={{
                    textDecoration : which === "signup" ? "underline" : undefined,
                }}>
                    Signup
                </div>
            </div>
            <div>
                {(which === "login") && <Login/>}
                {(which === "signup") && <Signup/>}
            </div>
        </Wrapper>
    )
};