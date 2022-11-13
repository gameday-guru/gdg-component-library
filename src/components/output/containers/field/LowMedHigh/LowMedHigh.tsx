import React, {FC, ReactElement} from 'react';
import { viusage } from '../../../../../util';
import { Wrapper } from '../../Wrapper';

export const LOW_MED_HIGH_CLASSNAMES : string[] = [ ];
export const LOW_MED_HIGH_STYLE : React.CSSProperties = {

};

export type LowMedHighProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    which ? : "low" | "med" | "high";
};

export const LowMedHigh : FC<LowMedHighProps>  = (props) =>{

    let backgroundColor : string | undefined;
    switch(props.which || "med") {

        case "low" : {
            backgroundColor= "#FD353529";
            break;
        }

        case "med" : {
            backgroundColor = "inherit";
            break;
        }

        case "high" : {
            backgroundColor = "#01987529";
            break;
        }

        default : {
            backgroundColor = "inherit";
            break;
        }

    }

    return (
        <Wrapper
        classNames={[...!props.overrideClasses ? LOW_MED_HIGH_CLASSNAMES : [], ...props.classNames||[]]}
        style={{
            ...!props.overrideStyle ? LOW_MED_HIGH_STYLE : {}, 
            backgroundColor,
            ...props.style
        }}>
            <div>
                {props.children}
            </div>
        </Wrapper>
    )
};