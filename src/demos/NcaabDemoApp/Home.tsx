import React, {FC, ReactElement, useEffect, useState, useRef} from 'react';
import { Home as HomePage } from "../../pages";
import { ontology } from '../../util';
import { 
    getGamesInNextWeekTable,
    getTeams,
    getTeamsTable,
    submitFeedback
} from '../../util/firebase';
import { MockHomeEff, MockProjection } from '../../util/ontology';
import { getEfficiencyTable, getProjectionTable, getTrendTable } from '../../util/rpc';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DateComparison } from '../../util/date';
import { useOnceProcessor } from '../../logic/processing/react/reactProcessor';
import { useMultiPowerStore } from '../../logic/processing/react/useMultiPowerStore';
import { GamesByDateMultiCache } from '../../logic/data/domain/gamesByDate';
import { useGames } from '../../logic/processing/react/useGames';
import { MockOver } from '../../components/output/MockOver';
import { useSupportedMedia } from '../../util/media/useSupportedMedia';
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

    const medium = useSupportedMedia();

    const navigate = useNavigate();
    const { dateStr } = useParams();
    const [user, loading, error] = useAuthState(auth);
    const date = new Date(dateStr||new Date());

    const {
        getBlogArticles,
        getGames, 
        getGdgTop25Teams,
        getApTop25Teams,
        getTop25Games,
        getGameOfTheDay,
        getProjectedGamesInNextWeekTable,
        getTeams,
        getTosConfirmed
    } = useOnceProcessor();
   

    if(!user && !loading) navigate("/");
    const tos = user && getTosConfirmed(user.uid);
    if(tos === false) navigate("/tos");

    const handleTeamClick = async (teamId : string)=>{
        navigate(`/team/${teamId}`)
    };

    const handleMatchupClick = async (gameId : string)=>{
        navigate(`/matchup/${gameId}`)
    };

    const top25Games = getTop25Games(date);
    const top25GamesSorted = top25Games && Object.values(top25Games)
    .sort((gameA, gameB)=>{

        return new Date(gameA.game.DateTimeUTC||gameA.game.Day).getTime()
        - new Date(gameB.game.DateTimeUTC||gameB.game.Day).getTime();

    });

    const headerTeams = getTeams()
    const headerProjectedGames = getProjectedGamesInNextWeekTable(date);

    const blogs = getBlogArticles();
    const blogsList = blogs && Object.values(blogs);

    const handleBlog = async (blogId : string)=>{
        window.location.href = `https://blog.gamedayguru.com/${blogId}`
    }

    const handleSubmitFeedback = async (feedback : string)=>{
        await submitFeedback({
            feedback,
            uid : user?.uid||"notloggedin",
            page : window.location.toString()
        });
    }

    const handleAccountClick = async ()=>{
        navigate("/self/overview");
    }

    return (
        <HomePage
        medium={medium}
        onAccountClick={handleAccountClick}
        onFeedbackSubmit={handleSubmitFeedback}
        blogs={blogsList}
        onBlogClick={handleBlog}
        onWhich={async (which)=>{
            navigate("/" + which);
        }}
        headerTeams={headerTeams}
        headerProjectedGames={headerProjectedGames && Object.values(headerProjectedGames)}
        onTeamClick={handleTeamClick}
        onMatchupClick={handleMatchupClick}
        gdgTop25Teams={getGdgTop25Teams()}
        apTop25Teams={getApTop25Teams()}
        top25Games={top25GamesSorted}
        gameOfTheDay={getGameOfTheDay(date)}/>
    )
};