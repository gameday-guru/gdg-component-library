import React, {FC, ReactElement, useState} from 'react';
import { Button } from '../../../../components';
import { TextInput } from '../../../../components/input/text/TextInput';
import { Logo } from '../../../../components/output/icons/Logo';

export const PASSWORD_RESET_CLASSNAMES : string[] = [
    "grid",
    "gap-2",
    "rounded",
    "p-4"
 ];
export const PASSWORD_RESET_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    justifyItems : "center"
};

export type PasswordResetProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    onPasswordResetRequest ?  : (email : string)=>Promise<void>;
};

export const PasswordReset : FC<PasswordResetProps>  = (props) =>{

    const [email, setPasswordReset] = useState("");

    const handleTextChange = async (e : React.ChangeEvent<HTMLInputElement>)=>{

        const val = (e.target as HTMLInputElement).value;
        setPasswordReset(val);

    };

    const handlePasswordResetSubmit = async ()=>{
        props.onPasswordResetRequest && await props.onPasswordResetRequest(email);
    }

    return (
        <form
        onSubmit={(e)=>e.preventDefault()}
        className={[...!props.overrideClasses ? PASSWORD_RESET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? PASSWORD_RESET_STYLE : {}, ...props.style}}>
            <Logo style={{
                width : "200px"
            }}/>
            <br/>
            <TextInput style={{
                width : "100%"
            }} fill viusage='wrap' placeholder='Enter account email' onChange={handleTextChange}/>
            <Button 
            style={{
                width : "100%"
            }}
            viusage='success'
            onClick={handlePasswordResetSubmit}>
                Request password reset
            </Button>
        </form>
    )
};