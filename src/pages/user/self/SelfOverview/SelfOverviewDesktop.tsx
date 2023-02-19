import React, {FC, ReactElement} from 'react';
import { SelfOverviewContent } from '../../../../assemblies/meta/content/SelfOverviewContent';
import { SelfSidebar } from '../../../../assemblies/meta/nav/SelfSidebar';
import { ontology } from '../../../../util';

export const SELF_OVERVIEW_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900"
];
export const SELF_OVERVIEW_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type SelfOverviewDesktopProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    onWhich ? : (which : "overview" | "tos")=>Promise<void>;
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onChangePasswordSubmit ? : (args : {
        password : string,
        confirmedPassword : string
    }) => Promise<void>;
    username ? : string;
    onLogOut ? : ()=>Promise<void>;
};

export const SelfOverviewDesktop : FC<SelfOverviewDesktopProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? SELF_OVERVIEW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? SELF_OVERVIEW_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <SelfSidebar
                onFeedbackSubmit={props.onFeedbackSubmit}
                onWhich={props.onWhich} 
                which='overview'
                style={{
                    height : '100%'
                }}/>
            </div>
            <div style={{
                height : '100%',
                width : '100%',
                overflowY : "scroll"
            }}>
               <SelfOverviewContent 
                onLogOut={props.onLogOut}
                username={props.username}
                onChangePasswordSubmit={props.onChangePasswordSubmit}/>
            </div>
        </div>
    )
};