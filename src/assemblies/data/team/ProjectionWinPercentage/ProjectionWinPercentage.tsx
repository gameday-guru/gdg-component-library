import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { PieChart, Pie, Cell, Legend } from "recharts";
import { ontology } from '../../../../util';
import BigNumber from "bignumber.js";
import Decimal from "decimal.js";

export const PROJECTION_WIN_PERCENTAGE_CLASSNAMES : string[] = [
    "grid"
 ];
export const PROJECTION_WIN_PERCENTAGE_STYLE : React.CSSProperties = {
    justifyContent : "center",
    justifyItems : "center"
};

const RADIAN = Math.PI / 180;
const SPORT_EXPONENT = 11.5;

export type ProjectionWinPercentageProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    homeTeam ? : ontology.Teamlike;
    awayTeam ? : ontology.Teamlike;
    gameProjection ? : ontology.ProjectionEntrylike;
};

export const ProjectionWinPercentage : FC<ProjectionWinPercentageProps>  = (props) =>{

    // defaults
    const _home = props.homeTeam||ontology.MockHome;
    const _away = props.awayTeam||ontology.MockAway;
    const _gameProjection = props.gameProjection||ontology.MockProjection;

    // compute pythagorean win, we ought to use Decimal for this because numbers can be bigger than 2 ^ 64
    const _homeScore = new Decimal(_gameProjection.home_team_score);
    const _awayScore = new Decimal(_gameProjection.away_team_score);
    const pythagoreanTotal : Decimal = (_homeScore.pow(SPORT_EXPONENT)).plus(_awayScore.pow(SPORT_EXPONENT));
    const homePythagoreanWin : Decimal = _homeScore.pow(SPORT_EXPONENT).dividedBy(pythagoreanTotal);
    const awayPythagoreanWin : Decimal = _awayScore.pow(SPORT_EXPONENT).dividedBy(pythagoreanTotal);
    const _homePythagoreanWin : number = homePythagoreanWin.toNumber();
    const _awayPythagoreanWin : number = awayPythagoreanWin.toNumber();

    const data = [
        {
            name : _home.Name,
            value : _homePythagoreanWin
        },
        {
            name : _away.Name,
            value :_awayPythagoreanWin
        }
    ];

    // TODO: use viusage
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
                <PieChart height={200} width={200}>
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
                        {data.map((entry, index) => <Cell key={entry.name}  fill={COLORS[index % COLORS.length]}/>)}
                    </Pie>
                    <Legend
                            payload={
                                data.map(
                                (item, index) => ({
                                    id: item.name,
                                    type: "square",
                                    value: `${item.name} (${item.value}%)`,
                                    color: COLORS[index % COLORS.length]
                                })
                                )
                            }
                        />
                </PieChart>
            </div>
        </Wrapper>
    )
};