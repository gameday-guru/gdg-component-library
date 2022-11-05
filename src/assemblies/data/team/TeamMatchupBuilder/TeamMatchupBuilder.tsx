import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';

export const TEAM_MATCHUP_BUILDER_CONTAINER_CLASSNAMES : string[] = [ 

];
export const TEAM_MATCHUP_BUILDER_CONTAINER_STYLE : React.CSSProperties = {
  
};

export const TEAM_MATCHUP_BUILDER_INNER_CLASSNAMES : string[] = [ 
    "grid"
];
export const TEAM_MATCHUP_BUILDER_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : '3fr 1fr 1fr'
};

export type TeamMatchupBuilderProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamMatchupBuilder : FC<TeamMatchupBuilderProps>  = (props) =>{

    // TODO: make generic wrapper
    return (
        <Wrapper 
            classNames={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_CONTAINER_STYLE : {}, ...props.style}}>
            <h2>Team Matchup Projection</h2>
            <hr/>
            <div
            className={[...!props.overrideClasses ? TEAM_MATCHUP_BUILDER_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_MATCHUP_BUILDER_INNER_STYLE : {}, ...props.style}}>
                <div>
                    { /** TODO: TeamMatchupDropzone  */}
                </div>
                <div>
                    { /** TODO: VS */ }
                </div>
                <div>
                    {/** TODO: TeamMathcupDropzone*/ }
                </div>
            </div>
        </Wrapper>
    )
};