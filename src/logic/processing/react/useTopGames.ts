import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";
import { useGames } from "./useGames";
import { useTeams } from "./useTeams";
import { useTopTeams } from "./useTopTeams";
import { useProjections } from "./useProjections";

export const useTopGames = () : {

    getTop25Games : Processorlike['getTop25Games'],
    getGameOfTheDay : Processorlike['getGameOfTheDay']


}=>{

    const {
        getGamesInNextWeek,
        getGames 
    } = useGames();

    const {
        getProjectionTable
    } = useProjections();

    const {
        getTeamsTable
    } = useTeams();

    const {
        getApTop25Teams
    } = useTopTeams();


    const getTop25Games = (date : Date) : ontology.ProjectedGamelike[]|undefined => {

        const _games = getGames(date);
        const _teams = getTeamsTable();
        const _top25Teams = getApTop25Teams();
        const _projectionTable = getProjectionTable();

        if(!_games || !_teams  || !_top25Teams || !_projectionTable) return undefined;
    
        const top25TeamIds = new Set<number>();
        for(const team of _top25Teams) top25TeamIds.add(team.team.TeamID);

        const top25Games = Object.values(_games)
        .filter(game=>top25TeamIds.has(game.AwayTeamID)||top25TeamIds.has(game.HomeTeamID))
        .sort((a, b)=>{
            return new Date(a.Day||0).getTime() 
            - new Date(b.Day||0).getTime()
        });

        const top25ProjectedGames : ontology.ProjectedGamelike[] = [];
        for(const game of top25Games)
            top25ProjectedGames.push({
                game,
                gameProjection : _projectionTable[game.GameID]||ontology.MockProjection,
                home : _teams[game.HomeTeamID.toString()],
                away : _teams[game.AwayTeamID.toString()]
            })

   
        return top25ProjectedGames;

    };



    const getGameOfTheDay = (date : Date) : ontology.ProjectedGamelike|undefined =>{

        const top25Games = getTop25Games(date);

        if(!top25Games) return undefined;

        return top25Games
        .filter(game=>{
            return DateComparison.sameDate(
                new Date(game.game.Day||0),
                new Date()
            )
        })
        .sort((a, b)=>{
            return (
                a.gameProjection.home_team_score
                + a.gameProjection.away_team_score
            ) - (
                b.gameProjection.home_team_score
                + b.gameProjection.away_team_score
            )
        })[0];

    };


    return {
        getTop25Games,
        getGameOfTheDay
    }

}