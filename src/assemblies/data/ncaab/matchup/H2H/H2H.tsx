import React, {FC, ReactElement} from 'react';
import { Vs } from '../../../../../components/output/indicators/label/Vs';
import { getViusageColor } from '../../../../../util/color/viusage';
import { ontology } from '../../../../../util';
import { StackedTeam } from '../../team/StackedTeam/StackedTeam';

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
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const H2H : FC<H2HProps>  = (props) =>{

    // defaults
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
                <StackedTeam 
                onTeamClick={props.onTeamClick}
                Team={props.Home}/>
                <h2 className='text-lg'>Home</h2>
            </div>
            <div style={{
                display : "grid",
                alignContent : "center"
            }}>   
                <Vs/>
            </div>
            <div>
                <StackedTeam 
                onTeamClick={props.onTeamClick}
                Team={props.Away}/>
                <h2 className='text-lg'>Away</h2>
            </div>
        </div>
    )
};