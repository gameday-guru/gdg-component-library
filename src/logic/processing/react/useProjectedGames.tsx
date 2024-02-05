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

export const useProjectedGames = () : {

    getProjectedGamesTable : Processorlike['getProjectedGamesTable'],
    getProjectedGamesInNextWeekTable : Processorlike['getProjectedGamesInNextWeekTable'],
    getProjectedGamesInNextMonthTable : Processorlike['getProjectedGamesInNextMonthTable']
    getProjectedGamesTableBetween : Processorlike['getProjectedGamesTableBetween'],
    getProjectedGamesTableBetweenForTeam : Processorlike['getProjectedGamesTableBetweenForTeam']

}=>{

    const {
        getGames,
        getGamesTableBetween,
        getGamesInNextWeek,
        getGamesInNextMonth
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

    const getProjectedGamesTable = (date : Date) : {[key : string] : ontology.ProjectedGamelike} | undefined=>{

        const _games = getGames(date);
        const _teams = getTeamsTable();
        const _projectionTable = getProjectionTable();

        if( !_games || !_teams || !_projectionTable ) return undefined;

        const top25ProjectedGames : {[key : string] : ontology.ProjectedGamelike} = {};
        for(const game of _games){

            top25ProjectedGames[game.GameID.toString()] = {
                game,
                gameProjection : _projectionTable[game.GameID.toString()]||ontology.MockProjection,
                home : _teams[game.HomeTeamID.toString()],
                away : _teams[game.AwayTeamID.toString()]
            };
        }


        return top25ProjectedGames;

    };

    const getProjectedGamesTableBetween = (dateA : Date, dateB : Date) : {[key : string] : ontology.ProjectedGamelike} | undefined=>{

        const __games =  getGamesTableBetween(dateA, dateB);
        const _games = __games && Object.values(__games);
        const _teams = getTeamsTable();
        const _projectionTable = getProjectionTable();

        if( !_games || !_teams || !_projectionTable ) return undefined;

        const top25ProjectedGames : {[key : string] : ontology.ProjectedGamelike} = {};
        for(const game of _games)
            top25ProjectedGames[game.GameID.toString()] = {
                game,
                gameProjection : _projectionTable[game.GameID.toString()]||ontology.MockProjection,
                home : _teams[game.HomeTeamID.toString()],
                away : _teams[game.AwayTeamID.toString()]
            };

        return top25ProjectedGames;

    };

    const getProjectedGamesTableBetweenForTeam = (dateA : Date, dateB : Date, team : ontology.Teamlike) : {[key : string] : ontology.ProjectedGamelike} | undefined=>{

        const __games =  getGamesTableBetween(dateA, dateB);
        const _games = __games && Object.values(__games);
        const _teams = getTeamsTable();
        const _projectionTable = getProjectionTable();

        if( !_games || !_teams || !_projectionTable ) return undefined;

        const top25ProjectedGames : {[key : string] : ontology.ProjectedGamelike} = {};
        for(const game of _games)
            if(
                game.HomeTeamID === team.TeamID
                || game.AwayTeamID === team.TeamID
            ) top25ProjectedGames[game.GameID.toString()] = {
                game,
                gameProjection : _projectionTable[game.GameID.toString()]||ontology.MockProjection,
                home : _teams[game.HomeTeamID.toString()],
                away : _teams[game.AwayTeamID.toString()]
            };

        return top25ProjectedGames;

    };

    const getProjectedGamesInNextWeekTable = (date : Date) : {[key : string] : ontology.ProjectedGamelike} | undefined=>{

        const _games = getGamesInNextWeek(date);
        const _teams = getTeamsTable();
        const _projectionTable = getProjectionTable();

        if( !_games || !_teams || !_projectionTable ) return undefined;

        const top25ProjectedGames : {[key : string] : ontology.ProjectedGamelike} = {};
        for(const game of _games)
            top25ProjectedGames[game.GameID.toString()] = {
                game,
                gameProjection : _projectionTable[game.GameID.toString()]||ontology.MockProjection,
                home : _teams[game.HomeTeamID.toString()],
                away : _teams[game.AwayTeamID.toString()]
            };

        return top25ProjectedGames;

    };

    const getProjectedGamesInNextMonthTable = (date : Date) : {[key : string] : ontology.ProjectedGamelike} | undefined=>{

        const _games = getGamesInNextMonth(date);
        const _teams = getTeamsTable();
        const _projectionTable = getProjectionTable();

        if( !_games || !_teams || !_projectionTable ) return undefined;

        const top25ProjectedGames : {[key : string] : ontology.ProjectedGamelike} = {};
        for(const game of _games)
            top25ProjectedGames[game.GameID.toString()] = {
                game,
                gameProjection : _projectionTable[game.GameID.toString()]||ontology.MockProjection,
                home : _teams[game.HomeTeamID.toString()],
                away : _teams[game.AwayTeamID.toString()]
            };

        return top25ProjectedGames;

    };



    return {
        getProjectedGamesTable,
        getProjectedGamesTableBetween,
        getProjectedGamesInNextWeekTable,
        getProjectedGamesInNextMonthTable,
        getProjectedGamesTableBetweenForTeam,
    }

}