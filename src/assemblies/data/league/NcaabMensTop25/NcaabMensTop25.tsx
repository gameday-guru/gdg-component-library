import React, {FC, ReactElement} from 'react';

export const NCAAB_MENS_TOP25_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_TOP25_STYLE : React.CSSProperties = {
};

export type NcaabMensTop25Props = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const NcaabMensTop25 : FC<NcaabMensTop25Props>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_MENS_TOP25_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_MENS_TOP25_STYLE : {}, ...props.style}}>

        </div>
    )
};