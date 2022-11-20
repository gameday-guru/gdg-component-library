import React, {FC, ReactElement} from 'react';
import { useNavigate } from 'react-router-dom';
import { PegPill } from '../../../../components';
import { Pill } from '../../../../components';
import { Logo } from '../../../../components/output/icons/Logo';
import { Wrapper } from "../../../../components/output/containers/Wrapper";
import { viusage } from '../../../../util';
import { Sportsdataio } from '../../../output/icons/Sportsdataio/Sportsdataio';

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
    Header ? : React.ReactNode;
    which ? : string;
    onWhich ? : (which : string)=>Promise<void>;
    options ? : {[key : string] : React.ReactNode};
};

export const Sidebar : FC<SidebarProps>  = (props) =>{

    const selections = Object.entries(props.options||{})
    .map(([innerName, display])=>{
        return <Pill 
            onClick={async ()=>{
                props.onWhich && (await props.onWhich(innerName));
            }}
            viusage={props.which === innerName ? 'navigate' : 'wrap'}
            key={innerName}>
                {display}
        </Pill>
    });

    return (
        <div
        className={[...!props.overrideClasses ? SIDEBAR_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? SIDEBAR_INNER_STYLE : {}, ...props.style}}>
            <div style={{
                width : "100%",
                margin : "0 auto"
            }}>
                {props.Header}
            </div>
            <br/>
            <div 
            className='gap-4 text-sm'
            style={{
                height : "auto",
                display : "grid",
                gridTemplateColumns : "1fr",
            }}>
                {selections}
            </div>
        </div>

    )
};