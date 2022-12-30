import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { Home as HomePage } from "../pages";
import { ontology } from '../util';
import { 
    getGamesInNextWeekTable,
    getTeams,
    getTeamsTable
} from '../util/firebase';
import { MockHomeEff, MockProjection } from '../util/ontology';
import { getEfficiencyTable, getProjectionTable, getTrendTable } from '../util/rpc';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DateComparison } from '../util/date';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtJnJmtM8BEe3Jzgy9pT_gPIrCDpNe_Rw",
  authDomain: "gdg-proto-f7542.firebaseapp.com",
  databaseURL: "https://gdg-proto-f7542-default-rtdb.firebaseio.com",
  projectId: "gdg-proto-f7542",
  storageBucket: "gdg-proto-f7542.appspot.com",
  messagingSenderId: "822423637214",
  appId: "1:822423637214:web:5fa27bdc21b3f2e251c64f",
  measurementId: "G-90P3M7PT46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


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

    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const [games, setGames] = useState<{[key : string] : ontology.GameByDatelike}>({});
    useEffect(()=>{

        getGamesInNextWeekTable(new Date())
        .then((data)=>{
            setGames(data);
        });

    }, []);

    const [teams, setTeams] = useState<{
        [key : string] : ontology.Teamlike
    }>({});
    useEffect(()=>{

        getTeamsTable()
        .then((data)=>{
            setTeams(data);
        });

    }, []);

    const [efficiency, setEfficiency] = useState<{
        [key : string] : ontology.EfficiencyEntrylike
    }>({});
    useEffect(()=>{

        getEfficiencyTable()
        .then((data)=>{
            setEfficiency(data);
        });

    }, []);

    const [projectionTable, setProjectionTable] = useState<ontology.ProjectionTablelike>(
        {}
    );
    useEffect(()=>{

        getProjectionTable()
        .then((data)=>{
            setProjectionTable(data);
        });

    }, []);

    const [trendTable, setTrendTable] = useState<ontology.TrendTablelike>(
        {}
    );
    useEffect(()=>{

        getTrendTable()
        .then((data)=>{
            setTrendTable(data);
        });

    }, []);


    const _apTop25Teams = 
    Object.values(teams)
    .filter(team=>(team.ApRank||Number.MAX_SAFE_INTEGER) < 26)
    .sort((teamA, teamB)=>(teamA.ApRank||Number.MIN_SAFE_INTEGER)-(teamB.ApRank||Number.MIN_SAFE_INTEGER));
    const _apTop25RankedTeams : ontology.RankTrendTeamlike[] = [];
    for(const team of _apTop25Teams){

        _apTop25RankedTeams.push({
            team,
            rank : team.ApRank||25,
            trend : ontology.getTrend(
                trendTable[team.TeamID]?.ap.current_rank,
                trendTable[team.TeamID]?.ap.last_rank
            ),
            efficiency : efficiency[team.TeamID]
        });

    }

    const _top25TeamIds =
    new Set(_apTop25Teams.map((team)=>team.TeamID));

    const _gdgTop25Teams = 
    Object.values(teams)
    .sort((teamA, teamB)=>{ 

        const trendTableEntryA = trendTable[teamA.TeamID.toString()];
        const trendTableEntryB = trendTable[teamB.TeamID.toString()];
        return (trendTableEntryA?.gdg_power_rating.current_rank||Number.MAX_SAFE_INTEGER)
        - (trendTableEntryB?.gdg_power_rating.current_rank||Number.MAX_SAFE_INTEGER);


    })
    .filter((team, i)=>(i < 25))
    const _gdgTop25RankedTeams : ontology.RankTrendTeamlike[] = _gdgTop25Teams
    .map((team, i)=>{
        const trendTableEntry : ontology.TrendEntrylike = trendTable[team.TeamID.toString()];
        return (
            {
                team,
                rank : i + 1,
                trend : ontology.getTrend(
                    trendTableEntry?.gdg_power_rating.current_rank,
                    trendTableEntry?.gdg_power_rating.last_rank,
                ),
                efficiency : efficiency[team.TeamID]
            }
        )
    });

    const _top25Games =
    Object.values(games)
    .filter(game=>_top25TeamIds.has(game.AwayTeamID)||_top25TeamIds.has(game.HomeTeamID))
    .sort((a, b)=>{
        return new Date(a.DateTimeUTC||0).getTime() 
        - new Date(b.DateTimeUTC||0).getTime()
    });

    const _top25ProjectedGames : ontology.ProjectedGamelike[] = [];
    for(const game of _top25Games)
        _top25ProjectedGames.push({
            game,
            gameProjection : projectionTable[game.GameID]||MockProjection,
            home : teams[game.HomeTeamID],
            away : teams[game.AwayTeamID]
        })

    const _gameOfTheDay =
    _top25ProjectedGames
    .filter(game=>{
        return DateComparison.sameDate(
            new Date(game.game.DateTimeUTC||0),
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

    if(!user && !loading) navigate("/");

    const handleTeamClick = async (teamId : string)=>{
        navigate(`/team/${teamId}`)
    };

    const handleMatchupClick = async (gameId : string)=>{
        navigate(`/matchup/${gameId}`)
    };

    return (
        <HomePage
        onWhich={async (which)=>{
            navigate("/" + which);
        }}
        onTeamClick={handleTeamClick}
        onMatchupClick={handleMatchupClick}
        gdgTop25Teams={_gdgTop25RankedTeams}
        apTop25Teams={_apTop25RankedTeams}
        top25Games={_top25ProjectedGames}
        gameOfTheDay={_gameOfTheDay}/>
    )
};