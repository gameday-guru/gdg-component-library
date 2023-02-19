import React, {FC, ReactElement, useState} from 'react';
import { LogoedSidebar } from '../LogoedSidebar';
import { MainSidebar } from '../MainSidebar';
import { Wrapper } from "../../../../components/output/containers/Wrapper";
import { viusage } from '../../../../util';
import { House, PeopleFill, PersonFill, Wallet, FileEarmark, Calendar, ChevronBarDown, ChevronBarUp, ChevronDown, ChevronUp, PersonCircle } from "react-bootstrap-icons";
import { Help } from '../Help';
import { Sportsdataio } from '../../../../components/output/icons/Sportsdataio/Sportsdataio';
import { Button } from '../../../../components';

export const MOBLIE_NAV_CONTAINER_CLASSNAMES : string[] = [
    "p-4",
    "grid"
];
export const MOBLIE_NAV_CONTAINER_STYLE : React.CSSProperties = {
    // gridTemplateRows : "1fr 1fr",
    borderBottom : "1px solid white"
};

export const MOBLIE_NAV_INNER_CLASSNAMES : string[] = [

];
export const MOBLIE_NAV_INNER_STYLE : React.CSSProperties = {
};


export type SelfMobileNavProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    which ? : "overview" | "tos";
    onWhich ? : (which : "overview" | "tos")=>Promise<void>;
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const SelfMobileNav : FC<SelfMobileNavProps>  = (props) =>{

    const [expanded, setExpanded] = useState(false);

    const handleExpand = async ()=>setExpanded(!expanded);


    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? MOBLIE_NAV_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? MOBLIE_NAV_CONTAINER_STYLE : {}, ...props.style}}>
            <div>
                <LogoedSidebar 
                onWhich={props.onWhich as any} // TODO: fix subtyping
                which={props.which||"home"} options={expanded ? {
                    "overview" : <div style={{
                        display : "flex",
                        alignContent : "center",
                        alignItems : "center",
                    }}><PersonFill/>&emsp;&emsp;Overview</div>,
                    "subscriptions" : <div style={{
                        display : "flex",
                        alignContent : "center",
                        alignItems : "center"
                    }}><Wallet/>&emsp;&emsp;Subscriptions</div>,
                    "tos" : <div style={{
                        display : "flex",
                        alignContent : "center",
                        alignItems : "center"
                    }}><FileEarmark/>&emsp;&emsp;Terms</div>,
                } : {}}/>
            </div>
            {expanded && <><br/><br/><br/><div style={{
                display : "grid",
                alignSelf : "end",
                justifySelf : "center",
                justifyContent : "center",
                justifyItems : "center"
            }}>
                <PersonCircle style={{
                    cursor : "pointer"
                }} size={24} onClick={props.onAccountClick}/>
                <br/>
                <Help onFeedbackSubmit={props.onFeedbackSubmit}/>
                <br/>
                <Sportsdataio/>
            </div></>}
            {expanded && <br/>}
            <Button onClick={handleExpand} style={{
                display : "grid",
                justifyContent : "center",
                justifyItems : "center"
            }} viusage={props.viusage||"wrap"}>
                {expanded ?  <ChevronUp size={24} /> : <ChevronDown size={24}/>}
            </Button>
        </Wrapper>
    )
};