import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";
import { useEfficiency } from "./useEfficiency";

export const useGames = () : {

    getGames : Processorlike['getGames'],
    getGamesTable : Processorlike['getGamesTable'],
    getGamesTableBetween : Processorlike['getGamesTableBetween'],
    getGamesInNextWeek : Processorlike['getGamesInNextWeek'],
    getGamesInNextWeekTable : Processorlike['getGamesInNextWeekTable'],
    getGamesInNextMonth : Processorlike['getGamesInNextMonth'],
    getGamesInNextMonthTable : Processorlike['getGamesInNextMonthTable']

}=>{

    const {
        getEfficiencyTable
    } = useEfficiency();

    const {
        get : _getGames
    } = useMultiPowerStore(
        MainDatabase.multiListeners.gamesByDate,
        (date)=>DateComparison.dateString(date)
    );

    const getGames = (date : Date) : ontology.GameByDatelike[] | undefined =>{
        
        const efficiency = getEfficiencyTable();

        if(!efficiency) return undefined;

        const gamesOnDate = _getGames(date);

        return gamesOnDate && gamesOnDate
        .filter((game)=>{
            return efficiency[game.AwayTeamID.toString()]
            && efficiency[game.HomeTeamID.toString()];

        });
        
    }

    const getGamesTable = (date : Date) : { [key : string] : ontology.GameByDatelike } | undefined =>{

        const gamesOnDate = getGames(date);
        if(!gamesOnDate) return undefined;

        const gamesTable :  { [key : string] : ontology.GameByDatelike } = {};
        for(const game of gamesOnDate)
            gamesTable[game.GameID.toString()] = game;

        return gamesTable;
        
    }

    const getGamesTableBetween = (dateA : Date, dateB : Date) :  { [key : string] : ontology.GameByDatelike } | undefined =>{

        const _games : { [key : string] : ontology.GameByDatelike }[]  = [];
        const iter = new Date(dateA);
        while(iter < dateB){
            _games.push(getGamesTable(new Date(iter))||{});
            iter.setDate(iter.getDate() + 1)
        }
        
        return _games.reduce((agg, val)=>({
            ...agg,
            ...val
        }), {});

    }

    const getGamesInNextWeekTable = (date : Date) : { [key : string] : ontology.GameByDatelike } | undefined =>{

        const end = new Date(date);
        end.setDate(end.getDate() + 7);
        return getGamesTableBetween(date, end);

    }

    const getGamesInNextWeek = (date : Date) : ontology.GameByDatelike[] | undefined=>{

        const games = getGamesInNextWeekTable(date);
        return games && Object.values(games);

    }

    const getGamesInNextMonthTable = (date : Date) : { [key : string] : ontology.GameByDatelike } | undefined =>{

        const end = new Date(date);
        end.setMonth(end.getMonth() + 1);
        return getGamesTableBetween(date, end);
    }


    const getGamesInNextMonth = (date : Date) : ontology.GameByDatelike[] | undefined=>{

        const games = getGamesInNextMonthTable(date);
        return games && Object.values(games);

    }


    return {
        getGames,
        getGamesTable,
        getGamesTableBetween,
        getGamesInNextWeek,
        getGamesInNextWeekTable,
        getGamesInNextMonth,
        getGamesInNextMonthTable,
    }

}