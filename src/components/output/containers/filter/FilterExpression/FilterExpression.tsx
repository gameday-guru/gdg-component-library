import React, {FC, ReactElement, useState} from 'react';
import { Dropdown } from '../../../../input/select';
import { FieldCase, FieldCaseToFilter, Filter, FilterCase, FilterPrimitive, FilterToken } from '../filter';

export const FILTER_EXPRESSION_CLASSNAMES : string[] = [ 
    "grid"
];
export const FILTER_EXPRESSION_STYLE : React.CSSProperties = {
    gridTemplateColumns : "2fr 1fr 2fr"
};

export type FilterExpressionProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    fieldCase ? : FieldCase;
    filter ? : FilterToken;
    setFilter ? : (filter : FilterToken)=>Promise<void>;
};

export const FilterExpression : FC<FilterExpressionProps>  = (props) =>{

    const _fieldCase = props.fieldCase||{};
    const fieldOptions = Object.keys(_fieldCase).reduce((agg, key)=>{
        return {
            ...agg,
            [key] : key
        }
    }, {});

    const fieldCaseOptions : {[key : string] : React.ReactNode }= {};
    for(const fieldCase of _fieldCase[props.filter?.field||""])
        for(const filter of FieldCaseToFilter[fieldCase])
            fieldCaseOptions[`${fieldCase}-${filter}`] = (
                <div className='flex'>
                    {filter}&emsp;<span className='text-xs italic'>{filter}</span>
                </div>
            )



    // TODO: unsafe, fix
    const handleFieldOption = async (option : string)=>{
        props.setFilter && await props.setFilter({
            ...props.filter as FilterToken,
            field : option
        })
    }

    const handleCaseOption = async (fieldCase : string)=>{

        const filterCopy = {
            ...props.filter
        } as FilterToken;

        const primitiveCopy = filterCopy.terms[0] as FilterPrimitive;
        primitiveCopy.case = fieldCase as any;
        
        filterCopy.terms = [primitiveCopy]
        props.setFilter && await props.setFilter({
            ...props.filter as FilterToken,
            
        })
    }

    return (
        <div
        className={[...!props.overrideClasses ? FILTER_EXPRESSION_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FILTER_EXPRESSION_STYLE : {}, ...props.style}}>
            <div>
                <Dropdown options={fieldOptions} onOption={handleFieldOption}/>
            </div>
            <div>
                <Dropdown options={fieldCaseOptions} onOption={handleCaseOption}/>
            </div>
            <div>
                {/** TODO: Expression input. */}
            </div>
        </div>
    )
};