import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { MensNcaabTeam as TeamPage } from "../pages/model";
import { ontology } from '../util';
import { 
    getGamesInNextWeekTable,
    getTeams,
    getTeamsTable
} from '../util/firebase';
import { MockProjection } from '../util/ontology';
import { getEfficiencyTable, getProjectionTable } from '../util/rpc';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from "firebase/auth";
  import { useNavigate } from 'react-router-dom';
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

export const HOME_CLASSNAMES : string[] = [ ];
export const HOME_STYLE : React.CSSProperties = {
};

export type TeamProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Team : FC<TeamProps>  = (props) =>{

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


    const _apTop25Teams = 
    Object.values(teams)
    .filter(team=>(team.ApRank||Number.MAX_SAFE_INTEGER) < 26)
    .sort((teamA, teamB)=>(teamA.ApRank||Number.MIN_SAFE_INTEGER)-(teamB.ApRank||Number.MIN_SAFE_INTEGER));
    const _apTop25RankedTeams : ontology.RankTrendTeamlike[] = [];
    for(const team of _apTop25Teams)
        _apTop25RankedTeams.push({
            team,
            rank : team.ApRank||25,
            trend : true,
            efficiency : efficiency[team.TeamID]
        })

    const _top25TeamIds =
    new Set(_apTop25Teams.map((team)=>team.TeamID));

    const _gdgTop25Teams = 
    Object.values(teams)
    .sort((teamA, teamB)=>{ 

        return (
            ((.56 * efficiency[teamB.TeamID]?.oe||0) - (.44 * efficiency[teamB.TeamID]?.de||0)) -
           ((.56 * efficiency[teamA.TeamID]?.oe||0) - (.44 * efficiency[teamA.TeamID]?.de||0)) 
        )

    })
    .filter((team, i)=>(i < 25))
    const _gdgTop25RankedTeams : ontology.RankTrendTeamlike[] = _gdgTop25Teams
    .map((team, i)=>{
        return (
            {
                team,
                rank : i + 1,
                trend : true,
                efficiency : efficiency[team.TeamID]
            }
        )
    });

    const _top25Games =
    Object.values(games)
    .filter(game=>_top25TeamIds.has(game.AwayTeamID)||_top25TeamIds.has(game.HomeTeamID));

    const _top25ProjectedGames : ontology.ProjectedGamelike[] = [];
    for(const game of _top25Games)
        _top25ProjectedGames.push({
            game,
            gameProjection : projectionTable[game.GameID]||MockProjection,
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

    const _topDefensiveTeams = Object.values(efficiency)
    .sort((a, b)=>b.de - a.de)
    .map((val)=>{
        return teams[val.team_id]
    })
    .filter((val, i)=>i < 25);

    const _topOffensiveTeams = Object.values(efficiency)
    .sort((a, b)=>b.oe - a.oe)
    .map((val)=>{
        return teams[val.team_id]
    })
    .filter((val, i)=>i < 25);

    if(!user && !loading) navigate("/");

    return (
        <TeamPage
        onWhich={async (which)=>{
            navigate("/" + which);
        }}
        topDefensiveTeams={_topDefensiveTeams}
        topOffensiveTeams={_topOffensiveTeams}
        tableEntries={Object.values(efficiency)}
        teams={teams}/>
    )
};