import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { MensNcaabTeams } from "../../pages/model";
import { ontology } from '../../util';
import { 
    getGamesInNextWeekTable,
    getTeams,
    getTeamsTable
} from '../../util/firebase';
import { MockProjection } from '../../util/ontology';
import { getEfficiencyTable, getProjectionTable } from '../../util/rpc';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from "firebase/auth";
  import { useNavigate } from 'react-router-dom';
  import { useAuthState } from 'react-firebase-hooks/auth';
import { useEfficiency } from '../../logic/processing/react/useEfficiency';
import { useTeams } from '../../logic/processing/react/useTeams';
import { useTopTeams } from '../../logic/processing/react/useTopTeams';
import { useProjectedGames } from '../../logic/processing/react/useProjectedGames';
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

export type TeamsProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Teams : FC<TeamsProps>  = (props) =>{

    const now = new Date();
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const {
        getEfficiencyTable
    } = useEfficiency();
    const efficiency = getEfficiencyTable();

    const {
        getTeamsTable
    } = useTeams();
    const teams = getTeamsTable();

    const {
        getTopDefensiveTeams,
        getTopOffensiveTeams
    } = useTopTeams()

    const {
        getProjectedGamesInNextWeekTable
    } = useProjectedGames()
    
    const topDefensiveTeams = getTopDefensiveTeams();
    const topDefensiveTeamsStats = topDefensiveTeams && topDefensiveTeams
    .map((team)=>{

        if(!team||!efficiency) return undefined;

        return <>
            {efficiency[team.TeamID.toString()]?.de.toFixed(1)} DE
        </>
    })

    const topOffensiveTeams = getTopOffensiveTeams();
    const topOffensiveTeamsStats = topOffensiveTeams && topOffensiveTeams
    .map((team)=>{
        if(!team||!efficiency) return undefined;
        return <>
            {efficiency[team.TeamID.toString()]?.oe.toFixed(1)} OE
        </>
    })

    const handleBuildMatchup = async (home : string, away : string)=>{
        navigate(`/mock/matchup/${home}/${away}`)
    }

    if(!user && !loading) navigate("/");

    const handleTeamClick = async (teamId : string)=>{
        navigate(`/team/${teamId}`)
    };

    const handleMatchupClick = async (gameId : string)=>{
        navigate(`/matchup/${gameId}`)
    };

    const headerTeams = getTeams()
    const headerProjectedGames = getProjectedGamesInNextWeekTable(now);

    return (
        <MensNcaabTeams
        onWhich={async (which)=>{
            navigate("/" + which);
        }}
        onMatchupClick={handleMatchupClick}
        onTeamClick={handleTeamClick}
        onBuildMatchup={handleBuildMatchup}
        topDefensiveTeams={topDefensiveTeams}
        topDefensiveTeamsStats={topDefensiveTeamsStats}
        topOffensiveTeams={topOffensiveTeams}
        topOffensiveTeamsStats={topOffensiveTeamsStats}
        tableEntries={efficiency && Object.values(efficiency)}
        teams={teams}/>
    )
};