import React, {FC, ReactElement} from 'react';
import {ClosedBetaLogin } from "../../../assemblies/user/login/ClosedBetaLogin/ClosedBetaLogin"
import { useNavigate } from "react-router-dom";
import { useCheckStore } from '../../../components/CheckProvider';

export const LOGIN_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center"
];
export const LOGIN_STYLE : React.CSSProperties = {
};

export type LoginProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
};

export const Login : FC<LoginProps>  = (props) =>{

    const navigate = useNavigate();
    const {dispatch} = useCheckStore()

    return (
        <div
        className={[...!props.overrideClasses ? LOGIN_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? LOGIN_STYLE : {}, ...props.style}}>
            <ClosedBetaLogin onSubmit={async (data)=>{

                if(data.key && (data.key === "zV1Yh3dLe18CzbDr+ElwyQ==")){ 
                    dispatch((state)=>({
                        ...state,
                        checksCompleted : true
                    }))
                    return navigate("/home");
                }

                throw new Error("Invalid key. Only key login is currently supported.")

            }}/>
        </div>
    )
};