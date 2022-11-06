import React, {FC, ReactElement} from 'react';
import { useNavigate } from 'react-router-dom';
import { PegPill } from '../../../../components';
import { Logo } from '../../../../components/output/icons/Logo';
import { Wrapper } from "../../../../components/output/containers/Wrapper";
import { viusage } from '../../../../util';

export const SIDEBAR_CONTAINER_CLASSNAMES : string[] = [
    "gap-4",
    "bg-drk-gray-600",
    "p-4",
];
export const SIDEBAR_CONTAINER_STYLE : React.CSSProperties = {
};

export const SIDEBAR_INNER_CLASSNAMES : string[] = [

];
export const SIDEBAR_INNER_STYLE : React.CSSProperties = {
};

export type SidebarProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
};

export const Sidebar : FC<SidebarProps>  = (props) =>{

    const navigate = useNavigate();


    const handleHomeClick = async ()=>navigate("/home");
    const handleModelsClick = async  ()=>navigate("/models");
    const handleUserClick = async  ()=>navigate("/user");

    const selected = window.location.pathname.split("/")[1];

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? SIDEBAR_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? SIDEBAR_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? SIDEBAR_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? SIDEBAR_INNER_STYLE : {}, ...props.style}}>
                <div style={{
                    height : "80px",
                    width : "80px",
                    margin : "0 auto"
                }}>
                    <Logo/>
                </div>
                <br/>
                <br/>
                <br/>
                <div 
                className='gap-4'
                style={{
                    height : "auto",
                    display : "grid",
                    gridTemplateColumns : "1fr"
                }}>
                    <PegPill onClick={handleHomeClick} emphasis={selected === "home" ? 900 : 600} Peg={<div className='bg-drk-gray-200' style={{
                        height : "100%",
                        width : "100%"
                    }}> </div>} viusage='sort'><h2 className='text-xl'>Home</h2></PegPill>
                    <PegPill onClick={handleModelsClick} emphasis={selected === "models" ? 900 : 600} Peg={<div className='bg-drk-gray-200' style={{
                        height : "100%",
                        width : "100%"
                    }}> </div>} viusage='sort'><h2 className='text-xl' >Models</h2></PegPill>
                    <PegPill  onClick={handleUserClick} emphasis={selected === "user" ? 900 : 600} Peg={<div className='bg-drk-gray-200' style={{
                        height : "100%",
                        width : "100%"
                    }}> </div>} viusage='sort'><h2 className='text-xl'>User</h2></PegPill>
                </div>
            </div>
        </Wrapper>
    )
};