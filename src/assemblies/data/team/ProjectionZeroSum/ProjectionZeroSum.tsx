import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';

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
        <Wrapper  viusage='backdrop' classNames={["rounded-lg", "p-4", "text-xs"]}>
            <div
            className={[...!props.overrideClasses ? PROJECTION_ZERO_SUM_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? PROJECTION_ZERO_SUM_STYLE : {}, ...props.style}}>
                <h2 className='text-lg'>Score Projection</h2>
                <div style={{
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr",
                    textAlign : "left",
                    fontSize : 8
                }}>
                    <div>
                        Home Score
                        <br/>
                        <div className='bg-success-500 rounded-l-full'
                        style={{
                            width : `${Math.floor((_homeScore/((_homeScore + _awayScore)/2))*100)}%`,
                            justifySelf : "right",
                            padding : "2px"
                        }}>
                            &emsp;{_homeScore}
                        </div>
                    </div>
                    <div>
                        Away Score
                        <br/>
                        <div className='bg-info-500 rounded-r-full'
                            style={{
                                width : `${Math.floor((_awayScore/((_homeScore + _awayScore)/2))*100)}%`,
                                justifySelf : "left",
                                padding : "2px"
                            }}>
                            &emsp;{_awayScore}
                        </div>
                    </div>
                </div>
                <div style={{
                    textAlign : "left",
                    fontSize : 8
                }}>
                    Total Points
                    <div className='bg-gdg-500 rounded-full'
                        style={{
                            width : `${Math.floor(((_homeScore + _awayScore)/250)*100)}%`,
                            padding : "2px"
                        }}>
                        &emsp;{_homeScore + _awayScore}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};