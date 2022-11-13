import React, {FC, ReactElement} from 'react';
import { Tune } from "@mui/icons-material";
import { Wrapper } from '../../../output';
import { Button, ButtonProps } from '../Button';

export const FILTER_CONTAINER_CLASSNAMES : string[] = [ 
    'text-gdg-500',
    "cursor-pointer",
    "p-2"
];
export const FILTER_CONTAINER_STYLE : React.CSSProperties = {
};

export const FILTER_INNER_CLASSNAMES : string[] = [ 
    "flex",
    "item-center",
    "content-center",
    "gap-2"
];
export const FILTER_INNER_STYLE : React.CSSProperties = {
};

export type FilterProps = ButtonProps & {
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    size ? : number;
    Icon ? : React.ReactNode;
};

export const Filter : FC<FilterProps>  = (props) =>{

    const _Icon = props.Icon||<Tune/>;

    return (
       
        <Button
            viusage='wrap'
            classNames={[...!props.overrideClasses ? FILTER_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? FILTER_CONTAINER_STYLE : {}, ...props.style}}
            {...props}>
            <div
            className={[...!props.overrideClasses ? FILTER_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? FILTER_INNER_STYLE : {}, ...props.style}}>
                <div 
                className="rounded-full overflow-hidden"
                style={{
                    height : props.size||30,
                    width : props.size||30
                }}> 
                    {_Icon}
                </div>
                Filter
            </div>
        </Button>

    )
};