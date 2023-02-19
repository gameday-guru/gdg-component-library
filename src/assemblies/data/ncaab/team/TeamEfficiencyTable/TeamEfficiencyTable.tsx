import React, {FC, ReactElement, useState} from 'react';
import { LowMedHigh } from '../../../../../components/output/containers/field/LowMedHigh';
import { Table } from '../../../../../components/output/indicators/table/Table';
import { getColumns, getColumn } from '../../../../../components/output/indicators/table/Table';
import { MockHome, Teamlike } from '../../../../../util/ontology';
import { TopTeamEntry } from '../../league/TopTeamEntry';
import { std, mean } from '../../../../../util/stats';
import { Wrapper } from '../../../../../components';
import { FilterSet } from '../../../../../components/output/containers/filter';

export const TEAM_EFFICIENCY_TABLE_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const TEAM_EFFICIENCY_TABLE_INNER_STYLE : React.CSSProperties = {
};

export const TEAM_EFFICIENCY_TABLE_CONTAINER_CLASSNAMES : string[] = [
    "grid",
    "gap-2",
    "p-4",
    "rounded-lg"
 ];
export const TEAM_EFFICIENCY_TABLE_CONTAINER_STYLE : React.CSSProperties = {
};

export interface TeamEfficiencyTableEntrylike {
    "Team Name" : Teamlike;
    "Conference" : string;
    "Record" ? : [number, number, number];
    "Power Rating" : number;
    "Tempo" : number;
    "Offensive Efficiency" : number;
    "Defensive Efficiency" : number;
    /** Whether the entry is liked. Need to include better handling in the table measure. */
    "Liked" : boolean; 
}


/**
 * 
 * @param mean 
 * @param stdev 
 * @returns 
 */
export const makeStdTableEntry = (arr : number[])=>(rating : number) : React.ReactNode =>{
    const z = (rating - mean(arr))/std(arr);
    const lowMedHigh = z < -1 ? "low" : z > 1 ? "high" : "med";

    return <LowMedHigh style={{
        display : "grid",
        height : "100%",
        alignContent : "center",
        alignItems : "center"
    }} which={lowMedHigh}>{rating.toFixed(1)}</LowMedHigh>

}

/**
 * 
 * @param mean 
 * @param stdev 
 * @returns 
 */
export const makeReverseStdTableEntry = (arr : number[])=>(rating : number) : React.ReactNode =>{
    const z = (rating - mean(arr))/std(arr);
    const lowMedHigh = z < -1 ? "high" : z > 1 ? "low" : "med";

    return <LowMedHigh style={{
        display : "grid",
        height : "100%",
        alignContent : "center",
        alignItems : "center"
    }} which={lowMedHigh}>{rating.toFixed(1)}</LowMedHigh>

}

/**
 * 
 * @param mean 
 * @param stdev 
 * @returns 
 */
export const toPrecisionEntry = (precision : number)=>(rating : number) : React.ReactNode =>{

    return <>{rating.toFixed(1)}</>

}



export type TeamEfficiencyTableProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    tableEntries ? : TeamEfficiencyTableEntrylike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const TeamEntry = (onTeamClick ? : (teamId : string)=>Promise<void>)=>(team : Teamlike) : React.ReactNode=>{

    return (
        <TopTeamEntry style={{ background : "inherit"}} team={team} onTeamClick={onTeamClick}/>
    )

}

export const RecordEntry = (record ? : [number, number, number]) : React.ReactNode=>{

    if(!record) return (
        <div>
            -
        </div>
    )

    if(record[1] === 0) return (
        <div>
            {record[0]} - {record[2]}
        </div>
    )

    return (
        <div>
            {record[0]} - {record[1]} - {record[2]}
        </div>
    )

}

export const compareRecord = (a ? : [number, number, number], b ? : [number, number, number])=>{

    return (a ? a[0] : Number.MAX_SAFE_INTEGER) - (b ? b[0] : Number.MIN_SAFE_INTEGER)

}

export const compareTeam = (a : Teamlike, b : Teamlike)=>{
    return a.School.localeCompare(b.School);
}

export const MockTableEntries : TeamEfficiencyTableEntrylike[] = [
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 27.5,
        "Record" : [8,0,0],
        "Offensive Efficiency" : 74.1,
        "Defensive Efficiency" : 65.1,
        "Tempo" : 35.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 24.5,
        "Record" : [2, 2, 2],
        "Offensive Efficiency" : 70.1,
        "Defensive Efficiency" : 69.1,
        "Tempo" : 23.2,
        "Liked" : false
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 37.5,
        "Record" : [8, 1, 1],
        "Offensive Efficiency" : 78.1,
        "Defensive Efficiency" : 75.1,
        "Tempo" : 40.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 31.5,
        "Record" : [4, 2, 4],
        "Offensive Efficiency" : 65.1,
        "Defensive Efficiency" : 65.1,
        "Tempo" : 28.2,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
    { 
        "Team Name" : MockHome, 
        "Conference" : "Mountain West",
        "Power Rating" : 23.5,
        "Record" : [2, 3, 2],
        "Offensive Efficiency" : 68.1,
        "Defensive Efficiency" : 72.1,
        "Tempo" : 27.2 ,
        "Liked" : true
    },
]

export const TeamEfficiencyTable : FC<TeamEfficiencyTableProps>  = (props) =>{

    // provide mock default for table entries.
    const tableEntries = props.tableEntries||MockTableEntries;
    // these are the filtered table entries
    const[_tableEntries, setTableEntries] = useState(tableEntries);

    const toReact : {[key : string] : (value : any)=>React.ReactNode} = {};
    toReact["Team Name"] = TeamEntry(props.onTeamClick);
    toReact["Record"] = RecordEntry

    // refactor this to be provided from table component up
    const powerRatings : number[] = getColumn({
        data : _tableEntries,
        toReact : {},
        compare : {}
    }, "Power Rating");
    toReact["Power Rating"] = makeStdTableEntry(powerRatings);

    // refactor this to be provided from table component up
    const tempos : number[] = getColumn({
        data : _tableEntries,
        toReact : {},
        compare : {}
    }, "Tempo");
    toReact["Tempo"] =  toPrecisionEntry(1);

    // refactor this to be provided from table component up
    const oes : number[] = getColumn({
        data : _tableEntries,
        toReact : {},
        compare : {}
    }, "Offensive Efficiency");
    toReact["Offensive Efficiency"] = makeStdTableEntry(oes);

    // refactor this to be provided from table component up
    const des : number[] = getColumn({
        data : _tableEntries,
        toReact : {},
        compare : {}
    }, "Defensive Efficiency");
    toReact["Defensive Efficiency"] = makeReverseStdTableEntry(des);

    return (
        <Wrapper
            viusage='wrap'
            classNames={[...!props.overrideClasses ? TEAM_EFFICIENCY_TABLE_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? TEAM_EFFICIENCY_TABLE_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? TEAM_EFFICIENCY_TABLE_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? TEAM_EFFICIENCY_TABLE_INNER_STYLE : {}, ...props.style}}>
               <div>
                    <FilterSet 
                        table={tableEntries}
                        setTable={async (table)=>{
                            setTableEntries(table);
                        }}
                        fieldCase={{
                            "Team Name" : ["TEXT"],
                            "Conference" : ["TEXT"],
                            "Record" : ["TEXT"],
                            "Power Rating" : ["NUMERIC"],
                            "Offensive Efficiency" : ["NUMERIC"],
                            "Defensive Efficiency" : ["NUMERIC"]
                        }}
                        Title={<h2 className='text-lg'>Efficiency</h2>}/>
               </div>
               <hr/>
               <div style={{
                width : "100%",
                overflowX : "scroll"
               }}>
                    <Table 
                    defaultSortBy={{
                        "Power Rating" : -1
                    }}
                    style={{
                        width : "100%",
                        overflowX : "scroll"
                    }} table={{
                            hiddenHeads : [
                                'Liked'
                            ],
                            head : [
                                "Team Name",
                                "Conference",
                                "Record",
                                "Power Rating",
                                "Offensive Efficiency",
                                "Defensive Efficiency"
                            ],
                            data : _tableEntries,
                            toReact,
                            compare : {
                                "Record" : compareRecord,
                                "Team Name" : compareTeam
                            } // no need to modifiy the comparison
                        }}/>
               </div>
            </div>
        </Wrapper>
    )
};