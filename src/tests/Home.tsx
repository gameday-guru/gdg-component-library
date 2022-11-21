import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { Home as HomePage } from "../pages";
import { ontology } from '../util';
import { 
    getGamesInNextWeekTable,
    getTeams,
    getTeamsTable
} from '../util/firebase';
import { MockHomeEff, MockProjection } from '../util/ontology';

export const HOME_CLASSNAMES : string[] = [ ];
export const HOME_STYLE : React.CSSProperties = {
};

export type HomeProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Home : FC<HomeProps>  = (props) =>{

    const [games, setGames] = useState<{[key : string] : ontology.GameByDatelike}>({});
    useEffect(()=>{

        getGamesInNextWeekTable(new Date())
        .then((data)=>{
            setGames(data);
        })
        .catch((err)=>{
            // TODO: tie into error reporting
            console.log(err);
        });

    }, []);

    const [teams, setTeams] = useState<{
        [key : string] : ontology.Teamlike
    }>({});
    useEffect(()=>{

        getTeamsTable()
        .then((data)=>{
            setTeams(data);
        })
        .catch(()=>{

        })

    }, []);

    const [efficiency, setEfficiency] = useState<{
        [key : string] : ontology.EfficiencyEntrylike
    }>({});
    useEffect(()=>{

        getTeamsTable()
        .then((data)=>{
            setTeams(data);
        })
        .catch(()=>{

        })

    }, [])


    const _top25Teams = 
    Object.values(teams)
    .filter(team=>(team.ApRank||Number.MAX_SAFE_INTEGER) < 26)
    .sort((teamA, teamB)=>(teamA.ApRank||Number.MIN_SAFE_INTEGER)-(teamB.ApRank||Number.MIN_SAFE_INTEGER));
    const _top25RankedTeams : ontology.RankTrendTeamlike[] = [];
    for(const team of _top25Teams)
        _top25RankedTeams.push({
            team,
            rank : team.ApRank||25,
            trend : true,
            efficiency : MockHomeEff
        })

    const _top25TeamIds =
    new Set(_top25Teams.map((team)=>team.TeamID));

    const _top25Games =
    Object.values(games)
    .filter(game=>_top25TeamIds.has(game.AwayTeamID)||_top25TeamIds.has(game.HomeTeamID));

    const _top25ProjectedGames : ontology.ProjectedGamelike[] = [];
    for(const game of _top25Games)
        _top25ProjectedGames.push({
            game,
            gameProjection : MockProjection,
            home : teams[game.HomeTeamID],
            away : teams[game.AwayTeamID]
        })

    const _gameOfTheDay =
    _top25ProjectedGames.sort((a, b)=>{
        return (
            a.gameProjection.home_team_score
            + a.gameProjection.away_team_score
        ) - (
            b.gameProjection.home_team_score
            + b.gameProjection.away_team_score
        )
    })[0];

    return (
        <HomePage
            top25Teams={_top25RankedTeams}
            top25Games={_top25ProjectedGames}
            gameOfTheDay={_gameOfTheDay}/>
    )
};