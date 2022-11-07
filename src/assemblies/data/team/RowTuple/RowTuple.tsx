import React, {FC, ReactElement} from 'react';
import { StackedPostblock } from '../../../../components/output/containers/field';

export const ROW_TUPLE_CLASSNAMES : string[] = [
    "grid"
];
export const ROW_TUPLE_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 1fr 1fr"
};

export type RowTupleProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const RowTuple : FC<RowTupleProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? ROW_TUPLE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? ROW_TUPLE_STYLE : {}, ...props.style}}>
            <div>
                <StackedPostblock/>
            </div>
            <div>
                <StackedPostblock/>
            </div>
            <div>
                <StackedPostblock/>
            </div>
        </div>
    )
};