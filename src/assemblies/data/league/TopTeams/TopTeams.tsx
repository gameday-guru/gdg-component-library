import React, {FC, ReactElement} from 'react';

export const TOP_TEAMS_CLASSNAMES : string[] = [ ];
export const TOP_TEAMS_STYLE : React.CSSProperties = {
};

export type TopTeamsProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TopTeams : FC<TopTeamsProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? TOP_TEAMS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TOP_TEAMS_STYLE : {}, ...props.style}}>

        </div>
    )
};