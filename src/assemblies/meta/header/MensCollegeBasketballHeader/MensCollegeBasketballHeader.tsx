import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { LeftRight } from '../../../../components/output/containers/general';
import { Snu } from '../Snu';
import { SportsBasketball } from "@mui/icons-material";

export const MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_CLASSNAMES : string[] = [ ];
export const MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_STYLE : React.CSSProperties = {
};

export const MENS_COLLEGE_BASKETBALL_HEADER_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "p-4"
];
export const MENS_COLLEGE_BASKETBALL_HEADER_INNER_STYLE : React.CSSProperties = {
    
};

export type MensCollegeBasketballHeaderProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike
};

export const MensCollegeBasketballHeader : FC<MensCollegeBasketballHeaderProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            emphasis={400}
            classNames={[...!props.overrideClasses ? MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? MENS_COLLEGE_BASKETBALL_HEADER_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? MENS_COLLEGE_BASKETBALL_HEADER_INNER_STYLE : {}, ...props.style}}>
                <LeftRight
                    Left={<div className="flex hover-underline" style={{
                        alignContent : "center",
                        alignItems : "center"
                    }}>
                        <SportsBasketball/>&emsp;Men's College Basketball
                    </div>}
                    Right={<Snu/>}/>
            </div>
        </Wrapper>
    )
};