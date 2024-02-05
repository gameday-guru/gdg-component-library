import React, {FC, ReactElement} from 'react';
import { BracketByRoundlike } from '../../../../../util/rpc';
import { Table } from '../../../../../components/output/indicators/table/Table';
import { mean, std } from '../../../../../util/stats';
import { LowMedHigh } from '../../../../../components/output/containers/field/LowMedHigh';
import { ontology } from '../../../../../util';
import { SideTeam } from '../../team/SideTeam';
import { SeedMap } from '../../../../../fixtures';



export const NCAAB_TOURNAMENT_BY_ROUND_BY_REGION_CLASSNAMES : string[] = [
    "gap-4"
 ];
export const NCAAB_TOURNAMENT_BY_ROUND_BY_REGION_STYLE : React.CSSProperties = {
    display : "grid",
    gridTemplateColumns : "1fr 1fr",
    gridTemplateRows : "1fr 1fr",
    fontSize : 11
};

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
export const toPercentEntry = (precision : number)=>(rating : number) : React.ReactNode =>{

    return <>{(rating * 100).toFixed(precision)} %</>

}

export const toPercentStdEntry = (precision : number, arr : number[])=> (rating : number)=>{

    const z = (rating - mean(arr))/std(arr);
    const lowMedHigh = z < -1 ? "low" : z > 1 ? "high" : "med";

    return <LowMedHigh style={{
        display : "grid",
        height : "100%",
        alignContent : "center",
        alignItems : "center"
    }} which={lowMedHigh}>{(rating * 100).toFixed(precision)} %</LowMedHigh>

}

export type NcaabTournamentByRoundByRegionProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    bracketByRound ? : BracketByRoundlike;
    teams ? : {[key : string] : ontology.Teamlike}
};

export const NcaabTournamentByRoundByRegion : FC<NcaabTournamentByRoundByRegionProps>  = (props) =>{

    const _teams = props.teams||{};

    const _bracketByRound = props.bracketByRound||[];
    const rows :{[key : string] : any }[] = [];
    for(const [i, value] of _bracketByRound.entries())
        rows.push({
            "Team" : value["id"],
            "Seed" : SeedMap[i%16],
            "R32" : value[1],
            "R16" : value[2],
            "Elite Eight" : value[3],
            "Final Four" : value[4],
            "Finals" : value[5],
            "Chmps." : value[6]
        });

    const pkg = {
        head : [
            "Team",
            "Seed",
            "R32",
            "R16",
            "Elite Eight",
            "Final Four",
            "Finals",
        ],
        toReact : {
            "Team" : (id : string)=>{
                return <SideTeam ellipsize={6} short hideVisitorStatus team={_teams[id]}/>
            },
            "R32" : toPercentStdEntry(1, rows.map((row)=>row["R32"])),
            "R16" : toPercentStdEntry(1, rows.map((row)=>row["R16"])),
            "Elite Eight" : toPercentStdEntry(1, rows.map((row)=>row["Elite Eight"])),
            "Final Four" :  toPercentStdEntry(1, rows.map((row)=>row["Final Four"])),
            "Finals" :  toPercentStdEntry(1, rows.map((row)=>row["Finals"])),
            "Chmps." :  toPercentStdEntry(1, rows.map((row)=>row["Chmps."]))
        },
    }

    // west, east, south, midwest
    const westRows = rows.slice(0, 16);
    const west =  <Table 
    defaultSortBy={{
        "Seed" : 1
    }}
    style={{
        width : "100%",
        overflowX : "scroll"
    }} table={{
            hiddenHeads : [
                'Liked'
            ],
            ...pkg,
            compare : {},
            data : westRows
        }}/>

    const eastRows = rows.slice(16, 32);
    const east =  <Table 
    defaultSortBy={{
        "Seed" : 1
    }}
    style={{
        width : "100%",
        overflowX : "scroll"
    }} table={{
            hiddenHeads : [
                'Liked'
            ],
            ...pkg,
            compare : {},
            data : eastRows
        }}/>

    const southRows = rows.slice(32, 48);
    const south =  <Table 
    defaultSortBy={{
        "Seed" : 1
    }}
    style={{
        width : "100%",
        overflowX : "scroll"
    }} table={{
            hiddenHeads : [
                'Liked'
            ],
            ...pkg,
            compare : {},
            data : southRows
        }}/>

    const midwestRows = rows.slice(48, 64);
    const midwest =  <Table 
    defaultSortBy={{
        "Seed" : 1
    }}
    style={{
        width : "100%",
        overflowX : "scroll"
    }} table={{
            hiddenHeads : [
                'Liked'
            ],
            ...pkg,
            compare : {},
            data : midwestRows
        }}/>

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_TOURNAMENT_BY_ROUND_BY_REGION_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_TOURNAMENT_BY_ROUND_BY_REGION_STYLE : {}, ...props.style}}>
            <div>
                <h2 className='text-2xl'>South</h2>
                {south}
            </div>
            <div>
                <h2 className='text-2xl'>Midwest</h2>
                {midwest}
            </div>
            <div>
                <h2 className='text-2xl'>East</h2>
                {east}
            </div>
            <div>
                <h2 className='text-2xl'>West</h2>
                {west}
            </div>
        </div>
    )
};