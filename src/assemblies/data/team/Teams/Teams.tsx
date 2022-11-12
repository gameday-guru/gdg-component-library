import React, {FC, ReactElement} from 'react';
import { Vs } from '../../../../components/output/indicators/label/Vs';
import { TeamMatchupSelectRow } from '../TeamMatchupSelectRow/TeamMatchupSelectRow';

export const TEAMS_CLASSNAMES : string[] = [
    "grid",
    "gap-4",
    "p-4"
 ];
export const TEAMS_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr"
};

export type TeamsProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Teams : FC<TeamsProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? TEAMS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TEAMS_STYLE : {}, ...props.style}}>
            <div>
                <TeamMatchupSelectRow/>
            </div>
            <div>
                {/** TeamsEfficiencyTable */}
            </div>
        </div>
    )
};