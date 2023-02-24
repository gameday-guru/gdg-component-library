import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../../components';
import { Viusagelike } from '../../../../../../util/viusage/primary';

export const BRACKET_TEAM_NEEDS_DATA_CLASSNAMES : string[] = [ 
    "p-2"
];
export const BRACKET_TEAM_NEEDS_DATA_STYLE : React.CSSProperties = {
    display : 'grid',
    alignContent : "center",
    alignItems : "center",
    // fontSize : 10
};

export type BracketTeamNeedsDataProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : Viusagelike;
};

export const BracketTeamNeedsData : FC<BracketTeamNeedsDataProps>  = (props) =>{

    const _viusage = props.viusage||"wrap";

    return (
        <Wrapper
        viusage={_viusage}
        classNames={[...!props.overrideClasses ? BRACKET_TEAM_NEEDS_DATA_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BRACKET_TEAM_NEEDS_DATA_STYLE : {}, ...props.style}}>
            --
        </Wrapper>
    )
};