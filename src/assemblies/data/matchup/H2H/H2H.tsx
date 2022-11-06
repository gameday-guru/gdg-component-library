import React, {FC, ReactElement} from 'react';
import { Vs } from '../../../../components/output/indicators/label/Vs';
import { getViusageColor } from '../../../../util/color/viusage';

export const H_2_H_CLASSNAMES : string[] = [
    "grid"
 ];
export const H_2_H_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 1fr 1fr",
    alignContent : "center"
};

export type H2HProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    Home ? : React.ReactNode;
    Away ? : React.ReactNode;
};

export const H2H : FC<H2HProps>  = (props) =>{

    const primaryColor = getViusageColor("navigate");

    return (
        <div
        className={[
            `text-${primaryColor}-500`,
            ...!props.overrideClasses ? H_2_H_CLASSNAMES : [], 
            ...props.classNames||[]].join(" ")
        }
        style={{...!props.overrideStyle ? H_2_H_STYLE : {}, ...props.style}}>
            <div>
                {props.Home}
                <h2>Home</h2>
            </div>
            <div>   
                <Vs/>
            </div>
            <div>
                {props.Away}
                <h2>Away</h2>
            </div>
        </div>
    )
};