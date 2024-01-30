import React, {FC, ReactElement, useEffect, useState} from 'react';
import { LeftRight } from '../../general';
import { viusage } from '../../../../../util';
import { getViusageColor } from '../../../../../util/color/viusage';
import { Emphasislike } from '../../../../../util/color/emphasis';
import { getPairingBackground, getReadableTextColor } from '../../../../../util/color/inversion/inversion';
import { Filter } from '../../../../input/unary/Filter/Filter';
import { evaluateFilterToken, FieldCase, FilterTerms, FilterToken } from '../../../../../util/filter/filter';
import { FilterModal } from '../FilterModal';
import { Pill } from '../../../../input';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';

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
    presets ? : {
        [key : string] : (table : any[])=>Promise<any[]>
    }
};

export const FilterSet : FC<FilterSetProps>  = (props) =>{

    const medium = useSupportedMedia();

    const [whichPreset, setWhichPreset] = useState<string|undefined>(undefined);

    const [filters, setFilters] = useState<FilterToken>({
        relationship : "AND",
        terms : []
    });

    const _presets = props.presets||{};

    const presetEntries = Object.entries(_presets)
    .map(([displayKey, filter], i)=>{

        const handleFilter = async ()=>{
            if(props.setTable){
                const filteredContent = await filter(props.table||[]);
                props.setTable(filteredContent);
            }
            setWhichPreset(displayKey);
        }

        return <Pill
            emphasis={whichPreset === displayKey ? 500 : 300}
            viusage={whichPreset === displayKey || ( !whichPreset && i ===0 )? 'navigate' : 'wrap'}
            onClick={handleFilter}
            key={displayKey}>
                {displayKey}
        </Pill>
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
        ).catch((err)=>console.log(err));
        
    }, [filters, JSON.stringify(props.fieldCase), JSON.stringify(props.table)])

    return (
        <div
        className={[...!props.overrideClasses ? FILTER_SET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FILTER_SET_STYLE : {}, ...props.style}}>
            <div>
                <LeftRight style={{ overflow : "visible"}}
                Left={props.Title}
                Right={Right}/>
            </div>
            {Object.keys(_presets).length ? <><br/><div className='grid gap-2' style={medium === "mobile" ? {
                // height : "100px",
                overflowY : "scroll",
                gridTemplateRows : Array(Object.keys(_presets).length).fill("1fr").join(" ")
            } : {
                gridTemplateColumns : Array(Object.keys(_presets).length).fill("1fr").join(" ")
            }}>
                {presetEntries}
            </div></> : <></>}
            
        </div>
    )
};