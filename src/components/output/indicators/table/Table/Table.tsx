import React, {FC, ReactElement, useState} from 'react';
import { CaretDown, CaretUp, Dash } from 'react-bootstrap-icons';
import { generate } from 'shortid';

export const TABEL_CLASSNAMES : string[] = [
    "p-4"
];
export const TABEL_STYLE : React.CSSProperties = {
    height : "fit-content"
};

export interface Tablelike {
    hiddenHeads ? : string[];
    head ? : string[];
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
    defaultSortBy ? : {[key : string]  : number}
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

    const indexMemo : {[key : string] : number} = {

    };

    const getIndex = (a : string)=>{

        if(indexMemo[a]) return indexMemo[a];

        let index : number

        if(table.head) index = table.head.indexOf(a);
        else index = -1

        indexMemo[a] = index;

        return index;

    }

    return [...columns.values()].sort((a, b)=>{

        if(table.head) { // if head, use the position in th head

            // we should probably memoize to optimize
            const aIndex = getIndex(a);
            const bIndex = getIndex(b);

            return (aIndex > -1 ? aIndex : Number.MAX_SAFE_INTEGER)
            - 
            (bIndex > -1 ? bIndex : Number.MAX_SAFE_INTEGER);

        }

        return a.localeCompare(b);

    });

}

export const getColumn = (table : Tablelike, which : string) : any[] =>{

    const data = [];
    for(const entry of table.data)
        data.push(entry[which])
    return data;

}


export const Table : FC<TableProps>  = (props) =>{

    const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
    const [hiddenRows, setHiddenRows] = useState<number[]>([]);
    const [sortBy, setSortBy] = useState<{[key : string]  : number}>(props.defaultSortBy||{});

    const columns = getColumns(props.table);
    const sortedData = orderData(props.table, sortBy);


    return (
        <table
        className={[...!props.overrideClasses ? TABEL_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TABEL_STYLE : {}, ...props.style}}>
            <thead>
                <tr style={{ background: "inherit", opacity : .5}}>
                    <th></th>
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

                        if(props.table.hiddenHeads?.includes(col))
                            return <th key={generate()} scope="col">&emsp;&emsp;</th>
                            
                        return (<th key={generate()} scope="col">
                            <div className="flex p-4 items-center content-center font-medium text-gray-900 text-left">
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
                {sortedData.map((datum, i)=>{
                    return (
                        <tr key={generate()} className="bg-black-100 odd:bg-black-300 cursor-pointer gcr">
                            <td style={{
                                textAlign : "center"
                            }}>{i + 1}.</td>
                            {columns.map((col, i)=>{
                                return <td key={generate()} style={{
                                    textAlign : "center"
                                }}>
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