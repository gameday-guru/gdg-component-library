import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Wrapper } from '../../../../components';
import { ontology, viusage } from '../../../../util';
import { LeftRight } from '../../../../components/output/containers/general';
import { Snu } from '../Snu';
import { SportsBasketball } from "@mui/icons-material";
import { ProjectedGamelike } from '../../../../util/ontology';
import levenshtein from "fast-levenshtein";
import { MockOver } from '../../../../components/output/MockOver';
import { SideTeam } from '../../../data/ncaab/team/SideTeam';
import { SideMatchup } from '../../../data/ncaab/matchup/SideMatchup/SideMatchup';
import { Button } from '../../../../components';
import { PersonFill } from 'react-bootstrap-icons';
import { useSupportedMedia } from '../../../../util/media/useSupportedMedia';

export const USER_HEADER_CONTAINER_CLASSNAMES : string[] = [ ];
export const USER_HEADER_CONTAINER_STYLE : React.CSSProperties = {
};

export const USER_HEADER_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "p-4"
];
export const USER_HEADER_INNER_STYLE : React.CSSProperties = {
 justifyItems : "center",
 justifyContent : "center"
};



export type UserHeaderProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    username ? : string;
    onLogOut ? : ()=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
};

export const UserHeader : FC<UserHeaderProps>  = (props) =>{

    const medium = useSupportedMedia();

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            emphasis={400}
            classNames={[...!props.overrideClasses ? USER_HEADER_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? USER_HEADER_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? USER_HEADER_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? USER_HEADER_INNER_STYLE : {}, ...props.style}}>
                {medium === "mobile" ? <>
                        <div className="flex hover-underline text-info-500" style={{
                            alignContent : "center",
                            alignItems : "center"
                        }}>
                            <PersonFill/>&emsp;{props.username}
                        </div>
                        <div style={{
                            width : "100%"
                        }}>
                            <Button
                                style={{
                                    width : "100%"
                                }}
                                viusage='error'
                                onClick={props.onLogOut}
                            >Logout</Button>
                        </div>
                    </> :  <LeftRight
                    Left={<div className="flex hover-underline text-info-500" style={{
                        alignContent : "center",
                        alignItems : "center"
                    }}>
                        <PersonFill/>&emsp;{props.username}
                    </div>}
                    Right={<Button
                        viusage='error'
                        onClick={props.onLogOut}
                    >Logout</Button>}/> }
            </div>
        </Wrapper>
    )
};