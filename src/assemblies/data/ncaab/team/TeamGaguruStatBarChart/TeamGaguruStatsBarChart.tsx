import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { ontology } from '../../../../../util';
import { MockAverageDistribution, MockHome, MockHomeEff } from '../../../../../util/ontology';

export const TEAM_GAGURU_STATS_BAR_CHART_CLASSNAMES : string[] = [
    "rounded-lg",
    "p-4",
    "grid"
 ];
export const TEAM_GAGURU_STATS_BAR_CHART_STYLE : React.CSSProperties = {
    justifyContent : "center",
    justifyItems : "center"
};

export type TeamGaguruStatsBarChartProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    team ? : ontology.Teamlike;
    teamEfficiency ? : ontology.EfficiencyEntrylike;
    leagueAverages ? : ontology.LeagueAverageslike;
};

export const TeamGaguruStatsBarChart : FC<TeamGaguruStatsBarChartProps>  = (props) =>{

    const _team = props.team||MockHome;
    const _teamEfficiency = props.teamEfficiency||MockHomeEff;
    const _leagueAverages = props.leagueAverages||MockAverageDistribution;

    const data = [ 
        {
            name : "Power Rating",
            team : .56 * _teamEfficiency.oe - .44 * _teamEfficiency.de,
            league : _leagueAverages.powerRating
        },
        {
            name : "Offensive Efficiency",
            team : _teamEfficiency.oe,
            league : _leagueAverages.offensiveEfficiency
        },
        {
            name : "Defensive Efficiency",
            team : _teamEfficiency.de,
            league : _leagueAverages.defensiveEfficiency
        }
    ]

    // TODO: use viusage
    const COLORS = [
        "#00C192",
        "#0086E6"
    ]

    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? TEAM_GAGURU_STATS_BAR_CHART_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? TEAM_GAGURU_STATS_BAR_CHART_STYLE : {}, ...props.style}}>
            <h2>Team Stats</h2>
            <br/>
            <BarChart 
            layout='vertical'
            width={280} height={180} data={data}>
                <CartesianGrid 
                horizontal={false}
                vertical={true}
                strokeDasharray="1 3" />
                <XAxis 
                axisLine={false}
                type='number'/>
                <YAxis 
                fontSize={10}
                dataKey="name" type='category' />
                <Tooltip />
                <Bar 
                    radius={5}
                    width={50} dataKey="team" fill={COLORS[0]} />
                <Bar 
                    radius={5}
                    width={50} dataKey="league" fill={COLORS[1]} />
            </BarChart>
            <div className='gap-2' style={{
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr",
                    alignContent : "center",
                    justifyContent : "center"
                }}>
                    <div style={{
                            display : "flex",
                            fontSize : "8px",
                            alignContent : "center",
                            alignItems : "center"
                        }}>
                        <div style={{
                            background : COLORS[0],
                            height : "10px",
                            width : "10px",
                        }}>

                        </div>
                        &emsp;
                        <div>
                        {_team.Name}
                        </div>
                    </div>
                    <div style={{
                            display : "flex",
                            fontSize : "8px",
                            alignContent : "center",
                            alignItems : "center"
                        }}>
                        <div style={{
                            background : COLORS[1],
                            height : "10px",
                            width : "10px",
                        }}>

                        </div>
                        &emsp;
                        <div>
                        League
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
};