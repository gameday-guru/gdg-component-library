import React, {FC, useEffect, useState, useReducer } from 'react';
import { vistate, viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';
import { getInverseColorEmphasis } from '../../../../util/color/inversion/emphasis';
import { getReadableTextColor } from '../../../../util/color/inversion/inversion';
import { getViusageColor } from '../../../../util/color/viusage';
import { MoonLoader } from "react-spinners";
import { AnimatedCheck } from '../../../output/indicators/success/AnimatedCheck';
import { AnimatedError } from '../../../output/indicators/error/AnimatedError';

export const BUTTON_CLASSNAMES : string[] = [
    "border-0",
    "rounded-lg",
    "cursor-pointer",
    "p-2",
    "gcr"
]

export const BUTTON_STYLE : React.CSSProperties = {
    position : "relative",
    border : "none"
};

export type ButtonProps = {
    children ? : React.ReactNode;
    /** Style injection. */
    style ? : React.CSSProperties
    /** Async onclick handler. */
    onClick ? : (event : React.MouseEvent)=>Promise<void>;
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
    classNames ? : string[];
    overrideClasses ? : boolean;
};

export const Button : FC<ButtonProps>  = (props) =>{

    // state
    const [ vistate, setVistate ] = useState<vistate.primary.Vistatelike>(props.vistate||"default");
    useEffect(()=>{

        let timeout : NodeJS.Timeout| undefined = undefined;

        if (vistate === "err" || vistate === "success")
            timeout = setTimeout(()=>setVistate("default"), props.decay || 500);

        return ()=>{if(timeout) clearTimeout(timeout);};

    }, [vistate]);

    // mouse handlers 
    const handleClick : React.MouseEventHandler = (e)=>{

        // onClick willy only fire on specified states or default
        if(
            !props.disabled
            && props.onClick
            && ( 
                props.clickableStates === true
                || (props.clickableStates||["default"]).includes(vistate)
            )
        ) {

            setVistate("loading");
            props.onClick(e)
            .then(()=>setVistate("success"))
            .catch(()=>setVistate("err"));

        }
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
        <div
        // pass through
        {...props}
        // used props
        onClick={handleClick}
        className={[
            ...!props.overrideClasses ? BUTTON_CLASSNAMES : [],
            ...props.classNames||[],
            ...[
                // `border-${primaryColor}-${secondaryEmphasis}`,
                `bg-${primaryColor}-${primaryEmphasis}`,
                `hover:bg-${primaryColor}-${primaryEmphasis - 200}`,
                `text-${textColor}-${textEmphasis}`,
                `hover:text-${textColor}-${textEmphasis + 100}`,
                `fill-${primaryColor}-${secondaryEmphasis}`
            ]
        ].join(" ")}
        style={{...BUTTON_STYLE, ...props.style}}>
            { props.children }
            { (
                vistate === "loading"
                || vistate === "err"
                || vistate === "success"
             ) && <div 
             className={`text-${primaryColor}-${secondaryEmphasis}`}
             style={{
                display : "flex",
                alignContent : "center",
                justifyContent : "center",
                alignItems : "center",
                justifyItems : "center",
                position : "absolute",
                height : "100%",
                width : "100%",
                background : "#ffffff99",
                left : 0,
                top : 0
            }}>
                { vistate === "loading" && <MoonLoader size="20px"/> }
                { vistate === "err" && <AnimatedError size={40}/> }
                { vistate === "success" && <AnimatedCheck size={40}/> }
            </div>}
        </div>
    )
};

/**
 * TODO: You may see this noted elsewhere. But, here is the first mention of it:
 * - We will likely need a client-side runtime for tailwind because...
 * - Dynamic generation of classes as performed above, is a desirable pattern...
 * - However, purgeCss will not be able to reduce our dependencies.
 * - The easiest way around this right now is to safelist a relatively small number of dependencies.
 * - However, in an SSR environment, we should be able to compile and/or retrieve on request with relative surety.
 * - We will want to use a stack algorithm similar to those used in page-replacement 
 * systems.
 * - If we do rely on the client-side runtime making requests to a CSS compiler backend, then we need
 * to make sure that the browser does not repaint until the assets have been fetched.
 * - The above will likely introduce significant lags, so reducing non-collisions will remain important and an assumption of a large page size will be valid.
 */