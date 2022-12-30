import './App.css';
// import "./assets/gdg.css"
import { Login } from "./tests/Login";
import { Home } from "./tests/Home";
import { Team } from "./tests/Team";
import { Teams } from "./tests/Teams";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Matchups } from './tests/Matchups';
import { Matchup } from './tests/Matchup';
import { MockMatchup } from './tests/MockMatchup';
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


export function App(style : any) {

  return (
    <div style={style} className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/team" element={<Teams/>}/>
          <Route path="/team/:id" element={<Team/>}/>
          <Route path="/matchups" element={<Matchups/>}/>
          <Route path="/matchup/:id" element={<Matchup/>}/>
          <Route path="/mock/matchup/:home/:away" element={<MockMatchup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;