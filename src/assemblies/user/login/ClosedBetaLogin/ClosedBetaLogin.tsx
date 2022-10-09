import React, {FC, ReactElement, useState} from 'react';
import { TextInput } from '../../../../components/input/text/TextInput';
import { Logo } from '../../../../components/output/icons/Logo';

export const CLOSED_BETA_LOGIN_CLASSNAMES : string[] = [ 
    "rounded-lg",
    "p-8",
    "border",
    "border-drk-gray-400",
    "text-drk-gray-700",
    "grid",
    "justify-items-center",
    "shadow"
];
export const CLOSED_BETA_LOGIN_STYLE : React.CSSProperties = {
    width : "400px"
};

export interface LoginCredentialslike {
    username : string;
    password : string;
    key ? : string;
}

export type ClosedBetaLoginProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    onSubmit ? : (payload : LoginCredentialslike)=>Promise<void>;
};

export const ClosedBetaLogin : FC<ClosedBetaLoginProps>  = (props) =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [key, setKey] = useState("");

    const handleSubmit = async ()=>{
        props.onSubmit && props.onSubmit({
            username,
            password,
            key
        }).then(()=>{

        }).catch((err : Error)=>{
            setErr(err.message);
        });
    }

    const handleUsernameInput = (e : React.FormEvent)=>{
        setUsername((e as any).target.value);
    } 

    const handlePasswordInput = (e : React.FormEvent)=>{
        setPassword((e as any).target.value);
    };

    const handleKeyInput = (e : React.FormEvent)=>{
        setKey((e as any).target.value);
    };

    return (
        <div
        className={[...!props.overrideClasses ? CLOSED_BETA_LOGIN_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? CLOSED_BETA_LOGIN_STYLE : {}, ...props.style}}>
            <div>
                <div style={{
                    height : "60px",
                    width : "60px"
                }}>
                    <Logo />
                </div>
            </div>
            <div>
                closed-beta
            </div>
            <br/>
            <TextInput onInput={handleUsernameInput} classNames={["w-64"]} viusage="comment" placeholder="Username *"/>
            <TextInput onInput={handlePasswordInput} onSubmit={handleSubmit} classNames={["w-64"]} viusage="comment" inputType="password" placeholder="Password *"/>
            <br/>
            <br/>
            <TextInput onInput={handleKeyInput} onSubmit={handleSubmit} classNames={["w-64"]} type="info" placeholder="Key"/>
            <br/>
            <br/>
            <p className='text-error-300'>{err}</p>
            <br/>
            <p>
            </p>
        </div>
    )
};