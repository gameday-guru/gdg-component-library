import React, {FC, ReactElement} from 'react';

export const GAMBLERS_TUPLE_CLASSNAMES : string[] = [
    "grid",
    "gap-2",
    "rounded-lg",
    "p-2"
];
export const GAMBLERS_TUPLE_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 1fr",
    border : "1px solid #33A9FE",
    alignContent : "center",
    alignItems : "center"
};

export type GamblersTupleProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const GamblersTuple : FC<GamblersTupleProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? GAMBLERS_TUPLE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? GAMBLERS_TUPLE_STYLE : {}, ...props.style}}>
            <div 
            className='rounded-lg'
            style={{
                display : "grid",
                height : "100%",
                background : "#33A9FE44",
                textAlign : "center",
                alignContent : "center"
            }}>
                <h2 style={{
                    color : "#ffffff44"
                }}>Projected Total</h2>
                130
            </div>
            <div 
            className='rounded-lg'
            style={{
                height : "100%",
                display : "grid",
                gridTemplateColumns : "1fr 1fr",
                background : "#33A9FE44",
                alignContent : "center"
            }}>
                <div style={{
                     textAlign : "center"
                }}>
                    <h2 style={{
                        color : "#ffffff44",
                    }}>Total</h2>
                    O/U 130
                </div>
                <div style={{
                    textAlign : "center"
                }}>
                    <h2 style={{
                        color : "#ffffff44"
                    }}>Odds</h2>
                    -110
                </div>
            </div>
        </div>
    )
};