import React, {FC, ReactElement} from 'react';
import { getInverseColorEmphasis } from '../../../../util/color/inversion/emphasis';
import { getReadableTextColor } from '../../../../util/color/inversion/inversion';
import { getViusageColor } from '../../../../util/color/viusage';
import { vistate, viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';


export const GRADIENT_OVERLAY_CLASSNAMES : string[] = [ ];
export const GRADIENT_OVERLAY_STYLE : React.CSSProperties = {
    pointerEvents : "none"
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
        <div
        className={[...!props.overrideClasses ? GRADIENT_OVERLAY_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{
            backgroundColor : `linear-gradient(to right, #00000023, ${primaryColor}23)`,
            ...!props.overrideStyle ? GRADIENT_OVERLAY_STYLE : {}, 
            ...props.style
        }}>
            <div style={{
                pointerEvents : "auto"
            }}>
                {props.children}
            </div>
        </div>
    )
};