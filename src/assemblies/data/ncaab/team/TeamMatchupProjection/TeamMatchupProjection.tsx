import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';

export const TEAM_MATCHUP_PROJECTION_CONTAINER_CLASSNAMES : string[] = [ ];
export const TEAM_MATCHUP_PROJECTION_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_MATCHUP_PROJECTION_INNER_CLASSNAMES : string[] = [ 
    "grid"
];
export const TEAM_MATCHUP_PROJECTION_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    gridTemplateRows : "1fr 3fr 1fr 1fr"
};

export type TeamMatchUpProjectionProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamMatchupProjection : FC<TeamMatchUpProjectionProps>  = (props) =>{

    return (
        <Wrapper 
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_PROJECTION_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_PROJECTION_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_PROJECTION_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_PROJECTION_INNER_STYLE : {}, ...props.style}}>
                <div>
                    { /** TODO: DateStack */ }
                </div>
                <div>
                    {/** TODO: TeamH2HMedium */ }
                </div>
                <div>
                    {/** TODO: ProjectZeroSum */}
                </div>
                <div>
                    {/** TODO: ProgressTotalScore */}
                </div>
            </div>
        </Wrapper>
    )
};