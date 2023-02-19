import React, {FC, ReactElement, useState} from 'react';
import { Adder, ResetOrSubmit } from '../../../../input';
import { Filter } from '../../../../input/unary/Filter/Filter';
import { Modal } from '../../modal/Modal';
import { FieldCase, FieldCaseToFilter, FilterTerms, FilterToken } from '../../../../../util/filter/filter';
import { FilterExpression } from '../FilterExpression/FilterExpression';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { FilterModalMobile } from './FilterModalMobile';
import { FilterModalDesktop } from './FilterModalDesktop';

export const FILTER_MODAL_CLASSNAMES : string[] = [ 
    "p-4",
    "rounded",
    "gap-2"
];
export const FILTER_MODAL_STYLE : React.CSSProperties = {
    height : "300px",
    width : "600px",
    overflowY : "scroll",
};

export type FilterModalProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    filters ? : FilterTerms;
    fieldCase ? : FieldCase;
    setFilters ? : (filters : FilterTerms)=>Promise<void>;
};

export const FilterModal : FC<FilterModalProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch(medium) {

        case "mobile" : return <FilterModalMobile {...props}/>
        default : return <FilterModalDesktop {...props}/>


    }

};