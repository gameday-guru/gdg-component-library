import React, {FC, ReactElement} from 'react';
import { Sidebar } from '../../../../components/navigation/panels';
import { Logo } from '../../../../components/output/icons/Logo';

export const LOGOED_SIDEBAR_CLASSNAMES : string[] = [ ];
export const LOGOED_SIDEBAR_STYLE : React.CSSProperties = {
};

export type LogoedSidebarProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    options ? : {[key : string] : React.ReactNode}
};

export const LogoedSidebar : FC<LogoedSidebarProps>  = (props) =>{

    return (
        <Sidebar Header={<Logo/>} options={props.options}/>
    )
};