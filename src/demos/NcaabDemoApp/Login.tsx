import React, {FC, ReactElement} from 'react';
import { Login as LoginPage } from "../../pages";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { to } from "await-to-js";
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

export const LOGIN_CLASSNAMES : string[] = [ ];
export const LOGIN_STYLE : React.CSSProperties = {
};

export type LoginProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Login : FC<LoginProps>  = (props) =>{

    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    if(user) navigate("/home");

    const handleForgotPassword = async ()=>{
      navigate("/forgot");
    }

    return (
        <LoginPage
        onForgotPassword={handleForgotPassword}
        onLogin={async ({ username, password })=>{

          if(username.length < 0 || password.length < 0) throw new Error("Empty credentials");

          const [err, res] = await to(signInWithEmailAndPassword(auth, username, password));
          if(err) throw new Error("Invalid credentials.");
          navigate("/home");

        }}
        onSignup={async ({username, password, passwordConfirmation})=>{

          if(password !== passwordConfirmation)
            throw new Error("Password and password confirmation do not match.");

          await createUserWithEmailAndPassword(auth, username, password);

          navigate("/home");

        }}
      />
    )
};