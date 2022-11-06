import React, {FC, ReactElement} from 'react';
import { Vs } from '../../../../components/output/indicators/label/Vs';
import { getViusageColor } from '../../../../util/color/viusage';
import { ontology } from '../../../../util';

export const H_2_H_CLASSNAMES : string[] = [
    "grid"
 ];
export const H_2_H_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 1fr 1fr",
    alignContent : "center",
    justifyContent : "center",
    justifyItems : "center"
};

export type H2HProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    Home ? : ontology.Teamlike;
    Away ? : ontology.Teamlike;
};

export const H2H : FC<H2HProps>  = (props) =>{

    // defaults
    const _home = props.Home||ontology.MockHome;
    const _away = props.Away||ontology.MockAway;

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
                {props.Home||<div style={{
                    color : "white",
                    display : "grid",
                    justifyContent : "center",
                    justifyItems : "center"
                }}>
                    <img width={60} src={_home.TeamLogoUrl}/>
                    <br/>
                    {_home.Name}
                </div>}
                <h2 className='text-lg'>Home</h2>
            </div>
            <div style={{
                display : "grid",
                alignContent : "center"
            }}>   
                <Vs/>
            </div>
            <div>
                {props.Away||<div style={{
                    color : "white",
                    display : "grid",
                    justifyContent : "center",
                    justifyItems : "center"
                }}>
                    <img width={60} src={_away.TeamLogoUrl}/>
                    <br/>
                    {_away.Name}
                </div>}
                <h2 className='text-lg'>Away</h2>
            </div>
        </div>
    )
};