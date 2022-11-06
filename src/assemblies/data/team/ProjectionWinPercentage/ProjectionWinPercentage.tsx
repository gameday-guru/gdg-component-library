import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { PieChart, Pie, Cell } from "recharts"

export const PROJECTION_WIN_PERCENTAGE_CLASSNAMES : string[] = [
    "grid"
 ];
export const PROJECTION_WIN_PERCENTAGE_STYLE : React.CSSProperties = {
    justifyContent : "center",
    justifyItems : "center"
};

const RADIAN = Math.PI / 180;

export type ProjectionWinPercentageProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const ProjectionWinPercentage : FC<ProjectionWinPercentageProps>  = (props) =>{

    const data = [
        {
            name : "Colorado State Buffalos",
            value : 72
        },
        {
            name : "Georgia Bulldogs",
            value : 63
        },
    ];

    const COLORS = [
        "#0BDA51",
        "#0096FF"
    ]

    return (
        <Wrapper  viusage='backdrop' classNames={["rounded-lg", "p-4", "text-xs"]}>
            <div
            className={[...!props.overrideClasses ? PROJECTION_WIN_PERCENTAGE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? PROJECTION_WIN_PERCENTAGE_STYLE : {}, ...props.style}}>
                <h2 className='text-lg'>Win Projection</h2>
                <br/>
                <PieChart height={100} width={100}>
                    <Pie labelLine={false} label={({
                        cx , cy, midAngle, innerRadius, outerRadius, percent, index,
                    }) => {

                        // TODO: open GitHub issue to type the labeler.
                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                            {`${(percent * 100).toFixed(0)}%`}
                            </text>
                        );
                    }} stroke='none' innerRadius={20} data={data} dataKey={"value"} nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
                    {
                        data.map((entry, index) => <Cell key={entry.name}  fill={COLORS[index % COLORS.length]}/>)
                    }
                    </Pie>
                </PieChart>
            </div>
        </Wrapper>
    )
};