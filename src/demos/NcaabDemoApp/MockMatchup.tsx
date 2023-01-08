import React, {FC, ReactElement, useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Matchup as MockMatchupPage } from '../../pages/model/ncaab/matchup/Matchup';
import { ontology } from '../../util';
import { 
    getGamesInNextMonthTable,
    getGamesInNextWeekTable,
    getTeams,
    getTeamsTable,
    submitFeedback
} from '../../util/firebase';
import { MockProjection } from '../../util/ontology';
import { getEfficiencyTable, getProjectionTable, getRadarTable } from '../../util/rpc';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from "firebase/auth";
  import { useAuthState } from 'react-firebase-hooks/auth';
  import { useLeagueAverages } from '../../logic/processing/react/useLeagueAverages';
import { useProjectedGames } from '../../logic/processing/react/useProjectedGames';
import { useTeams } from '../../logic/processing/react/useTeams';
import { usePointDistribution } from '../../logic/processing/react/usePointDistribution';
import { useEfficiency } from '../../logic/processing/react/useEfficiency';
import { useOnceProcessor } from '../../logic/processing/react/reactProcessor';
import { useMockProjection } from '../../logic/processing/react/useMockProjection';
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

export type MockMatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const MockMatchup : FC<MockMatchupProps>  = (props) =>{

    const now = new Date();
    const {home, away} = useParams();
    const navigate = useNavigate();
    const monthAgo = new Date(now);
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    const weekFromNow = new Date(now);
    weekFromNow.setDate(weekFromNow.getDate() + 7);

    const [user, loading, error] = useAuthState(auth);

    const { 
        getLeagueAverages
    } = useLeagueAverages();

    const {
        getProjectedGamesInNextWeekTable,
        getProjectedGamesTableBetween,
        getProjectedGamesTableBetweenForTeam,
    } = useProjectedGames();

    const {
        getTosConfirmed
    } = useOnceProcessor(); 


    const {
        getTeamsTable
    } = useTeams();
    const teams = getTeamsTable();

    const {
        getPointDistribution
    } = usePointDistribution();

    const {
        getEfficiencyTable
    } = useEfficiency();
    const efficiency = getEfficiencyTable();

    const {
        getMockProjection
    } = useMockProjection()

    let homeTeam = undefined;
    if(home && teams) homeTeam = teams[home];
    let homeDistro = undefined;
    if(homeTeam) homeDistro = getPointDistribution(homeTeam);
    let homeEff = undefined;
    if(home && efficiency) homeEff = efficiency[home];
    let homeGames = undefined;
    if(homeTeam) homeGames = getProjectedGamesTableBetweenForTeam(monthAgo, weekFromNow, homeTeam);


    // console.log(gamesTable, home, projectedGame, homeDistro, homeEff, homeGames);

    let awayTeam = undefined;
    if(away && teams) awayTeam = teams[away];
    let awayDistro = undefined;
    if(awayTeam) awayDistro = getPointDistribution(awayTeam);
    let awayEff = undefined;
    if(away && efficiency) awayEff = efficiency[away];
    let awayGames = undefined;
    if(awayTeam) awayGames = getProjectedGamesTableBetweenForTeam(monthAgo, weekFromNow, awayTeam);

    let gameProjection = undefined
    if(home && away) gameProjection = getMockProjection({
        home_team_id : home,
        away_team_id : away,
        neutral : true
    });

    if(!user && !loading) navigate("/");
    if(getTosConfirmed(user?.uid||"") === false) navigate("/tos");

    const handleTeamClick = async (teamId : string)=>{
        navigate(`/team/${teamId}`)
    };

    const handleMockMatchupClick = async (gameId : string)=>{
        navigate(`/matchup/${gameId}`)
    };

    const headerTeams = teams && Object.values(teams);
    const headerProjectedGames = getProjectedGamesInNextWeekTable(now);

    const handleSubmitFeedback = async (feedback : string)=>{
        await submitFeedback({
            feedback,
            uid : user?.uid||"notloggedin",
            page : window.location.toString()
        })
    }

    return (
        <MockMatchupPage onWhich={async (which)=>{
            navigate("/" + which);
        }}
        onFeedbackSubmit={handleSubmitFeedback}
        headerTeams={headerTeams}
        headerProjectedGames={headerProjectedGames && Object.values(headerProjectedGames)}
        onMatchupClick={handleMockMatchupClick}
        onTeamClick={handleTeamClick}
        leagueAverages={getLeagueAverages()}
        gameProjection={gameProjection}
        home={homeTeam}
        homeDistro={homeDistro}
        homeEfficiency={homeEff}
        away={awayTeam}
        awayDistro={awayDistro}
        awayEfficiency={awayEff}
        homeGameProjections={homeGames && Object.values(homeGames)}
        awayGameProjections={awayGames && Object.values(awayGames)}/>
    )
};