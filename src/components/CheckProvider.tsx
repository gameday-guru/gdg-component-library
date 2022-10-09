import React, {FC, ReactElement, createContext, useReducer, useEffect, useContext} from 'react';


export interface CheckContextI {
    checksCompleted : boolean
    dispatch : (fn : (state : CheckContextI)=>CheckContextI)=>void
}

const DefaultCheckContext : CheckContextI = {
    checksCompleted : false,
    dispatch : ()=>{}
}


export const CheckContext = createContext(DefaultCheckContext);

export const CheckReducer = (
    state : CheckContextI, 
    action : (state : CheckContextI)=>CheckContextI
)=>{
    return action(state);
}

export type CheckProviderProps = {
    children ? : React.ReactNode;
}

export const CheckProvider : FC<CheckProviderProps>  = ({
    children
}) =>{

    const [state, dispatch] = useReducer(CheckReducer, DefaultCheckContext);

    return (

        <CheckContext.Provider value={{
            ...state,
            dispatch : dispatch
        }}>
                {children}
        </CheckContext.Provider>

    )

}




export const useCheckStore = () : CheckContextI=>{

    const context = useContext(CheckContext);

    if(!context){
        throw new Error("useChecks must be called within a CheckProvider.");
    }

    return context;

}

