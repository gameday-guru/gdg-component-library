import React, {FC, ReactElement} from 'react';
import { QuestionCircle } from 'react-bootstrap-icons';

export const HELP_CLASSNAMES : string[] = [ 
    "flex",
    "cursor-pointer",
];
export const HELP_STYLE : React.CSSProperties = {
    alignContent : "center",
    alignItems : "center"
};

export type HelpProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Help : FC<HelpProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? HELP_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HELP_STYLE : {}, ...props.style}}>
            <QuestionCircle/>&emsp;&emsp;<span className="hover:underline">Help</span>
        </div>
    )
};