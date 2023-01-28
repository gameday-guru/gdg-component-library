import React, {FC, ReactElement, useState} from 'react';
import { PasswordReset as PasswordResetPage } from "../../pages";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
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

export type PasswordResetProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    passwordResetMessage ? : string;
};

export const PasswordReset : FC<PasswordResetProps>  = (props) =>{

    const navigate = useNavigate();
    // const [user, loading] = useAuthState(auth);

    // if(user) navigate("/home");

    const [passwordResetMessage, setPasswordResetMessage] = useState<string|undefined>(undefined);
    const handlePasswordReset = async (email : string)=>{

        // console.log(window.location.protocol + window.location.hostname);
        const [err, res] = await to(sendPasswordResetEmail(auth, email, {
            url : window.location.origin
        }));

        if (err) throw err;

        setPasswordResetMessage(`An invitation has been sent to ${email}!`);
        
    }

    return (
        <PasswordResetPage 
            passwordResetMessage={passwordResetMessage}
            onPasswordResetRequest={handlePasswordReset}/>
    )
};