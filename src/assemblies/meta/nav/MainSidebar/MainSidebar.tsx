import React, {FC, ReactElement} from 'react';
import { Wrapper } from "../../../../components/output/containers/Wrapper";
import { viusage } from '../../../../util';
import { LogoedSidebar } from '../LogoedSidebar';
import { House, PeopleFill, Calendar } from "react-bootstrap-icons";
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

export type MainSidebarProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    which ? : "home" | "team" | "matchups";
    onWhich ? : (which : "home" | "team" | "matchups")=>Promise<void>;
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
};

export const MainSidebar : FC<MainSidebarProps>  = (props) =>{


    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? SIDEBAR_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? SIDEBAR_CONTAINER_STYLE : {}, ...props.style}}>
            <div>
                <LogoedSidebar 
                onWhich={props.onWhich as any} // TODO: fix subtyping
                which={props.which||"home"} options={{
                    "home" : <div style={{
                        display : "flex",
                        alignContent : "center",
                        alignItems : "center",
                    }}><House/>&emsp;&emsp;Home</div>,
                    "team" : <div style={{
                        display : "flex",
                        alignContent : "center",
                        alignItems : "center"
                    }}><PeopleFill/>&emsp;&emsp;Team</div>,
                    "matchups" : <div style={{
                        display : "flex",
                        alignContent : "center",
                        alignItems : "center"
                    }}><Calendar/>&emsp;&emsp;Matchup</div>
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