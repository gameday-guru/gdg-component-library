import React, {FC, ReactElement, useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Matchup as MatchupPage } from '../pages/model/ncaab/matchup/Matchup';
import { ontology } from '../util';
import { 
    getGamesInNextMonthTable,
    getGamesInNextWeekTable,
    getTeams,
    getTeamsTable
} from '../util/firebase';
import { MockProjection } from '../util/ontology';
import { getEfficiencyTable, getProjectionTable, getRadarTable } from '../util/rpc';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from "firebase/auth";
  import { useAuthState } from 'react-firebase-hooks/auth';
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

export const MATCHUP_CLASSNAMES : string[] = [ ];
export const MATCHUP_STYLE : React.CSSProperties = {
};

export type MatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Matchup : FC<MatchupProps>  = (props) =>{

    const now = new Date();
    const {id} = useParams();
    const navigate = useNavigate();
    const monthAgo = new Date(now);
    monthAgo.setMonth(monthAgo.getMonth() - 1);

    const [user, loading, error] = useAuthState(auth);

    const [games, setGames] = useState<{[key : string] : ontology.GameByDatelike}>({});
    useEffect(()=>{

        getGamesInNextMonthTable(monthAgo)
        .then((monthGames)=>{
            getGamesInNextWeekTable(now)
            .then((weekGames)=>{
                setGames({
                    ...monthGames,
                    ...weekGames
                })
            })
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

    const [radarTable, setRadarTable] = useState<ontology.RadarTablelike>(
        {}
    );
    useEffect(()=>{

        getRadarTable()
        .then((data)=>{
            setRadarTable(data);
        });

    }, []);

    const game = id ? games[id] : undefined;
    const _home = game ? teams[game.HomeTeamID.toString()] : undefined;
    const _away = game ? teams[game.AwayTeamID.toString()] : undefined;

    let sumOe = 0;
    let sumDe = 0;
    let sumPower = 0;
    let count = 0;
    for(const team of Object.values(teams)){
        const eff = efficiency[team.TeamID.toString()];
        if(!eff) continue;
        ++count;
        sumOe += eff.oe;
        sumDe += eff.de;
        sumPower += (.56 * eff.oe) - (.44 * eff.de)
    }

    const _leagueAverages : ontology.LeagueAverageslike = {
        offensiveEfficiency : sumOe/count,
        defensiveEfficiency : sumDe/count,
        powerRating : sumPower/count
    }

    const homeRadarEntry = _home ? radarTable[_home?.TeamID.toString()] : undefined;
    let _homePointDistribution : ontology.PointDistributionlike | undefined = undefined;
    if(homeRadarEntry) _homePointDistribution = {
        offense : {
            freeThrow : homeRadarEntry.offense.FreeThrowsMade,
            twoPoint : homeRadarEntry.offense.TwoPointersMade * 2,
            threePoint : homeRadarEntry.offense.ThreePointersMade * 3
        },
        defense : {
            freeThrow : homeRadarEntry.defense.FreeThrowsMade,
            twoPoint : homeRadarEntry.defense.TwoPointersMade * 2,
            threePoint : homeRadarEntry.defense.ThreePointersMade * 3
        }
    }

    const awayRadarEntry = _away ? radarTable[_away.TeamID.toString()] : undefined;
    let _awayPointDistribution : ontology.PointDistributionlike | undefined = undefined;
    if(awayRadarEntry) _awayPointDistribution = {
        offense : {
            freeThrow : awayRadarEntry.offense.FreeThrowsMade,
            twoPoint : awayRadarEntry.offense.TwoPointersMade * 2,
            threePoint : awayRadarEntry.offense.ThreePointersMade * 3
        },
        defense : {
            freeThrow : awayRadarEntry.defense.FreeThrowsMade,
            twoPoint : awayRadarEntry.defense.TwoPointersMade * 2,
            threePoint : awayRadarEntry.defense.ThreePointersMade * 3
        }
    }


    const __projectedGames : ontology.ProjectedGamelike[] = [];
    for(const game of Object.values(games))
        if(
            efficiency[game.HomeTeamID.toString()] 
            && efficiency[game.AwayTeamID.toString()]
            && new Date(game.DateTimeUTC||0).getTime() > monthAgo.getTime()
        )
            __projectedGames.push({
            game,
            gameProjection : projectionTable[game.GameID]||MockProjection,
            home : teams[game.HomeTeamID.toString()],
            away : teams[game.AwayTeamID.toString()]
        });
    
    const _projectedGames = __projectedGames.sort((gameA, gameB)=>{
        return new Date(gameB.game.DateTimeUTC||0).getTime()
        - new Date(gameA.game.DateTimeUTC||0).getTime()
    });

    const _homeGameProjections : ontology.ProjectedGamelike[] = [];
    const _awayGameProjections : ontology.ProjectedGamelike[] = [];
    let _projectedGame : ontology.ProjectedGamelike | undefined = undefined;
    for(const projectedGame of _projectedGames){

        if(projectedGame.game.GameID.toString()===id) 
            _projectedGame = projectedGame;

        if(
            game && 
            ( 
                projectedGame.game.HomeTeamID === game.HomeTeamID
                || projectedGame.game.AwayTeamID === game.HomeTeamID
            )
        ) _homeGameProjections.push(projectedGame);

        if(
            game && 
            ( 
                projectedGame.game.HomeTeamID === game.AwayTeamID
                || projectedGame.game.AwayTeamID === game.AwayTeamID
            )
        ) _awayGameProjections.push(projectedGame);

    }

    const _homeEff = _home ? efficiency[_home.TeamID.toString()] : undefined;
    const _awayEff = _away ? efficiency[_away.TeamID.toString()] : undefined;

    if(!user && !loading) navigate("/");

    const handleTeamClick = async (teamId : string)=>{
        navigate(`/team/${teamId}`)
    };

    const handleMatchupClick = async (gameId : string)=>{
        navigate(`/matchup/${gameId}`)
    };

    return (
        <MatchupPage onWhich={async (which)=>{
            navigate("/" + which);
        }}
        onMatchupClick={handleMatchupClick}
        onTeamClick={handleTeamClick}
        game={game}
        leagueAverages={_leagueAverages}
        gameProjection={_projectedGame?.gameProjection}
        home={_home}
        homeDistro={_homePointDistribution}
        homeEfficiency={_homeEff}
        away={_away}
        awayDistro={_awayPointDistribution}
        awayEfficiency={_awayEff}
        homeGameProjections={_homeGameProjections}
        awayGameProjections={_awayGameProjections}/>
    )
};