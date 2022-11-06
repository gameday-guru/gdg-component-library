import React, {FC, ReactElement} from 'react';
import { getInverseColorEmphasis } from '../../../../util/color/inversion/emphasis';
import { getReadableTextColor } from '../../../../util/color/inversion/inversion';
import { getViusageColor } from '../../../../util/color/viusage';
import { vistate, viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';

export const DATE_STRING_CLASSNAMES : string[] = [ 
    "flex"
];
export const DATE_STRING_STYLE : React.CSSProperties = {
};

export type DateStringProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    date ? : Date;
};

export const DateString : FC<DateStringProps>  = (props) =>{

    const _date = props.date||new Date();
    const dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const primaryColor = getViusageColor("navigate");

    return (
        <div
        className={[
            `text-${primaryColor}-500`,
            ...!props.overrideClasses ? DATE_STRING_CLASSNAMES : [], 
            ...props.classNames||[]
        ].join(" ")}
        style={{...!props.overrideStyle ? DATE_STRING_STYLE : {}, ...props.style}}>
            {_date.getHours()}:{_date.toLocaleTimeString("en-us", {minute : "2-digit"})}, {dayOfWeek[_date.getDay()]}, {_date.toLocaleDateString("en-us", {month : "short"})} {_date.toLocaleDateString("en-us", {day : "numeric"})}, {_date.toLocaleDateString("en-us", {year : "numeric"})}
        </div>
    )
};