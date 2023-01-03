import React, {FC, ReactElement, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Matchups as MatchupsPage } from '../pages/model/ncaab/matchup/Matchups';
import { ontology } from '../util';
import { 
    getGamesInNextMonthTable,
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
  import { useAuthState } from 'react-firebase-hooks/auth';
import { useOnceProcessor } from '../logic/processing/react/reactProcessor';
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

export const MATCHUPS_CLASSNAMES : string[] = [ ];
export const MATCHUPS_STYLE : React.CSSProperties = {
};

export type MatchupsProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Matchups : FC<MatchupsProps>  = (props) =>{

    const now = new Date();

    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    const {
        getProjectedGamesInNextMonthTable,
        getProjectedGamesInNextWeekTable
    } = useOnceProcessor();

    if(!user && !loading) navigate("/");

    const handleTeamClick = async (teamId : string)=>{
        navigate(`/team/${teamId}`)
    };

    const handleMatchupClick = async (gameId : string)=>{
        navigate(`/matchup/${gameId}`)
    };

    const weeksGames = getProjectedGamesInNextWeekTable(now);
    const monthsGames = getProjectedGamesInNextMonthTable(now);


    return (
        <MatchupsPage onWhich={async (which)=>{
            navigate("/" + which);
        }}
        onTeamClick={handleTeamClick}
        onMatchupClick={handleMatchupClick}
        allUpcomingGames={monthsGames && Object.values(monthsGames)}
        gamesThisWeek={weeksGames && Object.values(weeksGames)}/>
    )
};