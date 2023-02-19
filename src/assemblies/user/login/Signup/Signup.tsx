import React, {FC, ReactElement, useState} from 'react';
import { Wrapper } from '../../../../components';
import { TextInput } from '../../../../components/input/text/TextInput';
import { Button } from '../../../../components';
import { useSupportedMedia } from '../../../../util/media/useSupportedMedia';
import { to } from "await-to-js";

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

    const medium = useSupportedMedia();
    const [err, setErr] = useState<string|undefined>(undefined);

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

        if(props.onSignup){

            const [err, res] = await to(props.onSignup(signup));
            if(err){
                setErr(err.message);
                throw err;
            }
            setErr(undefined);

        }

    }


    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? SIGNUP_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? {
            ...medium === "mobile" ?{
                width : "300px",
            } : {
                width : "400px"
            }
        } : {}, ...props.style}}>
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
            <div>
                <p className='text-error-500'>&nbsp;{err}</p>
            </div>
        </Wrapper>
    )
};