import React, {FC, ReactElement} from 'react';
import { Viusagelike } from '../../../../util/viusage/primary';
import { StackdownElement } from './StackdownElement/StackdownElement';
import { generate } from 'shortid';

export const STACKDOWN_CLASSNAMES : string[] = [ ];
export const STACKDOWN_STYLE : React.CSSProperties = {
    display : "grid",
    gridTemplateColumns : "1fr",
};

export type StackdownProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    options ? : {
        [key : string] : React.ReactNode;
    }
    selected ? : string;
    handleOptionSelect ? : (which : string)=>Promise<void>;
    viusage ? : Viusagelike;
    borderColor ? : React.CSSProperties["color"];
    reverseBorder ? : boolean;
};

export const Stackdown : FC<StackdownProps>  = (props) =>{

    const _viusage = props.viusage||"wrap";

    const _Options = Object.entries(props.options ?? {}).map(([key, Option])=>{


        const _handleSelect = async ()=>{

            if(props.handleOptionSelect)
                await props.handleOptionSelect(key)
            

        }

        return <StackdownElement 
            right={props.reverseBorder}
            borderColor={props.borderColor}
            key={generate()}
            viusage={_viusage}
            selected={props.selected === key}
            onSelected={_handleSelect}>
            {Option}
        </StackdownElement> 


    })


    return (
        <div
            className={[...!props.overrideClasses ? STACKDOWN_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? STACKDOWN_STYLE : {}, ...props.style}}>
                {_Options}
        </div>
    )
};