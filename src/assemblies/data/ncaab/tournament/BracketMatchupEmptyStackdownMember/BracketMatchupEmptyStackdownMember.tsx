import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { Viusagelike } from '../../../../../util/viusage/primary';

export const BRACKET_MATCHUP_EMPTY_STACKDOWN_MEMBER_CLASSNAMES : string[] = [ ];
export const BRACKET_MATCHUP_EMPTY_STACKDOWN_MEMBER_STYLE : React.CSSProperties = {
    display : "grid",
    height : "70px",
    alignContent : "center",
    alignItems : "center"
};

export type BracketMatchupEmptyStackdownMemberProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : Viusagelike
};

export const BracketMatchupEmptyStackdownMember : FC<BracketMatchupEmptyStackdownMemberProps>  = (props) =>{

    const _viusage = props.viusage||"wrap";

    return (
        <Wrapper
        viusage={_viusage}
        classNames={[...!props.overrideClasses ? BRACKET_MATCHUP_EMPTY_STACKDOWN_MEMBER_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BRACKET_MATCHUP_EMPTY_STACKDOWN_MEMBER_STYLE : {}, ...props.style}}>
           --
        </Wrapper>
    )
};