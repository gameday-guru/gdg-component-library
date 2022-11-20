import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../components';
import { LoginSignup } from '../../../assemblies/user/login/LoginSignup/LoginSignup';
import { Sportsdataio } from '../../../components/output/icons/Sportsdataio/Sportsdataio';

export const LOGIN_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "align-items-center",
    "justify-items-center",
    "justify-content-center",
    "items-center",
    "text-drk-gray-900",
];
export const LOGIN_STYLE : React.CSSProperties = {
    display : "grid",
    justifyContent : "center",
    justifyItems : "center"
};

export type LoginProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    onLogin ? : (params : {username : string, password : string})=>Promise<void>;
    onSignup ? : (params : {username : string, password : string, passwordConfirmation : string})=>Promise<void>;
};

export const Login : FC<LoginProps>  = (props) =>{


    return (
        <Wrapper 
            viusage='backdrop'
            classNames={[...!props.overrideClasses ? LOGIN_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? LOGIN_STYLE : {}, ...props.style}}>
                <LoginSignup
                    onLogin={props.onLogin}
                    onSignup={props.onSignup}/>
                <div style={{
                    position : "absolute",
                    bottom : "4em"
                }}>
                    <Sportsdataio/>
                </div>
        </Wrapper>
    )
};