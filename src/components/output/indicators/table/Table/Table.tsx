import React, {FC, ReactElement, useState} from 'react';
import { CaretDown, CaretUp, Dash } from 'react-bootstrap-icons';
import { generate } from 'shortid';

export const TABEL_CLASSNAMES : string[] = [ ];
export const TABEL_STYLE : React.CSSProperties = {
};

export interface Tablelike {
    head : string[];
    data : {[key : string] : any}[];
    toReact : {[key : string] : (v : any)=>React.ReactNode};
    compare : {[key : string] : (a : any, b : any)=>number};
}

export type TableProps = {
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    table : Tablelike;
};

export const orderData = (table : Tablelike, sortBy : {[key : string] : number}) : Tablelike["data"]=>{

    return table.data.sort((a, b)=>{

        let diff = 0;

        for(const [field, weight] of Object.entries(sortBy)){
            diff += weight * (table.compare[field] ? table.compare[field](a[field], b[field]) 
            : Number.isFinite(a[field]) && Number.isFinite(b[field]) ? Number.parseFloat(a[field]) - b[field] : 0);
        }

        return diff;

    });


};

export const getColumns = (table : Tablelike) : string[] => {

    let columns = new Set<string>();

    for(const object of table.data)
        for(const column of Object.keys(object))
            columns.add(column);

    return [...columns.values()].sort();

}


export const Table : FC<TableProps>  = (props) =>{

    const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
    const [hiddenRows, setHiddenRows] = useState<number[]>([]);
    const [sortBy, setSortBy] = useState<{[key : string]  : number}>({});

    const columns = getColumns(props.table);
    const sortedData = orderData(props.table, sortBy);


    return (
        <table
        className={[...!props.overrideClasses ? TABEL_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TABEL_STYLE : {}, ...props.style}}>
            <thead>
                <tr className="bg-white-100">
                    {columns.map((col)=>{
                        let Caret : React.ReactNode;
                        if(sortBy[col] > 0) Caret = <CaretDown/>;
                        else if(sortBy[col] < 0) Caret = <CaretUp/>;
                        else Caret = <Dash/>;

                        const handleCaretClick = ()=>{
                            if(sortBy[col] > 0) setSortBy({
                                ...sortBy,
                                [col] : -1
                            });
                            else if(sortBy[col] < 0) setSortBy({
                                ...sortBy,
                                [col] : 0
                            });
                            else setSortBy({
                                ...sortBy,
                                [col] : 1
                            })
                        }
                            
                        return (<th key={generate()} scope="col p-2">
                            <div className="flex gap-2 items-center content-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                {col}
                                <span
                                onClick={handleCaretClick}
                                className="cursor-pointer gcr">
                                    {Caret}
                                </span>
                            </div>
                        </th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((datum)=>{
                    return (
                        <tr key={generate()} className="bg-drk-gray-300 odd:bg-drk-gray-100 cursor-pointer gcr">
                            {columns.map((col, i)=>{
                                return <td className='p-2' key={generate()}>
                                    {props.table.toReact[col] ? props.table.toReact[col](datum[col]): datum[col]}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};