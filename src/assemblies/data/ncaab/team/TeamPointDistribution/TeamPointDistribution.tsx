import React, {FC, ReactElement} from 'react';
import { PieChart, Pie, Cell, Legend, RadarChart, PolarGrid, Radar } from "recharts";
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { MockPointDistribution } from '../../../../../util/ontology';

export const TEAM_POINT_DISTRIBUTION_CLASSNAMES : string[] = [
    "rounded-lg",
    "p-4",
    "grid"
];
export const TEAM_POINT_DISTRIBUTION_STYLE : React.CSSProperties = {
    justifyContent : "center",
    justifyItems : "center"
};

const RADIAN = Math.PI / 180;

export type TeamPointDistributionProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    pointDistribution ? : ontology.PointDistributionMemberlike;
    Header ? : React.ReactNode;
};

export const TeamPointDistribution : FC<TeamPointDistributionProps>  = (props) =>{

    const _pointDistribution = props.pointDistribution||MockPointDistribution.defense;

    const data = [
        {
            name : "Free Throws",
            value : _pointDistribution.freeThrow
        },
        {
            name : "Two Pointers",
            value : _pointDistribution.twoPoint
        }, 
        {
            name : "Three Pointers",
            value : _pointDistribution.threePoint
        }
    ];

    // TODO: use viusage
    const COLORS = [
        "#00C192",
        "#0086E6",
        "#005E48"
    ]

    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? TEAM_POINT_DISTRIBUTION_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? TEAM_POINT_DISTRIBUTION_STYLE : {}, ...props.style}}>
            {props.Header}
            <PieChart height={200} width={200}>
                    <Pie labelLine={false} label={({
                        cx , cy, midAngle, innerRadius, outerRadius, percent, index,
                    }) => {

                        // TODO: open GitHub issue to type the labeler.
                        const radius = outerRadius * 1.2;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                            {`${(percent * 100).toFixed(0)}%`}
                            </text>
                        );
                    }} stroke='none' innerRadius={20} data={data} dataKey={"value"} nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
                        {data.map((entry, index) => <Cell key={entry.name}  fill={COLORS[index % COLORS.length]}/>)}
                    </Pie>
                </PieChart>
                <div className='gap-2' style={{
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr 1fr",
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
                            Free Throws
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
                            Two Pointers
                        </div>
                    </div>
                    <div style={{
                            display : "flex",
                            fontSize : "8px",
                            alignContent : "center",
                            alignItems : "center"
                        }}>
                        <div style={{
                            background : COLORS[2],
                            height : "10px",
                            width : "10px",
                        }}>

                        </div>
                        &emsp;
                        <div>
                            Three Pointers
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
};