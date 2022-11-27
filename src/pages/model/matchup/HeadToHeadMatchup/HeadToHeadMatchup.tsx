import React, {FC, ReactElement} from 'react';

export const HEAD_TO_HEAD_MATCHUP_CLASSNAMES : string[] = [ ];
export const HEAD_TO_HEAD_MATCHUP_STYLE : React.CSSProperties = {
};

export type HeadToHeadMatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const HeadToHeadMatchup : FC<HeadToHeadMatchupProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? HEAD_TO_HEAD_MATCHUP_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HEAD_TO_HEAD_MATCHUP_STYLE : {}, ...props.style}}>

        </div>
    )
};