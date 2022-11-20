import React, {FC, ReactElement, useState, useEffect} from 'react';
import { vistate, viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';
import { getInverseColorEmphasis } from '../../../../util/color/inversion/emphasis';
import { getReadableTextColor } from '../../../../util/color/inversion/inversion';
import { getViusageColor } from '../../../../util/color/viusage';
import { MoonLoader } from "react-spinners";
import { AnimatedCheck } from '../../../output/indicators/success/AnimatedCheck';
import { AnimatedError } from '../../../output/indicators/error/AnimatedError';

export const TEXT_INPUT_CLASSNAMES : string[] = [
    "rounded",
    "p-2",
    "oultine-0"
];
export const TEXT_INPUT_STYLE : React.CSSProperties = {
    outline : 0
};

export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    fill ? : boolean;
    onSubmit ? : (text : string)=>Promise<void>;
    /** Which visual state to enforce. */
    vistate ? : vistate.primary.Vistatelike;
    /** Which visual usage to take advantage of. */
    viusage ? : viusage.primary.Viusagelike;
    /** Whether to use an outline only. */
    outline ? : boolean;
    /** Invert the color? */
    invert ? : boolean;
    /** Vistate remapping. */
    vistateRemapping ? : Partial<vistate.primary.VistateRemappinglike>;
    /** The time over which the button should decay from success or Error. */
    decay ? : number;
    /** The states under which you may click the button and dispatch an action. */
    clickableStates ? : true | vistate.primary.Vistatelike[];
    /**  Whether the button is disabled. */
    disabled ? : boolean
    /** The emphasis for the attribute. */
    emphasis ? : Emphasislike;
    inputType ? : React.InputHTMLAttributes<HTMLInputElement>['type'];
};

export const TextInput : FC<TextInputProps>  = (props) =>{

     // state
     const [ vistate, setVistate ] = useState<vistate.primary.Vistatelike>(props.vistate||"default");
     useEffect(()=>{
 
         let timeout : NodeJS.Timeout| undefined = undefined;
 
         if (vistate === "err" || vistate === "success")
             timeout = setTimeout(()=>setVistate("default"), props.decay || 500);
 
         return ()=>{if(timeout) clearTimeout(timeout);};
 
     }, [vistate]);
 
     // mouse handlers 
     const handleSubmit : React.FormEventHandler = (e)=>{

        const value : string = (e.target as any).value;
 
         // onClick willy only fire on specified states or default
         if(
             !props.disabled
             && props.onSubmit
             && ( 
                 props.clickableStates === true
                 || (props.clickableStates||["default"]).includes(vistate)
             )
         ) {
            
            e.preventDefault();
            props.onSubmit(value)
            .then(()=>setVistate("success"))
            .catch(()=>setVistate("err"));
 
         }
     }

     const handleKeyDown : React.KeyboardEventHandler = (e)=>{
        if(e.key === "Enter") handleSubmit(e);
     }
 
     // style
     const primaryColor = getViusageColor(props.viusage);
     let primaryEmphasis : Emphasislike = props.emphasis || 500;
     let secondaryEmphasis = getInverseColorEmphasis(primaryEmphasis);
     let temp = primaryEmphasis;
     if(props.invert){
         primaryEmphasis = secondaryEmphasis;
         secondaryEmphasis = temp;
     };
     const [textColor, textEmphasis] = getReadableTextColor([primaryColor, primaryEmphasis])

    return (
        <input
        // onSubmit={handleSubmit}
        type={props.inputType||"text"}
        {...props}
        onKeyDown={handleKeyDown}
        className={[...!props.overrideClasses ? [
            ...TEXT_INPUT_CLASSNAMES, 
            ...[
                props.fill ? 
                `bg-${primaryColor}-${primaryEmphasis} text-${textColor}-${textEmphasis}` 
                : `border rounded border-${primaryColor}-${primaryEmphasis}` 
            ]
        ] : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TEXT_INPUT_STYLE : {}, ...props.style}}>

        </input>
    )
};