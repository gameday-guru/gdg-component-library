import React, {FC, ReactElement, useState} from 'react';
import { Dropdown } from '../../../../input/select';
import { FieldCase, FieldCaseToFilter, Filter, FilterCase, FilterPrimitive, FilterToken } from '../../../../../util/filter/filter';
import { TextInput } from '../../../../input/text/TextInput';
import { X } from 'react-bootstrap-icons';
import { Wrapper } from '../../Wrapper';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { FilterExpressionMobile } from './FilterExpressionMobile';
import { FilterExpressionDesktop } from './FilterExpressionDesktop';

export const FILTER_EXPRESSION_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const FILTER_EXPRESSION_STYLE : React.CSSProperties = {
    gridTemplateColumns : "10fr 6fr 10fr 1fr",
    alignContent : "center",
    alignItems : "center",
    borderBottom : "1px solid"
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
    removeFilter ? : ()=>Promise<void>;
};

export const FilterExpression : FC<FilterExpressionProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch(medium){

        case "mobile" : return <FilterExpressionMobile {...props}/>
        default : return <FilterExpressionDesktop {...props}/>

    }
   
};