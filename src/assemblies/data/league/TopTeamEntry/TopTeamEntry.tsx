import React, {FC, ReactElement} from 'react';

export const TOP_TEAM_ENTRY_CLASSNAMES : string[] = [ ];
export const TOP_TEAM_ENTRY_STYLE : React.CSSProperties = {
};

export type TopTeamEntryProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TopTeamEntry : FC<TopTeamEntryProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? TOP_TEAM_ENTRY_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TOP_TEAM_ENTRY_STYLE : {}, ...props.style}}>

        </div>
    )
};