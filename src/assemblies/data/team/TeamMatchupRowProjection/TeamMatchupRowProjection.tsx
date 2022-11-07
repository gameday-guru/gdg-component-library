import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { StackedProjection } from '../StackedProjection';

export const TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_CLASSNAMES : string[] = [ ];
export const TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_MATCHUP_ROW_PROJECTION_INNER_CLASSNAMES : string[] = [ 
    "grid"
];
export const TEAM_MATCHUP_ROW_PROJECTION_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "3fr 1fr"
};

export type TeamMatchupRowProjectionProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamMatchupRowProjection : FC<TeamMatchupRowProjectionProps>  = (props) =>{

    return (
        <Wrapper
            viusage={"wrap"}
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_STYLE : {}, ...props.style}}>
            <div>
                {/** TODO: DateString */}
            </div>
            <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_ROW_PROJECTION_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_ROW_PROJECTION_INNER_STYLE : {}, ...props.style}}>
                <div>   
                    <StackedProjection/>
                </div>
                <div>
                    { /** TODO: GamblersTuple */ }
                </div>
            </div>
        </Wrapper>
    )
};