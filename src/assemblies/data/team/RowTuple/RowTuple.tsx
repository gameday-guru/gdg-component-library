import React, {FC, ReactElement} from 'react';
import { StackedPostblock } from '../../../../components/output/containers/field';

export const ROW_TUPLE_CLASSNAMES : string[] = [
    "grid",
    "gap-2"
];
export const ROW_TUPLE_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr",
    gridTemplateColumns : "1fr 1fr 1fr",
    alignContent : "center",
    alignItems : "center"
};

export type RowTupleProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    line ? : number;
    odds ? : number;
    projectedScore ? : number;
};

export const RowTuple : FC<RowTupleProps>  = (props) =>{

    const _line = props.line||8;
    const _odds = props.odds||-110;
    const _projectedScore = props.projectedScore||70;

    return (
        <div
        className={[...!props.overrideClasses ? ROW_TUPLE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? ROW_TUPLE_STYLE : {}, ...props.style}}>
            <StackedPostblock
                style={{
                    height : "100%"
                }}
                Label={"Line"}
                Value={_line > 0 ? `+${_line}` : _line}/>
            <StackedPostblock
                style={{
                    height : "100%"
                }}
                Label={"Odds"}
                Value={_odds}/>
            <StackedPostblock
                style={{
                    height : "100%"
                }}
                Label={"Projected Score"}
                Value={_projectedScore.toFixed(1)}/>
        </div>
    )
};