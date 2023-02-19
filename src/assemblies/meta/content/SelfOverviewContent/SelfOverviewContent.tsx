import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { useSupportedMedia } from '../../../../util/media/useSupportedMedia';
import { ChangePassword } from '../../../data/user';
import { UserHeader } from '../../header/UserHeader';

export const SELF_OVERVIEW_CONTENT_CONTAINER_CLASSNAMES : string[] = [
];
export const SELF_OVERVIEW_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
    height : '100%',
    overflow : 'scroll',
    textAlign : "left"
};

export const SELF_OVERVIEW_CONTENT_INNER_CLASSNAMES : string[] = [

];
export const SELF_OVERVIEW_CONTENT_INNER_STYLE : React.CSSProperties = {
};

export type SelfOverviewContentProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    onChangePasswordSubmit ? : (args : {
        password : string,
        confirmedPassword : string
    }) => Promise<void>;
    username ? : string;
    onLogOut ? : ()=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const SelfOverviewContent : FC<SelfOverviewContentProps>  = (props) =>{

    const medium = useSupportedMedia();
    const width = medium === "mobile" ? "100%" : "400px"

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? SELF_OVERVIEW_CONTENT_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? SELF_OVERVIEW_CONTENT_CONTAINER_STYLE : {}, ...props.style}}>
            <UserHeader
                username={props.username}
                onLogOut={props.onLogOut}/>
            <div className='p-4'>
                <h2 className='text-xl'>Password</h2>
                <hr/>
                <ChangePassword
                    style={{
                        width
                    }} 
                    onChangePasswordSubmit={props.onChangePasswordSubmit}/>
            </div>
        </Wrapper>
    )
};