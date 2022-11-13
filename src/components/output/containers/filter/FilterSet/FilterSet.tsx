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

    return (
        <div
        className={[...!props.overrideClasses ? FILTER_SET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FILTER_SET_STYLE : {}, ...props.style}}>
            <div>
                <LeftRight
                Left={props.Title}
                Right={<Filter/>}/>
            </div>
            <hr/>
            <div>
                {props.children}
            </div>
        </div>
    )
};