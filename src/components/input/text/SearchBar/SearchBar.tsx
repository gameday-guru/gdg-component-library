import React, {FC, ReactElement} from 'react';
import { Search } from 'react-bootstrap-icons';

export const SEARCH_BAR_CLASSNAMES : string[] = [ 
    "flex",
    "items-center",
    "gap-2",
    "focus-within:outline",
    "focus-within:outline-1",
    "p-2",
    "rounded",
    "bg-drk-gray-200"
    // "active:bg-black-200",
    // "hover:bg-black-200"
];
export const SEARCH_BAR_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 4fr",
};

export type SearchBarProps = {
    Icon ? : React.ReactNode
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    inputProps ? : React.InputHTMLAttributes<HTMLInputElement>
};

export const SearchBar : FC<SearchBarProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? SEARCH_BAR_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? SEARCH_BAR_STYLE : {}, ...props.style}}>
            <div>
                {props.Icon || <Search/>}
            </div>
            <input 
            style={{
                background : "transparent"
            }}
            onFocus={(e)=>{e.preventDefault(); e.stopPropagation();}}
            className="outline-none" type={"text"} {...props.inputProps}></input>
        </div>
    )
};