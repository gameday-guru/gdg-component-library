import React, {FC, ReactElement} from 'react';
import { TeamGaguruStatsBarChart } from '../TeamGaguruStatBarChart';
import { TeamPointDistribution } from '../TeamPointDistribution';

export const TEAM_STAT_TRIPLE_ROW_CLASSNAMES : string[] = [
    "grid",
    "gap-4"
 ];
export const TEAM_STAT_TRIPLE_ROW_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 1fr 1fr"
};

export type TeamStatTripleRowProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamStatTripleRow : FC<TeamStatTripleRowProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? TEAM_STAT_TRIPLE_ROW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TEAM_STAT_TRIPLE_ROW_STYLE : {}, ...props.style}}>
            <div>
                <TeamGaguruStatsBarChart/>
            </div>
            <div>
                <TeamPointDistribution
                Header={<h2 className='text-lg text-white-500'>
                    Defensive Point Distribution
                </h2>}/>
            </div>
            <div>
                <TeamPointDistribution Header={<h2 className='text-lg text-white-500'>
                    Offensive Point Distribution
                </h2>}/>
            </div>
        </div>
    )
};