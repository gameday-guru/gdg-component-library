import React, {FC, ReactElement, ReactPropTypes} from 'react';
import { getInverseColorEmphasis } from '../../../../util/color/inversion/emphasis';
import { getReadableTextColor } from '../../../../util/color/inversion/inversion';
import { getViusageColor } from '../../../../util/color/viusage';
import { vistate, viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';

export const WRAPPER_CLASSNAMES : string[] = [ ];
export const WRAPPER_STYLE : React.CSSProperties = {
};

export type WrapperProps = {
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
    onClick ? : ()=>void;
    innerProps ? : React.HTMLProps<HTMLDivElement>;
};

export const Wrapper : FC<WrapperProps>  = (props) =>{

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
        {...props.innerProps}
        onClick={props.onClick}
        className={[
            ...!props.overrideClasses ? WRAPPER_CLASSNAMES : [],
            ...props.classNames||[],
            ...[
                // `border-${primaryColor}-${secondaryEmphasis}`,
                `bg-${primaryColor}-${primaryEmphasis}`,
                props.hoverAnimate && `hover:bg-${primaryColor}-${primaryEmphasis - 200}`,
                `text-${textColor}-${textEmphasis}`,
                props.hoverAnimate && `hover:text-${textColor}-${textEmphasis + 100}`,
                `fill-${primaryColor}-${secondaryEmphasis}`
            ]
        ].join(" ")}
        style={{...!props.overrideStyle ? WRAPPER_STYLE : {}, ...props.style}}>
            {props.children}
        </div>
    )
};