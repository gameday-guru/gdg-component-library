import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { PieChart, Pie, Cell, Legend, RadarChart, PolarGrid, Radar } from "recharts";
import { ontology } from '../../../../util';
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
    homeEff ? : ontology.EfficiencyEntrylike;
    awayTeam ? : ontology.Teamlike;
    awayEff ? : ontology.EfficiencyEntrylike;
    gameProjection ? : ontology.ProjectionEntrylike;
};

export const ProjectionWinPercentage : FC<ProjectionWinPercentageProps>  = (props) =>{

    // defaults
    const _home = props.homeTeam||ontology.MockHome;
    const _homeEff = props.homeTeam||ontology.MockHomeEff;
    const _away = props.awayTeam||ontology.MockAway;
    const _awayEff = props.awayTeam||ontology.MockAwayEff;
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
        "#00C192",
        "#0086E6"
    ]

    return (
        <Wrapper  viusage='backdrop' classNames={["rounded-lg", "p-4", "text-xs"]}>
            <div
            className={[...!props.overrideClasses ? PROJECTION_WIN_PERCENTAGE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? PROJECTION_WIN_PERCENTAGE_STYLE : {}, ...props.style}}>
                <h2 className='text-lg'>Win Projection</h2>
                <br/>
                <PieChart height={125} width={125}>
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
                    }} stroke='none' innerRadius={10} data={data} dataKey={"value"} nameKey="name" cx="50%" cy="50%" outerRadius={30} fill="#8884d8">
                        {data.map((entry, index) => <Cell key={entry.name}  fill={COLORS[index % COLORS.length]}/>)}
                    </Pie>
                </PieChart>
                <div className='gap-4' style={{
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
                        {_home.Name}
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
                        {_away.Name}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};