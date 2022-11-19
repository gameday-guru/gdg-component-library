import React, {FC, ReactElement, useEffect, useState} from 'react';
import { LeftRight } from '../../general';
import { viusage } from '../../../../../util';
import { getViusageColor } from '../../../../../util/color/viusage';
import { Emphasislike } from '../../../../../util/color/emphasis';
import { getPairingBackground, getReadableTextColor } from '../../../../../util/color/inversion/inversion';
import { Filter } from '../../../../input/unary/Filter/Filter';
import { evaluateFilterToken, FieldCase, FilterTerms, FilterToken } from '../filter';
import { FilterModal } from '../FilterModal';

export const FILTER_SET_CLASSNAMES : string[] = [
    "rounded-lg",
    "overflow-hidden"
 ];
export const FILTER_SET_STYLE : React.CSSProperties = {

};

export type FilterSetProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    Title ? : React.ReactNode;
    /** Which visual usage to take advantage of. */
    viusage ? : viusage.primary.Viusagelike;
    emphasis ? : Emphasislike;
    invert ? : boolean;
    table ? : any[];
    setTable ? : (table : any[])=>Promise<void>;
    resetTable ? : (table : any[])=>Promise<void>
    fieldCase ? : FieldCase;
};

export const FilterSet : FC<FilterSetProps>  = (props) =>{

    const [filters, setFilters] = useState<FilterToken>({
        relationship : "AND",
        terms : []
    });

    const Right = (
        <FilterModal filters={filters} setFilters={async (filters)=>{
            setFilters(filters)
        }} fieldCase={props.fieldCase}>
            <Filter/>
        </FilterModal>
    )

    useEffect(()=>{
        props.setTable && props.table && props.setTable(
            props.table.filter((value)=>{
                return evaluateFilterToken(value, filters,{})
            })
        ).then((data)=>console.log(data))
        .catch((err)=>console.log(err));
    }, [filters])

    return (
        <div
        className={[...!props.overrideClasses ? FILTER_SET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FILTER_SET_STYLE : {}, ...props.style}}>
            <div>
                <LeftRight style={{ overflow : "visible"}}
                Left={props.Title}
                Right={Right}/>
            </div>
            <hr/>
            <div>
                {props.children}
            </div>
        </div>
    )
};