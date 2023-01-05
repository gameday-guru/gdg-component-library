import React, {FC, ReactElement} from 'react';
import { useOnceProcessor } from '../../logic/processing/react/reactProcessor';
import { Tos as TosPage } from "../../pages/tos/Tos";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { confirmTos } from '../../util/firebase';
import { MainDatabase } from '../../logic/data/database';

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

export const TOS_CLASSNAMES : string[] = [ ];
export const TOS_STYLE : React.CSSProperties = {
};

export type TosProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};



export const Tos : FC<TosProps>  = (props) =>{

    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);

    const {
        getToses,
        getTosConfirmed
    } = useOnceProcessor();

    if(!user && !loading) navigate("/");

    const tos = getToses()?.["1"]

    const handleConfirmTos = async ()=>{
        const res = user && await confirmTos(user.uid);
        if(!res) throw new Error("ToS not confirmed");

        await MainDatabase.multiListeners.confirmedTos.get(user?.uid);
        navigate("/");
    }

    return (
        <TosPage 
        confirmTos={handleConfirmTos}
        tos={tos}/>
    )
};