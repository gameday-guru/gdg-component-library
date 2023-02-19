import React, {FC, ReactElement, useState} from 'react';
import { Adder, ResetOrSubmit } from '../../../../input';
import { Filter } from '../../../../input/unary/Filter/Filter';
import { Modal } from '../../modal/Modal';
import { FieldCase, FieldCaseToFilter, FilterTerms, FilterToken } from '../../../../../util/filter/filter';
import { FilterExpression } from '../FilterExpression/FilterExpression';

export const FILTER_MODAL_DESKTOP_CLASSNAMES : string[] = [ 
    "p-4",
    "rounded",
    "gap-2"
];
export const FILTER_MODAL_DESKTOP_STYLE : React.CSSProperties = {
    height : "300px",
    width : "600px",
    overflowY : "scroll",
};

export type FilterModalDesktopProps = {
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

export const FilterModalDesktop : FC<FilterModalDesktopProps>  = (props) =>{

    // TODO: May need to refactor this into a reducer to deal with matching state conditions.
    const [filtersDraft, setFiltersDraft] = useState<FilterTerms>(props.filters||{
        relationship : "AND",
        terms : []
    });

    const [modal, setModal] = useState(false);
    const handleClose = ()=>setModal(false);
    const handleOpen = ()=>setModal(true);

    const filterExpressions = filtersDraft.terms.map((filter, index)=>{

        const setFilter = async (filter : FilterToken)=>{
            const filtersDraftCopy = {...filtersDraft};
            filtersDraftCopy.terms[index] = filter;
            setFiltersDraft(filtersDraftCopy);
        }

        const removeFilter = async ()=>{
            const filtersDraftCopy = {...filtersDraft};
            filtersDraftCopy.terms = filtersDraftCopy.terms.filter((value, i)=>{
                return i !== index;
            })
            setFiltersDraft(filtersDraftCopy);
        }

        return <FilterExpression 
            filter={filter as FilterToken}
            setFilter={setFilter}
            removeFilter={removeFilter}
            key={index}
            fieldCase={props.fieldCase}/>
    });

    // TODO: extract null case handling
    const handleAdd = async ()=>{
        if(
            !props.fieldCase 
            || !Object.values(props.fieldCase)[0][0] 
            // || !FieldCaseToFilter[Object.values(props.fieldCase)[0][0]][0]
        ){ return;}

        const filtersDraftCopy = {...filtersDraft};
        filtersDraftCopy.terms.push({
            field : Object.keys(props.fieldCase)[0],
            relationship : "AND",
            terms : [{
                case : Object.values(props.fieldCase)[0][0],
                filter : FieldCaseToFilter[Object.values(props.fieldCase)[0][0]][0] as any,
                right : null as any
            }]
        });
        setFiltersDraft(filtersDraftCopy);

    }
    
    const handleClear = async ()=>{
        const filtersDraftCopy = {...filtersDraft};
        filtersDraftCopy.terms = [];
        setFiltersDraft(filtersDraftCopy);
    };

    const handleSubmit = async ()=>{
        props.setFilters && props.setFilters(filtersDraft);
        setModal(false);
    };


    const InnerModal = (
        
            <div
            className={[...!props.overrideClasses ? FILTER_MODAL_DESKTOP_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? FILTER_MODAL_DESKTOP_STYLE : {}, ...props.style}}>
                    <h2 className='text-lg'>Filters</h2>
                    <div 
                    className='border border-drk-gray-300 rounded p-2'
                    style={{

                        height : "150px",
                        width : "100%",
                        overflowY : "scroll"
                    }}>
                        {filterExpressions}
                    </div>
                    <br/>
                    <div style={{
                        display : "flex",
                        justifyContent : "end",
                        alignContent : "center",
                        alignItems : "center"
                    }}>
                        <Adder viusage='wrap' onClick={handleAdd}>
                            Add filter
                        </Adder>
                        &emsp;   
                        <ResetOrSubmit
                            resetProps={{
                                onClick : handleClear
                            }}
                            submitProps={{
                                onClick : handleSubmit
                            }}/>
                    </div>
            
            </div>

    )

    return (
        <div>
            <Filter onClick={async ()=>handleOpen()}/>
            <Modal 
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                }}
                open={modal} onClose={handleClose}>
                {InnerModal}
            </Modal>
        </div>
    )
};