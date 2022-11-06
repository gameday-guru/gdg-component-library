import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { DateString } from '../../generic';

export const TEAM_DETAILED_MATCHUP_CONTAINER_CLASSNAMES : string[] = [ ];
export const TEAM_DETAILED_MATCHUP_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES : string[] = [ 
    "grid"
];
export const TEAM_DETAILED_MATCHUP_INNER_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 2fr",
    justifyContent : "center",
    justifyItems : "center"
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
                <DateString/>
            </div>
            <div
            className={[...!props.overrideClasses ? TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_DETAILED_MATCHUP_INNER_STYLE : {}, ...props.style}}>
                <div>   
                    Matchup Row
                    { /** TODO: TeamDetailedMatchupRow */ }
                </div>
                <div>
                    H2H Charts
                    { /** TODO: TeamMatchupH2HCharts */ }
                </div>
            </div>
        </Wrapper>
    )
};