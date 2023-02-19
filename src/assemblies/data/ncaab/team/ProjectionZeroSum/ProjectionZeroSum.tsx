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
    gridTemplateColumns : "1fr"
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

    const awayPct = Math.floor((_awayScore/((_homeScore + _awayScore)/2))*100);
    const homePct = Math.floor((_homeScore/((_homeScore + _awayScore)/2))*100)

    return (
        <Wrapper  viusage='backdrop' classNames={["rounded-lg", "p-4", "text-xs"]}
            style={props.style}>
            <div
            className={[...!props.overrideClasses ? PROJECTION_ZERO_SUM_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? PROJECTION_ZERO_SUM_STYLE : {}, ...props.style}}>
                <h2 className='text-lg'>Score Projection</h2>
                <div style={{
                    width : "100%",
                    display : "grid",
                    alignContent : "center",
                    alignItems : "center",
                    gridTemplateColumns : `${awayPct}fr ${homePct}fr`,
                    textAlign : "left",
                    fontSize : 10,
                    position : "relative"
                }}>
                    <div style={{
                        textAlign : "right"
                    }}>
                        Away Score&emsp;
                        <br/>
                        <div className='rounded-l-full'
                        style={{
                            padding : "2px",
                            background : "#0086E6",
                        }}>
                            {_awayScore.toFixed(1)}&emsp;&emsp;
                        </div>
                    </div>
                    <div>
                        &emsp;Home Score
                        <br/>
                        <div className='rounded-r-full'
                            style={{
                                padding : "2px",
                                background : "#00C192"
                            }}>
                            &emsp;&emsp;{_homeScore.toFixed(1)}
                        </div>
                    </div>
                    <div style={{
                        position : "absolute",
                        display : "grid",
                        left : "50%",
                        top : "100%",
                    }}>
                        <div style={{
                            width : "1px",
                            height : "5px",
                            borderLeft : "1px dotted white",
                        }}>

                        </div>
                        <div style={{
                            position : "relative",
                            left : "-50%"
                        }}>
                            T
                        </div>
                    </div>
                    <div style={{
                        position : "absolute",
                        display : "grid",
                        left : "42.5%",
                        top : "100%",
                    }}>
                        <div style={{
                            width : "1px",
                            height : "5px",
                            borderLeft : "1px dotted white",
                        }}>

                        </div>
                        <div style={{
                            position : "relative",
                            left : "-50%"
                        }}>
                            H
                        </div>
                    </div>
                    <div style={{
                        position : "absolute",
                        display : "grid",
                        left : "57.5%",
                        top : "100%",
                    }}>
                        <div style={{
                            width : "1px",
                            height : "5px",
                            borderLeft : "1px dotted white",
                        }}>

                        </div>
                        <div style={{
                            position : "relative",
                            left : "-50%"
                        }}>
                            A
                        </div>
                    </div>
                </div>
                <br/>
                <div style={{
                    textAlign : "left",
                    fontSize : 10,
                    position : "relative"
                }}>
                    Total Points
                    <div className='bg-gdg-500 rounded-full'
                        style={{
                            width : `${Math.floor(((_homeScore + _awayScore)/200)*100)}%`,
                            padding : "2px",
                            position : "relative"
                        }}>
                        &emsp;&emsp;{(_homeScore + _awayScore).toFixed(0)}
                    </div>
                    <div style={{
                        position : "absolute",
                        display : "grid",
                        left : "50%",
                        top : "100%",
                    }}>
                        <div style={{
                            width : "1px",
                            height : "5px",
                            borderLeft : "1px dotted white",
                        }}>

                        </div>
                        <div style={{
                            position : "relative",
                            left : "-50%"
                        }}>
                            100
                        </div>
                    </div>
                    <div style={{
                        position : "absolute",
                        display : "grid",
                        left : "100%",
                        top : "100%",
                    }}>
                        <div style={{
                            width : "1px",
                            height : "5px",
                            borderLeft : "1px dotted white",
                        }}>

                        </div>
                        <div style={{
                            position : "relative",
                            left : "-50%"
                        }}>
                            200
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </Wrapper>
    )
};