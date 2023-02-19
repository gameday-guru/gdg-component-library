import React, {FC, ReactElement, useState} from 'react';
import { Dropdown } from '../../../../input/select';
import { FieldCase, FieldCaseToFilter, Filter, FilterCase, FilterPrimitive, FilterToken } from '../../../../../util/filter/filter';
import { TextInput } from '../../../../input/text/TextInput';
import { X } from 'react-bootstrap-icons';
import { Wrapper } from '../../Wrapper';

export const FILTER_EXPRESSION_MOBILE_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const FILTER_EXPRESSION_MOBILE_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    alignContent : "center",
    alignItems : "center",
    borderBottom : "1px solid"
};

export type FilterExpressionMobileProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    fieldCase ? : FieldCase;
    filter ? : FilterToken;
    setFilter ? : (filter : FilterToken)=>Promise<void>;
    removeFilter ? : ()=>Promise<void>;
};

export const FilterExpressionMobile : FC<FilterExpressionMobileProps>  = (props) =>{

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

                <span>{filter}&emsp;<span className='text-xs italic'>({fieldCase})</span></span>
            )

    // TODO: unsafe, fix
    const handleFieldOption = async (option : string)=>{
        props.setFilter && await props.setFilter({
            ...props.filter as FilterToken,
            field : option
        })
    }

    const handleCaseOption = async (fieldCase : string, fieldComp : string)=>{

        const filterCopy = {
            ...props.filter
        } as FilterToken;

        const primitiveCopy = filterCopy.terms[0] as FilterPrimitive;
        primitiveCopy.case = fieldCase as any;
        primitiveCopy.filter = fieldComp as any;
        
        filterCopy.terms = [primitiveCopy]
        props.setFilter && await props.setFilter(filterCopy)
    }

    const handleFieldCaseChange = (e : any)=>{

        const [field, value] = e.target.value.split("-");
        handleCaseOption(field, value)
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))

    }

    const handleComparisonValue = async (value : string)=>{

        const filterCopy = {
            ...props.filter
        } as FilterToken;

        const primitiveCopy = filterCopy.terms[0] as FilterPrimitive;
        primitiveCopy.right = value;
        
        filterCopy.terms = [primitiveCopy]
        props.setFilter && await props.setFilter(filterCopy)
    }

    return (
        <div
        className={[...!props.overrideClasses ? FILTER_EXPRESSION_MOBILE_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FILTER_EXPRESSION_MOBILE_STYLE : {}, ...props.style}}>
            <div className='gap-2' style={{
                display : "grid",
                gridTemplateColumns : "6fr 4fr"
            }}>
                <Dropdown 
                style={{
                    width : "100%"
                }}
                selected={props.filter?.field as any}
                onChange={(e)=>{
                    handleFieldOption((e.target as any).value)
                    .then((data)=>console.log(data))
                    .catch((err)=>console.log(err));
                }} options={fieldOptions} onOption={handleFieldOption}/>
                <Dropdown 
                style={{
                    width : "100%"
                }}
                selected={`${(props.filter?.terms[0] as any).case}-${(props.filter?.terms[0] as any).filter}` as any}
                options={fieldCaseOptions} onChange={(e)=>{
                    handleFieldCaseChange(e);
                }}/>
            </div>
            <div style={{
                display : "grid",
                gridTemplateColumns : "9fr 1fr",
                alignContent : "center",
                alignItems : "center"
            }}>
               <TextInput
               onChange={(e)=>[
                    handleComparisonValue(e.target.value)
                    .then((data)=>console.log(data))
                    .catch((err)=>console.log(err))
               ]}
               defaultValue={(props.filter?.terms[0] as any).right} 
               onSubmit={handleComparisonValue as any}
               placeholder={"Comparison value"}
               style={{
                    width : "100%"
               }}
               viusage='wrap' fill/>
               <Wrapper 
                    style={{
                        cursor : "pointer",
                        display : "flex",
                        alignContent : "center",
                        justifyContent : "center"
                    }}
                    hoverAnimate
                    viusage='wrap'>
                    <X className='fill-error-500 rounded' onClick={()=>{
                        props.removeFilter && props.removeFilter()
                        .then((data)=>console.log(data))
                        .catch((e)=>console.log(e));
                    }}/>
                </Wrapper>
            </div>
        </div>
    )
};