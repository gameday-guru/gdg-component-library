import Skeleton from "react-loading-skeleton";
import React, {FC, ReactElement} from 'react';
import { areMocksLoading, isMockLoading, Mockable } from '../../../util/ontology/mockable';

export const MOCK_OVER_CLASSNAMES : string[] = [ ];
export const MOCK_OVER_STYLE : React.CSSProperties = {
};

export type MockOverProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    Content ? : React.ReactNode;
    dependencies ? : Mockable[];
    count ? : number;
    circle ? : boolean;
    baseColor ? : string;
    highlightColor ? : string;
    Skeleton ? : React.ReactNode;
};

export const MockOver : FC<MockOverProps>  = (props) =>{

    const isReady = !areMocksLoading(props.dependencies);

    const _baseColor = props.baseColor||"#444444";
    const _highlightColor = props.highlightColor||"#777777";

    // console.log(isReady);

    if(!isReady && props.Skeleton) props.Skeleton;

    if(!isReady) return (
        <div style={{
            position : "relative"
        }}>
            <div style={{
                opacity : 0
            }}>
                {props.Content}
            </div>
            <Skeleton 
            style={{
                height : "100%",
                width : "100%",
                position : "absolute",
                top : 0,
                left : 0
            }}
            baseColor={_baseColor}
            highlightColor={_highlightColor}
            count={props.count} circle={props.circle} />
        </div>
    )

    return <>
    {props.Content}
    </>
};