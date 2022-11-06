import React, {FC, ReactElement} from 'react';

export const NCAAB_MENS_OVERVIEW_CLASSNAMES : string[] = [
    "grid",
    "gap-4"
 ];
export const NCAAB_MENS_OVERVIEW_STYLE : React.CSSProperties = {
    gridTemplateColumns : "3fr 1fr"
};

export type NcaabMensOverviewProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const NcaabMensOverview : FC<NcaabMensOverviewProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_MENS_OVERVIEW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_MENS_OVERVIEW_STYLE : {}, ...props.style}}>
            <div>
                {/** TODO: NcaabMensOverviewStack */}
            </div>
            <div>
                {/** TODO: NcaabMensTop25 */}
            </div>
        </div>
    )
};