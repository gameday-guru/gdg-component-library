import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { DateString } from '../../generic';
import { H2H } from '../../matchup/H2H';
import { ProjectionZeroSum } from '../ProjectionZeroSum';
import { ProjectionWinPercentage } from '../ProjectionWinPercentage';

export const TEAM_DETAILED_MATCHUP_CONTAINER_CLASSNAMES : string[] = [ ];
export const TEAM_DETAILED_MATCHUP_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES : string[] = [ 
    "grid"
];
export const TEAM_DETAILED_MATCHUP_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 2fr",
    justifyContent : "center",
    justifyItems : "center"
};

export type TeamSemiDetailedMatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamSemiDetailedMatchup : FC<TeamSemiDetailedMatchupProps>  = (props) =>{

    return (
        <Wrapper
            viusage='wrap'
            classNames={[...!props.overrideClasses ? TEAM_DETAILED_MATCHUP_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_DETAILED_MATCHUP_CONTAINER_STYLE : {}, ...props.style}}>
            <div style={{
                display : "grid",
                justifyContent : "center",
                justifyItems : "center"
            }}>
                <DateString/>
            </div>
            <br/>
            <div
            className={[...!props.overrideClasses ? TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_DETAILED_MATCHUP_INNER_STYLE : {}, ...props.style}}>
                <div className='text-sm'>   
                    <H2H/>
                </div>
                <div className='gap-2' style={{
                    display : "grid",
                    alignContent : "center",
                    gridTemplateColumns : "1fr 1fr"
                }}>
                    <ProjectionZeroSum/>
                    <ProjectionWinPercentage/>
                </div>
            </div>
        </Wrapper>
    )
};