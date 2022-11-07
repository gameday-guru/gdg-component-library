import React, {FC, ReactElement} from 'react';
import { getInverseColorEmphasis } from '../../../../util/color/inversion/emphasis';
import { getReadableTextColor } from '../../../../util/color/inversion/inversion';
import { getViusageColor } from '../../../../util/color/viusage';
import { vistate, viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';


export const GRADIENT_OVERLAY_CLASSNAMES : string[] = [ 
    "rounded-lg"
];
export const GRADIENT_OVERLAY_STYLE : React.CSSProperties = {
    pointerEvents : "none",
    position : "absolute",
    left : 0,
    top : 0
};

export type GradientOverlayProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    emphasis ? : Emphasislike;
    /** Which visual state to enforce. */
    vistate ? : vistate.primary.Vistatelike;
    /** Which visual usage to take advantage of. */
    viusage ? : viusage.primary.Viusagelike;
    /** Invert the color? */
    invert ? : boolean;
    /** */
    hoverAnimate ? : boolean;
};

export const GradientOverlay : FC<GradientOverlayProps>  = (props) =>{

    // style
    const primaryColor = getViusageColor(props.viusage);

    return (
        <div style={{display : "relative"}}>
            {props.children}
            <div
            className={[...!props.overrideClasses ? GRADIENT_OVERLAY_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{
                ...!props.overrideStyle ? GRADIENT_OVERLAY_STYLE : {}, 
                ...props.style,
                // background : "linear-gradient(#e66465, #9198e5)"
                background : `linear-gradient(to right, #005E4823, #005E48ff)`,
            }}>
            </div>
        </div>
       
    )
};