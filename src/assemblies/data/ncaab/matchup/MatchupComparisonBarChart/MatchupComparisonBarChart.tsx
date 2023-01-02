import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { ontology } from '../../../../../util';
import { MockAverageDistribution, MockAway, MockAwayEff, MockHome, MockHomeEff } from '../../../../../util/ontology';

export const TEAM_GAGURU_STATS_BAR_CHART_CLASSNAMES : string[] = [
    "rounded-lg",
    "p-4",
    "grid"
 ];
export const TEAM_GAGURU_STATS_BAR_CHART_STYLE : React.CSSProperties = {
    justifyContent : "center",
    justifyItems : "center"
};

export type MatchupComparisonStatsBarChartProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    home ? : ontology.Teamlike;
    homeEfficiency ? : ontology.EfficiencyEntrylike;
    away ? : ontology.Teamlike;
    awayEfficiency ? : ontology.EfficiencyEntrylike;
    leagueAverages ? : ontology.LeagueAverageslike;
};

export const MatchupComparisonStatsBarChart : FC<MatchupComparisonStatsBarChartProps>  = (props) =>{

    const _home = props.home||MockHome;
    const _homeEfficiency = props.homeEfficiency||MockHomeEff;
    const _away = props.away||MockAway;
    const _awayEfficiency = props.awayEfficiency||MockAwayEff;

    const data = [ 
        {
            name : "Power Rating",
            home : .56 * _homeEfficiency.oe - .44 * _homeEfficiency.de,
            away : .56 * _awayEfficiency.oe - .44 * _awayEfficiency.de
        },
        {
            name : "Offensive Efficiency",
            home : _homeEfficiency.oe,
            away : _awayEfficiency.oe
        },
        {
            name : "Defensive Efficiency",
            home : _homeEfficiency.de,
            away : _awayEfficiency.de
        }, 
        {
            name : "Tempo",
            home : _homeEfficiency.tempo,
            away : _awayEfficiency.tempo
        }
    ]

    // TODO: use viusage
    const COLORS = [
        "#00C192",
        "#0086E6"
    ]

    return (
        <Wrapper
        viusage='backdrop'
        classNames={[...!props.overrideClasses ? TEAM_GAGURU_STATS_BAR_CHART_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? TEAM_GAGURU_STATS_BAR_CHART_STYLE : {}, ...props.style}}>
            <BarChart 
            layout='vertical'
            width={300} height={220} data={data}>
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
                    width={50} dataKey="home" fill={COLORS[0]} />
                <Bar 
                    radius={5}
                    width={50} dataKey="away" fill={COLORS[1]} />
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
                        {_home.School}
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
                        {_away.School}
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
};