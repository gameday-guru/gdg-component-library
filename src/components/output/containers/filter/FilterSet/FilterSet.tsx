import React, {FC, ReactElement} from 'react';
import { LeftRight } from '../../general';
import { viusage } from '../../../../../util';
import { getViusageColor } from '../../../../../util/color/viusage';
import { Emphasislike } from '../../../../../util/color/emphasis';
import { getPairingBackground, getReadableTextColor } from '../../../../../util/color/inversion/inversion';
import { Filter } from '../../../../input/unary/Filter/Filter';

export const FILTER_SET_CLASSNAMES : string[] = [
    "rounded-lg",
    "overflow-hidden"
 ];
export const FILTER_SET_STYLE : React.CSSProperties = {
};

export type FilterSetProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    Title ? : React.ReactNode;
    /** Which visual usage to take advantage of. */
    viusage ? : viusage.primary.Viusagelike;
    emphasis ? : Emphasislike;
    invert ? : boolean;
};

export const FilterSet : FC<FilterSetProps>  = (props) =>{

    // backgrounds
    const primaryColor = getViusageColor(props.viusage);
    const primaryEmphasis = props.emphasis||500;
    const [secondaryColor, secondaryEmphasis] = getPairingBackground([primaryColor, props.emphasis||500]);
    const [_primaryColor, _primaryEmphasis] = props.invert ? 
    [secondaryColor, secondaryEmphasis] : [primaryColor, primaryEmphasis];
    const [_secondaryColor, _secondaryEmphasis] = props.invert ? 
    [primaryColor, primaryEmphasis] : [secondaryColor, secondaryEmphasis];

    // fonts
    const [primaryFontColor, primaryFontEmphasis] = getReadableTextColor([_primaryColor, _primaryEmphasis]);
    const [secondaryFontColor, secondaryFontEmphasis] = getReadableTextColor([_secondaryColor, _secondaryEmphasis]);

    return (
        <div
        className={[...!props.overrideClasses ? FILTER_SET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FILTER_SET_STYLE : {}, ...props.style}}>
            <div className={[
                `bg-${_primaryColor}-${_primaryEmphasis}`,
                `text-${primaryFontColor}-${primaryFontEmphasis}`,
                "p-4"
            ].join(" ")}>
                <LeftRight
                Left={props.Title}
                Right={<Filter/>}/>
            </div>
            <div className={[
                `bg-${_secondaryColor}-${_secondaryEmphasis}`,
                `text-${secondaryFontColor}-${secondaryFontEmphasis}`,
                "p-4"
            ].join(" ")}>
                {props.children}
            </div>
        </div>
    )
};