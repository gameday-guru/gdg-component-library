import React, {FC, ReactElement} from 'react';

export const FILTER_CLASSNAMES : string[] = [ 
    "flex",
    "item-center",
    "content-center",
    "gap-2"
];
export const FILTER_STYLE : React.CSSProperties = {
};

export type FilterProps = {
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    size ? : number;
    Icon ? : React.ReactNode;
};

export const Filter : FC<FilterProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? FILTER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FILTER_STYLE : {}, ...props.style}}>
            <div 
            className="rounded-full overflow-hidden"
            style={{
                height : props.size||30,
                width : props.size||30
            }}> 
                {props.Icon}
            </div>
            Filter
        </div>
    )
};