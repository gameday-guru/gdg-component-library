import React, {FC, ReactElement} from 'react';
import { Button } from '../../unary';

export const DROPDOWN_CLASSNAMES : string[] = [
    "bg-drk-gray-100",
    "rounded"
];
export const DROPDOWN_STYLE : React.CSSProperties = {
};

export type DropdownProps = React.HTMLProps<HTMLSelectElement> & {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    options ? : {[key : string] : React.ReactNode};
    onOption ? : (option : string)=>Promise<void>;
    selected ? : string;
};

export const Dropdown : FC<DropdownProps>  = (props) =>{

    const _options = props.options||{};
    const optionSelects = Object.keys(_options)
    .map((option)=>{

        return (
            <option 
            selected={props.selected === option} 
            value={option} 
            key={option}
            id={option}>
                {_options[option]}
            </option>
        )
    });

    return (
        <select 
        {...props}
        className={[...!props.overrideClasses ? DROPDOWN_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? DROPDOWN_STYLE : {}, ...props.style}}>
            {optionSelects}
        </select>
    )
};