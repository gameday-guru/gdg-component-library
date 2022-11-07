import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { DateString } from '../../generic';
import { NcaabMensTop25Entry } from '../NcaabMensTop25Entry';

export const NCAAB_MENS_TOP25_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4"
];
export const NCAAB_MENS_TOP25_CONTAINER_STYLE : React.CSSProperties = {

};

export const NCAAB_MENS_TOP25_INNER_CLASSNAMES : string[] = [
    "grid",
    "gap-2"
 ];
export const NCAAB_MENS_TOP25_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
};

export type NcaabMensTop25Props = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike
};

export const NcaabMensTop25 : FC<NcaabMensTop25Props>  = (props) =>{

    return (
        <Wrapper
        viusage={props.viusage||"wrap"}
        classNames={[...!props.overrideClasses ? NCAAB_MENS_TOP25_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? NCAAB_MENS_TOP25_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? NCAAB_MENS_TOP25_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? NCAAB_MENS_TOP25_INNER_STYLE : {}, ...props.style}}>
                <h2 className='text-xl'>Top 25</h2>
                <div style={{
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr"
                }}>
                    <div className='text-lg' style={{
                        borderBottom : `1px solid #019875`
                    }}>Gameday Guru</div>
                    <div className='text-xl' style={{
            
                    }}>AP</div>
                </div>
                <hr/>
                <div>
                    <DateString/>
                </div>
                <div>
                    <NcaabMensTop25Entry/>
                </div>
            </div>
        </Wrapper>
    )
};