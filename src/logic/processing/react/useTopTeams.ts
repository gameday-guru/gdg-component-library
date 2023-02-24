import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";
import { useGames } from "./useGames";
import { useTeams } from "./useTeams";
import { useProjections } from "./useProjections";
import { useEfficiency } from "./useEfficiency";
import { useTrends } from "./useTrendTable";

export const useTopTeams = () : {

    getApTop25Teams : Processorlike['getApTop25Teams'];
    getGdgTop25Teams : Processorlike['getGdgTop25Teams'];
    getGdgTopXTeams : Processorlike['getGdgTopXTeams'];

    getTopDefensiveTeams : Processorlike['getTopDefensiveTeams'];
    getTopOffensiveTeams : Processorlike['getTopOffensiveTeams'];


}=>{

    const {
        getGames,
        getGamesInNextWeek 
    } = useGames();

    const {
        getProjectionTable
    } = useProjections();

    const {
        getTeamsTable,
        getTeams
    } = useTeams();

    const {
        getEfficiencyTable
    } = useEfficiency();

    const {
        getTrendTable
    } = useTrends();

    const getApTop25Teams = () : ontology.RankTrendTeamlike[]|undefined =>{

        //const _games = getGames(date);
        const _teams = getTeams();
        const _trendTable = getTrendTable();
        const _efficiency = getEfficiencyTable();

        if(!_teams || !_trendTable || !_efficiency) return undefined;
        
        const apTop25Teams = Object.values(_teams)
        .filter(team=>(team.ApRank||Number.MAX_SAFE_INTEGER) < 26)
        .sort((teamA, teamB)=>(teamA.ApRank||Number.MIN_SAFE_INTEGER)-(teamB.ApRank||Number.MIN_SAFE_INTEGER));
        
        const apTop25RankedTeams : ontology.RankTrendTeamlike[] = [];
        for(const team of apTop25Teams){
    
            apTop25RankedTeams.push({
                team,
                rank : team.ApRank||25,
                trend : ontology.getTrend(
                    _trendTable[team.TeamID]?.ap.current_rank,
                    _trendTable[team.TeamID]?.ap.last_rank
                ),
                efficiency : _efficiency[team.TeamID]
            });
    
        }   

     
        return apTop25RankedTeams;

    };


    const getGdgTop25Teams = () : ontology.RankTrendTeamlike[]|undefined =>{

        const _teams = getTeams();
        const _trendTable = getTrendTable();
        const _efficiency = getEfficiencyTable();

        if(!_teams || !_trendTable || !_efficiency) return undefined;

        const gdgTop25Teams = Object.values(_teams)
        .sort((teamA, teamB)=>{ 

            const trendTableEntryA = _trendTable[teamA.TeamID.toString()];
            const trendTableEntryB = _trendTable[teamB.TeamID.toString()];
            
            return (trendTableEntryA?.gdg_power_rating.current_rank !== undefined ?
                trendTableEntryA.gdg_power_rating.current_rank + 1 
                : Number.MAX_SAFE_INTEGER)
            - (trendTableEntryB?.gdg_power_rating.current_rank !== undefined ?
                trendTableEntryB.gdg_power_rating.current_rank + 1 
                : Number.MAX_SAFE_INTEGER);


        })
        .filter((team, i)=>(i < 25));

        const gdgTop25RankedTeams : ontology.RankTrendTeamlike[] = gdgTop25Teams
        .map((team, i)=>{
            const trendTableEntry : ontology.TrendEntrylike = _trendTable[team.TeamID.toString()];
            return (
                {
                    team,
                    rank : i + 1,
                    trend : ontology.getTrend(
                        trendTableEntry?.gdg_power_rating.current_rank,
                        trendTableEntry?.gdg_power_rating.last_rank,
                    ),
                    efficiency : _efficiency[team.TeamID]
                }
            )
        })

        return gdgTop25RankedTeams;

    };

    const getGdgTopXTeams = (x : number) : ontology.RankTrendTeamlike[]|undefined =>{

        const _teams = getTeams();
        const _trendTable = getTrendTable();
        const _efficiency = getEfficiencyTable();

        if(!_teams || !_trendTable || !_efficiency) return undefined;

        const gdgTop25Teams = Object.values(_teams)
        .sort((teamA, teamB)=>{ 

            const trendTableEntryA = _trendTable[teamA.TeamID.toString()];
            const trendTableEntryB = _trendTable[teamB.TeamID.toString()];
            
            return (trendTableEntryA?.gdg_power_rating.current_rank !== undefined ?
                trendTableEntryA.gdg_power_rating.current_rank + 1 
                : Number.MAX_SAFE_INTEGER)
            - (trendTableEntryB?.gdg_power_rating.current_rank !== undefined ?
                trendTableEntryB.gdg_power_rating.current_rank + 1 
                : Number.MAX_SAFE_INTEGER);


        })
        .filter((team, i)=>(i < x));

        const gdgTop25RankedTeams : ontology.RankTrendTeamlike[] = gdgTop25Teams
        .map((team, i)=>{
            const trendTableEntry : ontology.TrendEntrylike = _trendTable[team.TeamID.toString()];
            return (
                {
                    team,
                    rank : i + 1,
                    trend : ontology.getTrend(
                        trendTableEntry?.gdg_power_rating.current_rank,
                        trendTableEntry?.gdg_power_rating.last_rank,
                    ),
                    efficiency : _efficiency[team.TeamID]
                }
            )
        })

        return gdgTop25RankedTeams;

    };


    const getTopDefensiveTeams = ()=>{

        const efficiency = getEfficiencyTable();
        const teams = getTeamsTable();

        if(!efficiency || !teams) return undefined;

        return Object.values(efficiency)
        .sort((a, b)=>a.de - b.de)
        .map((val)=>{
            return teams[val.team_id.toString()]
        })
        .filter((team)=>team)
        .filter((val, i)=>i < 25);

    }

    const getTopOffensiveTeams = ()=>{

        const efficiency = getEfficiencyTable();
        const teams = getTeamsTable();

        if(!efficiency || !teams) return undefined;

        return Object.values(efficiency)
        .sort((a, b)=>b.oe - a.oe)
        .map((val)=>{
            return teams[val.team_id]
        })
        .filter((team)=>team)
        .filter((val, i)=>i < 25);

    }


    return {
        getApTop25Teams,
        getGdgTop25Teams,
        getGdgTopXTeams,

        getTopOffensiveTeams,
        getTopDefensiveTeams
    }

}