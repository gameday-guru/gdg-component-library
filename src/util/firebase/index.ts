import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { 
    getFunctions,
    httpsCallable 
} from "firebase/functions";
import * as ontology from "../ontology";
import { GameByDatelike, Teamlike } from "../ontology";
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
export const functions = getFunctions(app);
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];

export const sportsdataioGet = httpsCallable<{
    path : string
}>(functions, "sportsdataioGet");

export const modelGet = httpsCallable<{
    path : string
}>(functions, "modelGet");

export const confirmTosPost = httpsCallable<string,boolean>(functions, "confirmTos");

export const getTosConfirmedGet = httpsCallable<string,boolean>(functions, "getConfirmedTos");


export const submitFeedbackFunc = httpsCallable<{
    uid : string,
    page : string,
    feedback : string 
},boolean>(functions, "submitFeedback");

/**
 * 
 * @param date 
 * @returns 
 */
export const getGamesByDate =  async (date : Date) : Promise<ontology.GameByDatelike[]> =>{

    const path = `v3/cbb/scores/json/GamesByDate/${date.getFullYear()}-${months[date.getMonth()]}-${date.getDate()}`;
    return (await sportsdataioGet({ path })).data as ontology.GameByDatelike[];

}

/**
 * Gets all games in the next week.
 * @param date 
 * @returns 
 */
 export const getGamesInNextWeek =  async (date : Date) : Promise<ontology.GameByDatelike[]> =>{

    const promises : Promise<ontology.GameByDatelike[]>[] = [];
    const iter = new Date(date);
    const end = new Date(iter);
    end.setDate(end.getDate() + 7);
    while(iter < end){
        promises.push(getGamesByDate(iter));
        iter.setDate(iter.getDate() + 1);
    }

    return (await Promise.all(promises)).flat();

}

/**
 * Gets all games in the next week.
 * @param date 
 * @returns 
 */
 export const getGamesInNextWeekTable =  async (date : Date) : Promise<{
    [key : string] : GameByDatelike
 }> =>{

    const gamesInNextWeek = await getGamesInNextWeek(date);
    const table : {
        [key : string] : GameByDatelike
    } = {};
    for(const game of gamesInNextWeek)
        table[game.GameID] = game;
    return table;


}

/**
 * Gets all games in the next week.
 * @param date 
 * @returns 
 */
export const getGamesInNextMonth =  async (date : Date) : Promise<ontology.GameByDatelike[]> =>{

    const promises : Promise<ontology.GameByDatelike[]>[] = [];
    const iter = new Date(date);
    const end = new Date(iter);
    end.setMonth(end.getMonth() + 1);
    while(iter < end){
        promises.push(getGamesByDate(iter));
        iter.setDate(iter.getDate() + 1);
    }

    return (await Promise.all(promises)).flat();

}

/**
 * Gets all games in the next week.
 * @param date 
 * @returns 
 */
 export const getGamesInNextMonthTable =  async (date : Date) : Promise<{
    [key : string] : GameByDatelike
 }> =>{

    const gamesInNextWeek = await getGamesInNextMonth(date);
    const table : {
        [key : string] : GameByDatelike
    } = {};
    for(const game of gamesInNextWeek)
        table[game.GameID] = game;
    return table;


}


/**
 * 
 * @param date 
 * @returns 
 */
 export const getTeams =  async () : Promise<ontology.Teamlike[]> =>{

    return (await sportsdataioGet({
        path : `v3/cbb/scores/json/teams`
    })).data as ontology.Teamlike[];

}

export const getTeamsTable = async () : Promise<{
    [key : string] : Teamlike
 }> =>{

    const gamesInNextWeek = await getTeams();
    const table : {
        [key : string] : Teamlike
    } = {};
    for(const game of gamesInNextWeek)
        table[game.TeamID] = game;
    return table;


}

export const getPlayers = async (team : ontology.Teamlike) : Promise<ontology.Playerlike[]> =>{

    return (await sportsdataioGet({
        path : `v3/cbb/scores/json/Players/${team.Key}`
    })).data as ontology.Playerlike[];


}

export const confirmTos = async (id : string) : Promise<boolean> =>{

    const data = (await confirmTosPost(id)).data
    if(!data) return false;
    else return true;

}

export const getConfirmedTos = async (id : string) : Promise<boolean> =>{

    const data = (await getTosConfirmedGet(id)).data;
    if(!data) return false;
    else return true;

}

/**
 * Submits feedback.
 * @param args 
 * @returns 
 */
export const submitFeedback = async (args : {
    uid : string,
    page : string,
    feedback : string
}) : Promise<boolean> =>{

    return (await submitFeedbackFunc(args)).data

}