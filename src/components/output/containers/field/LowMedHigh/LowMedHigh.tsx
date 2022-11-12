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

    let viusage : viusage.primary.Viusagelike;
    switch(props.which || "med") {

        case "low" : {
            viusage = "error";
            break;
        }

        case "med" : {
            viusage = "backdrop";
            break;
        }

        case "high" : {
            viusage = "success";
            break;
        }

        default : {
            viusage = "backdrop";
            break;
        }

    }

    return (
        <Wrapper
        viusage={viusage}
        classNames={[...!props.overrideClasses ? LOW_MED_HIGH_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? LOW_MED_HIGH_STYLE : {}, ...props.style}}>
            {props.children}
        </Wrapper>
    )
};