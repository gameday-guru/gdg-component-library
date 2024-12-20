import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';

export const TEAM_DETAILED_MATCHUP_CONTAINER_CLASSNAMES : string[] = [ ];
export const TEAM_DETAILED_MATCHUP_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES : string[] = [ 
    "grid"
];
export const TEAM_DETAILED_MATCHUP_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 1fr"
};

export type TeamDetailedMatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamDetailedMatchup : FC<TeamDetailedMatchupProps>  = (props) =>{

    return (
        <Wrapper
            classNames={[...!props.overrideClasses ? TEAM_DETAILED_MATCHUP_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_DETAILED_MATCHUP_CONTAINER_STYLE : {}, ...props.style}}>
            <div>
                {/** TODO: DateString */}
            </div>
            <div
            className={[...!props.overrideClasses ? TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_DETAILED_MATCHUP_INNER_STYLE : {}, ...props.style}}>
                <div>   
                    { /** TODO: TeamMatchupProjection */ }
                </div>
                <div>
                    { /** TODO: WinPercentage */ }
                </div>
            </div>
        </Wrapper>
    )
};