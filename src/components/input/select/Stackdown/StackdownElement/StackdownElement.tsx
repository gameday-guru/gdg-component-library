import React, {FC, ReactElement} from 'react';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { Button } from '../../../unary';
import { getViusageColor } from '../../../../../util/color/viusage';
import { getInverseColorEmphasis } from '../../../../../util/color/inversion/emphasis';
import { getReadableTextColor } from '../../../../../util/color/inversion/inversion';
import { Emphasislike } from '../../../../../util/color/emphasis';


export const STACKDOWN_ELEMENT_CLASSNAMES : string[] = [ ];
export const STACKDOWN_ELEMENT_STYLE : React.CSSProperties = {
    borderRadius : 0,
};

export type StackdownElementProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    selected ? : boolean;
    onSelected ? : ()=>Promise<void>;
    viusage ? : Viusagelike;
    emphasis ? : Emphasislike;
    invert ? : boolean;
    borderColor ? : React.CSSProperties["color"];
    right ? : boolean;
};

export const StackdownElement : FC<StackdownElementProps>  = (props) =>{

    const _viusage = props.viusage||"wrap";

    // style
    const primaryColor = getViusageColor(props.viusage);
    let primaryEmphasis : Emphasislike = props.emphasis || 500;
    let secondaryEmphasis = getInverseColorEmphasis(primaryEmphasis);
    let temp = primaryEmphasis;
    if(props.invert){
        primaryEmphasis = secondaryEmphasis;
        secondaryEmphasis = temp;
    };

    const borderLeft = props.selected && !props.right ? "2px solid" : undefined;
    const borderRight = props.selected && props.right ? "2px solid" : undefined;
    const borderLeftColor = props.borderColor||"white";
    const borderRightColor = props.borderColor||"white";

    return (
        <Button
            viusage={_viusage}
            div
            onClick={props.onSelected}
            classNames={[...!props.overrideClasses ? STACKDOWN_ELEMENT_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? {
                ...STACKDOWN_ELEMENT_STYLE,
                borderLeft,
                borderRight,
                borderLeftColor,
                borderRightColor,
                overflow : "visible"
            } : {}, ...props.style}}>
            {props.children}
        </Button>
    )
};