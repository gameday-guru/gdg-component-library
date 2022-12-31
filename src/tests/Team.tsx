import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { MensNcaabTeams, MensNcaabTeam } from "../pages";
import { ontology } from '../util';
import { 
    getGamesInNextMonthTable,
    getGamesInNextWeekTable,
    getPlayers,
    getTeams,
    getTeamsTable
} from '../util/firebase';
import { MockProjection, PointDistributionlike } from '../util/ontology';
import { getEfficiencyTable, getProjectionTable, getRadarTable } from '../util/rpc';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from "firebase/auth";
  import { useNavigate, useParams } from 'react-router-dom';
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
    const { id } = useParams();
    const [user, loading, error] = useAuthState(auth);

    const [games, setGames] = useState<{[key : string] : ontology.GameByDatelike}>({});
    useEffect(()=>{

        getGamesInNextMonthTable(new Date())
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

    const [radarTable, setRadarTable] = useState<ontology.RadarTablelike>(
        {}
    );
    useEffect(()=>{

        getRadarTable()
        .then((data)=>{
            setRadarTable(data);
        });

    }, []);

    const [players, setPlayers] = useState<ontology.Playerlike[]>([]);
    useEffect(()=>{

        if(id && teams[id]){
            getPlayers(teams[id])
            .then((data)=>{
                setPlayers(data);
            })
        }

    }, [id && teams[id]])

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

    const _teamGames : ontology.ProjectedGamelike[] = [];
    for(const game of Object.values(games))
        if(
            game.HomeTeamID.toString() === id
            || game.AwayTeamID.toString() === id
        ) _teamGames.push({
            game,
            gameProjection : projectionTable[game.GameID]||MockProjection,
            home : teams[game.HomeTeamID.toString()],
            away : teams[game.AwayTeamID.toString()]
        })

    const radarEntry = id ? radarTable[id] : undefined;
    let _pointDistribution : PointDistributionlike | undefined = undefined;
    if(radarEntry) _pointDistribution = {
        offense : {
            freeThrow : radarEntry.offense.FreeThrowsMade,
            twoPoint : radarEntry.offense.TwoPointersMade * 2,
            threePoint : radarEntry.offense.ThreePointersMade * 3
        },
        defense : {
            freeThrow : radarEntry.defense.FreeThrowsMade,
            twoPoint : radarEntry.defense.TwoPointersMade * 2,
            threePoint : radarEntry.defense.ThreePointersMade * 3
        }
    }

    if(!user && !loading) navigate("/");

    const handleTeamClick = async (teamId : string)=>{
        navigate(`/team/${teamId}`)
    };

    const handleMatchupClick = async (gameId : string)=>{
        navigate(`/matchup/${gameId}`)
    };

    return (
        <MensNcaabTeam
        players={players}
        onMatchupClick={handleMatchupClick}
        onTeamClick={handleTeamClick}
        onWhich={async (which)=>{
            navigate("/" + which)
        }}
        efficiency={id ? efficiency[id] : undefined}
        pointDistribution={_pointDistribution}
        leagueAverages={_leagueAverages}
        games={_teamGames}
        team={id ? teams[id] : undefined}
        tableEntries={Object.values(efficiency)}/>
    )
};