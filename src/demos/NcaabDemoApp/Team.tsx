import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { MensNcaabTeams, MensNcaabTeam } from "../../pages";
import { ontology } from '../../util';
import { 
    getGamesInNextMonthTable,
    getGamesInNextWeekTable,
    getPlayers,
    getTeams,
    getTeamsTable,
    submitFeedback
} from '../../util/firebase';
import { MockProjection, PointDistributionlike } from '../../util/ontology';
import { getEfficiencyTable, getProjectionTable, getRadarTable } from '../../util/rpc';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from "firebase/auth";
  import { useNavigate, useParams } from 'react-router-dom';
  import { useAuthState } from 'react-firebase-hooks/auth';
  import { useLeagueAverages } from '../../logic/processing/react/useLeagueAverages';
import { useProjectedGames } from '../../logic/processing/react/useProjectedGames';
import { useTeams } from '../../logic/processing/react/useTeams';
import { usePointDistribution } from '../../logic/processing/react/usePointDistribution';
import { useEfficiency } from '../../logic/processing/react/useEfficiency';
import { usePlayers } from '../../logic/processing/react/usePlayers';
import { useOnceProcessor } from '../../logic/processing/react/reactProcessor';
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
    const now = new Date();
    const monthAgo = new Date(now);
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    const weekFromNow = new Date(now);
    weekFromNow.setDate(weekFromNow.getDate() + 7);

    const { 
        getLeagueAverages
    } = useLeagueAverages();

    const {
        getProjectedGamesInNextWeekTable,
        getProjectedGamesTableBetween,
        getProjectedGamesTableBetweenForTeam
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
        getPlayers
    } = usePlayers();
    let players = undefined;
    if(id && teams && teams[id]) players = getPlayers(teams[id]);

    let team = undefined;
    if(id && teams) team = teams[id];
    const teamDistro = team && getPointDistribution(team);
    const teamGames = team && getProjectedGamesTableBetweenForTeam(monthAgo, weekFromNow, team);
    const teamGamesSorted = teamGames && Object.values(teamGames)
    .sort((gameA, gameB)=>{

        return new Date(gameA.game.DateTimeUTC||gameA.game.Day).getTime()
        - new Date(gameB.game.DateTimeUTC||gameB.game.Day).getTime();

    });


    if(!user && !loading) navigate("/");
    if(getTosConfirmed(user?.uid||"") === false) navigate("/tos");

    const handleTeamClick = async (teamId : string)=>{
        navigate(`/team/${teamId}`)
    };

    const handleMatchupClick = async (gameId : string)=>{
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

    const handleAccountClick = async ()=>{
        navigate("/self/overview");
    }


    return (
        <MensNcaabTeam
        onAccountClick={handleAccountClick}
        onFeedbackSubmit={handleSubmitFeedback}
        headerTeams={headerTeams}
        headerProjectedGames={headerProjectedGames && Object.values(headerProjectedGames)}
        players={players}
        onMatchupClick={handleMatchupClick}
        onTeamClick={handleTeamClick}
        onWhich={async (which)=>{
            navigate("/" + which)
        }}
        efficiency={id && efficiency ? efficiency[id] : undefined}
        pointDistribution={teamDistro}
        leagueAverages={getLeagueAverages()}
        games={teamGamesSorted}
        team={team}
        tableEntries={efficiency && Object.values(efficiency)}/>
    )
};