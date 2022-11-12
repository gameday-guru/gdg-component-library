import React, {FC, ReactElement} from 'react';
import { Table } from '../../../../components/output/indicators/table/Table';

export const TEAM_EFFICIENCY_TABLE_CLASSNAMES : string[] = [ ];
export const TEAM_EFFICIENCY_TABLE_STYLE : React.CSSProperties = {
};

export type TeamEfficiencyTableProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const TeamEfficiencyTable : FC<TeamEfficiencyTableProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? TEAM_EFFICIENCY_TABLE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TEAM_EFFICIENCY_TABLE_STYLE : {}, ...props.style}}>
            <Table table={{
                head : [],
                data : [],
                toReact : {},
                compare : {}
            }}/>
        </div>
    )
};