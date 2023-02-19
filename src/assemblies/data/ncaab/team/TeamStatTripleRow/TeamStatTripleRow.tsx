import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { EfficiencyEntrylike, LeagueAverageslike, PointDistributionlike, PointDistributionMemberlike } from '../../../../../util/ontology';
import { TeamEfficiencyTableEntrylike } from '../TeamEfficiencyTable/TeamEfficiencyTable';
import { TeamGaguruStatsBarChart } from '../TeamGaguruStatBarChart';
import { TeamPointDistribution } from '../TeamPointDistribution';

export const TEAM_STAT_TRIPLE_ROW_CLASSNAMES : string[] = [
    "grid",
    "gap-4"
 ];
export const TEAM_STAT_TRIPLE_ROW_STYLE : React.CSSProperties = {
    // gridTemplateColumns : "1fr 1fr 1fr"
};

export type TeamStatTripleRowProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    pointDistribution ? : PointDistributionlike;
    efficiency ? : EfficiencyEntrylike;
    team ? : ontology.Teamlike;
    leagueAveragePointDistribution ? : LeagueAverageslike;
};

export const TeamStatTripleRow : FC<TeamStatTripleRowProps>  = (props) =>{

    const medium = useSupportedMedia();

    return (
        <div
        className={[...!props.overrideClasses ? TEAM_STAT_TRIPLE_ROW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? {
            ...medium === "mobile" ? {
                gridTemplateColumns : "1fr"
            } : {
                gridTemplateColumns : "1fr 1fr 1fr"
            }
        } : {}, ...props.style}}>
            <div>
                <TeamGaguruStatsBarChart
                team={props.team}
                teamEfficiency={props.efficiency}
                leagueAverages={props.leagueAveragePointDistribution}/>
            </div>
            <div>
                <TeamPointDistribution 
                pointDistribution={props.pointDistribution?.offense}
                Header={<h2 className='text-lg text-white-500'>
                    Offensive Point Distribution
                </h2>}/>
            </div>
            <div>
                <TeamPointDistribution
                pointDistribution={props.pointDistribution?.defense}
                Header={<h2 className='text-lg text-white-500'>
                    Defensive Point Distribution
                </h2>}/>
            </div>
        </div>
    )
};