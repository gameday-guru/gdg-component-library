import React, {FC, ReactElement} from 'react';
import { SelfOverviewContent } from '../../../../assemblies/meta/content/SelfOverviewContent';
import { SelfSidebar } from '../../../../assemblies/meta/nav/SelfSidebar';
import { ontology } from '../../../../util';
import { useSupportedMedia } from '../../../../util/media/useSupportedMedia';
import { SelfOverviewDesktop } from './SelfOverviewDesktop';
import { SelfOverviewMobile } from './SelfOverviewMobile';

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

export type SelfOverviewProps = {
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

export const SelfOverview : FC<SelfOverviewProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch(medium) {
        case "mobile" : return <SelfOverviewMobile {...props}/>;
        default : return <SelfOverviewDesktop {...props}/>;
    }
    
};