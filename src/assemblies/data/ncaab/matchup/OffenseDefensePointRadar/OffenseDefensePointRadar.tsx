import React, {FC, ReactElement} from 'react';
import { Tooltip, PieChart, Pie, Cell, Legend, RadarChart, PolarGrid, Radar, PolarAngleAxis, PolarRadiusAxis, Label } from "recharts";
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { MockAway, MockHome, MockPointDistribution } from '../../../../../util/ontology';

export const OFFENSE_DEFENSE_POINT_RADAR_CLASSNAMES : string[] = [ 
    "p-4",
    "grid",
    "items-center",
    "content-center",
    "rounded"
];
export const OFFENSE_DEFENSE_POINT_RADAR_STYLE : React.CSSProperties = {
    fill : "white",
    justifyContent : "center",
    justifyItems : "center",
    fontSize : 10
};

export type OffenseDefensePointRadarProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    homeDistro ? : ontology.PointDistributionMemberlike;
    home ? : ontology.Teamlike;
    awayDistro ? : ontology.PointDistributionMemberlike;
    away ? : ontology.Teamlike;
    reverse ? : boolean;
};

export const OffenseDefensePointRadar : FC<OffenseDefensePointRadarProps>  = (props) =>{

    const _home = props.homeDistro||MockPointDistribution.offense;
    const _away = props.awayDistro||MockPointDistribution.defense;
    const _homeTeam = props.home||MockHome;
    const _awayTeam = props.away||MockAway;

    // TODO: change the naming here (legacy)
    const _offense = props.reverse ? _away : _home;
    const _offensiveTeam = props.reverse ? _awayTeam : _homeTeam;
    const _offenseTotal = _offense.freeThrow + _offense.twoPoint + _offense.threePoint;

    const _defense = props.reverse ? _home : _away;
    const _defensiveTeam = props.reverse ? _homeTeam : _awayTeam;
    const _defenseTotal = _defense.freeThrow + _defense.twoPoint + _defense.threePoint;

    const data = [
        {
            name : "FT",
            offense : _offense.freeThrow/_offenseTotal,
            defense : _defense.freeThrow/_defenseTotal
        }, 
        {
            name : "2pt",
            offense : _offense.twoPoint/_offenseTotal,
            defense : _defense.twoPoint/_defenseTotal
        }, 
        {
            name : "3pt",
            offense : _offense.threePoint/_offenseTotal,
            defense : _defense.threePoint/_defenseTotal
        }
    ]

    // TODO: use viusage
    const COLORS = [
        "#00C192",
        "#0086E6"
    ]; 

    let labels = [
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
            {_awayTeam.School} {props.reverse ? "(OFF)" : "(DEF)"}
            </div>
        </div>,
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
            {_homeTeam.School} {props.reverse ? "(DEF)" : "(OFF)"}
            </div>
        </div>
    ];

    return (
        <Wrapper
        viusage='backdrop'
        classNames={[...!props.overrideClasses ? OFFENSE_DEFENSE_POINT_RADAR_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? OFFENSE_DEFENSE_POINT_RADAR_STYLE : {}, ...props.style}}>
            <RadarChart 
                height={300} width={300} 
                outerRadius="80%" data={data}>
                <Tooltip 
                contentStyle={{
                    background : 'black',
                    border : 'none',
                    outline : 'none'
                }}
                itemStyle={{
                    background : 'black'
                }}
                wrapperStyle={{
                    background : 'black',
                    border : 'none',
                    outline : '1px solid white',
                    borderRadius : 4
                }}
                formatter={(value)=>`${(Number.parseFloat(value as any) * 100).toFixed(1)}%`}/>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                {/** TODO: move to better verbeage than reverse */}
                <Radar dataKey={props.reverse ? "defense" : "offense"} stroke={COLORS[0]} 
                    fill={COLORS[0]} fillOpacity={0.5} />
                <Radar dataKey={props.reverse ? "offense" : "defense"} stroke={COLORS[1]} 
                    fill={COLORS[1]} fillOpacity={0.5} />
                <Label fontSize={8}/>
            </RadarChart>
            <div className='gap-2' style={{
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr",
                    alignContent : "center",
                    justifyContent : "center"
                }}>
                    {labels}
                </div>
                <br/>
                <h2 className='text-lg'>Point Distribution Radar</h2>
            </Wrapper>
    )
};