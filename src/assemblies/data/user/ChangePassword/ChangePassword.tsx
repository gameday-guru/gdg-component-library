import React, {FC, ReactElement, useState} from 'react';
import { Button } from '../../../../components';
import { TextInput } from '../../../../components/input/text/TextInput';

export const CHANGE_PASSWORD_CLASSNAMES : string[] = [
    "grid",
    "gap-2",
    "rounded",
    "p-4"
 ];
export const CHANGE_PASSWORD_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",

};

export type ChangePasswordProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    onChangePasswordSubmit ?  : (args : {
        password : string,
        confirmedPassword : string
    })=>Promise<void>;
};

export const ChangePassword : FC<ChangePasswordProps>  = (props) =>{

    const [password, setChangePassword] = useState({
        password : "",
        confirmedPassword : ""
    });

    const handlePasswordTextChange = async (e : React.ChangeEvent<HTMLInputElement>)=>{

        const val = (e.target as HTMLInputElement).value;
        setChangePassword({
            ...password,
            password : val
        });

    };

    const handleConfirmationTextChange = async (e : React.ChangeEvent<HTMLInputElement>)=>{

        const val = (e.target as HTMLInputElement).value;
        setChangePassword({
            ...password,
            confirmedPassword : val
        });

    };

    const handleChangePasswordSubmit = async ()=>{
        props.onChangePasswordSubmit && await props.onChangePasswordSubmit(password);
    }

    return (
        <form
        onSubmit={(e)=>e.preventDefault()}
        className={[...!props.overrideClasses ? CHANGE_PASSWORD_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? CHANGE_PASSWORD_STYLE : {}, ...props.style}}>
            <TextInput type={"password"} fill viusage='wrap' placeholder='Enter new password' onChange={handlePasswordTextChange}/>
            <TextInput type={"password"} fill viusage='wrap' placeholder='Confirm new password' onChange={handleConfirmationTextChange}/>
            <div style={{
                width : "100%",
                display : "flex",
                flexDirection : "row-reverse"
            }}>
                <Button 
                viusage='success'
                onClick={handleChangePasswordSubmit}>
                    Change password
                </Button>
            </div>
       
        </form>
    )
};