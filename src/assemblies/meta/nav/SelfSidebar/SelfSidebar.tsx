import React, {FC, ReactElement} from 'react';
import { Wrapper } from "../../../../components/output/containers/Wrapper";
import { viusage } from '../../../../util';
import { LogoedSidebar } from '../LogoedSidebar';
import { House, PeopleFill, Calendar, PersonFill, FileEarmark, Wallet } from "react-bootstrap-icons";
import { Help } from '../Help';
import { Sportsdataio } from '../../../../components/output/icons/Sportsdataio/Sportsdataio';

export const SIDEBAR_CONTAINER_CLASSNAMES : string[] = [
    "p-4",
    "grid"
];
export const SIDEBAR_CONTAINER_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 1fr",
};

export const SIDEBAR_INNER_CLASSNAMES : string[] = [

];
export const SIDEBAR_INNER_STYLE : React.CSSProperties = {
};

export type SelfSidebarProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    which ? : "overview" | "subscriptions" | "tos";
    onWhich ? : (which : "overview" | "tos")=>Promise<void>;
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
};

export const SelfSidebar : FC<SelfSidebarProps>  = (props) =>{


    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? SIDEBAR_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? SIDEBAR_CONTAINER_STYLE : {}, ...props.style}}>
            <div>
                <LogoedSidebar 
                onWhich={props.onWhich as any} // TODO: fix subtyping
                which={props.which||"home"} options={{
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
                }}/>
            </div>
            <div style={{
                display : "grid",
                alignSelf : "end",
                justifySelf : "center",
                justifyContent : "center",
                justifyItems : "center"
            }}>
                <Help onFeedbackSubmit={props.onFeedbackSubmit}/>
                <br/>
                <br/>
                <Sportsdataio/>
            </div>
        </Wrapper>
    )
};