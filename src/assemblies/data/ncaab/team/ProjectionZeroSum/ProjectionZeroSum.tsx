import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';

const COLORS = [
    "#00C192",
    "#0086E6"
]

export const PROJECTION_ZERO_SUM_CLASSNAMES : string[] = [
    "grid",
    "gap-2"
 ];
export const PROJECTION_ZERO_SUM_STYLE : React.CSSProperties = {

};

export type ProjectionZeroSumProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    homeScore ? : number;
    awayScore ? : number;
};

export const ProjectionZeroSum : FC<ProjectionZeroSumProps>  = (props) =>{

    const _homeScore = props.homeScore||72;
    const _awayScore = props.awayScore||63;

    return (
        <Wrapper  viusage='backdrop' classNames={["rounded-lg", "p-4", "text-xs"]}
            style={props.style}>
            <div
            className={[...!props.overrideClasses ? PROJECTION_ZERO_SUM_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? PROJECTION_ZERO_SUM_STYLE : {}, ...props.style}}>
                <h2 className='text-lg'>Score Projection</h2>
                <div style={{
                    display : "grid",
                    alignContent : "center",
                    alignItems : "center",
                    gridTemplateColumns : "1fr 1fr",
                    textAlign : "left",
                    fontSize : 10
                }}>
                    <div>
                        Home Score
                        <br/>
                        <div className='rounded-l-full'
                        style={{
                            width : `${Math.floor((_homeScore/((_homeScore + _awayScore)/2))*100)}%`,
                            justifySelf : "right",
                            padding : "2px",
                            background : "#00C192"
                        }}>
                            &emsp;&emsp;{_homeScore.toFixed(1)}
                        </div>
                    </div>
                    <div>
                        Away Score
                        <br/>
                        <div className='rounded-r-full'
                            style={{
                                width : `${Math.floor((_awayScore/((_homeScore + _awayScore)/2))*100)}%`,
                                justifySelf : "left",
                                padding : "2px",
                                background : "#0086E6"
                            }}>
                            &emsp;{_awayScore.toFixed(1)}
                        </div>
                    </div>
                </div>
                <div style={{
                    textAlign : "left",
                    fontSize : 10
                }}>
                    Total Points
                    <div className='bg-gdg-500 rounded-full'
                        style={{
                            width : `${Math.floor(((_homeScore + _awayScore)/250)*100)}%`,
                            padding : "2px"
                        }}>
                        &emsp;&emsp;{(_homeScore + _awayScore).toFixed(0)}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};