import React, {FC, ReactElement} from 'react';
import { PasswordReset as PasswordResetForm } from '../../../../assemblies/data/user';
import { Wrapper } from '../../../../components';
import { Logo } from '../../../../components/output/icons/Logo';
import { Sportsdataio } from '../../../../components/output/icons/Sportsdataio/Sportsdataio';

export const PASSWORD_RESET_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "align-items-center",
    "justify-items-center",
    "justify-content-center",
    "items-center",
    "text-drk-gray-900",
];
export const PASSWORD_RESET_STYLE : React.CSSProperties = {
    display : "grid",
    justifyContent : "center",
    justifyItems : "center"
};

export type PasswordResetProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    onPasswordResetRequest ? : (email : string)=>Promise<void>;
    passwordResetMessage ? : string;
};

export const PasswordReset : FC<PasswordResetProps>  = (props) =>{


    return (
        <Wrapper 
            viusage='backdrop'
            classNames={[...!props.overrideClasses ? PASSWORD_RESET_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? PASSWORD_RESET_STYLE : {}, ...props.style}}>
                {!props.passwordResetMessage ? <PasswordResetForm
                style={{
                    width : "300px"
                }}
                onPasswordResetRequest={props.onPasswordResetRequest}/> : <div 
                className='gap-4'
                style={{
                    display : "grid",
                    gridTemplateColumns : '1fr',
                    justifyItems : 'center'
                }}><Logo style={{
                    width : "200px"
                }}/>
                <Wrapper viusage='wrap' classNames={["rounded-lg", "p-4"]} style={{
                    width : "300px"
                }}>
                    {props.passwordResetMessage}
                </Wrapper></div>}
                <div style={{
                    position : "absolute",
                    bottom : "4em"
                }}>
                    <Sportsdataio/>
                </div>
        </Wrapper>
    )
};