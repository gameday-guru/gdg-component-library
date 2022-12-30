import React, {FC, ReactElement} from 'react';

export const HYPOTHETICAL_MATCHUP_CLASSNAMES : string[] = [ ];
export const HYPOTHETICAL_MATCHUP_STYLE : React.CSSProperties = {
};

export type HypotheticalMatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const HypotheticalMatchup : FC<HypotheticalMatchupProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? HYPOTHETICAL_MATCHUP_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HYPOTHETICAL_MATCHUP_STYLE : {}, ...props.style}}>

        </div>
    )
};