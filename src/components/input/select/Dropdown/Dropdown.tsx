import React, {FC, ReactElement} from 'react';
import { Button } from '../../unary';

export const DROPDOWN_CLASSNAMES : string[] = [ ];
export const DROPDOWN_STYLE : React.CSSProperties = {
};

export type DropdownProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    options ? : {[key : string] : React.ReactNode};
    onOption ? : (option : string)=>Promise<void>;
};

export const Dropdown : FC<DropdownProps>  = (props) =>{

    const _options = props.options||{};
    const optionSelects = Object.keys(_options)
    .map((option)=>{
        return <option value={option}>
            <Button key={option} onClick={async ()=>{
                props.onOption && await props.onOption(option);
            }}>
                {_options[option]}
            </Button>
        </option>
    })

    return (
        <select
        className={[...!props.overrideClasses ? DROPDOWN_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? DROPDOWN_STYLE : {}, ...props.style}}>
            {optionSelects}
        </select>
    )
};