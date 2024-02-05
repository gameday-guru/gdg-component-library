import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";

export const useBrackets = () : {

    getBracket : Processorlike['getBracket'],
    getMyBrackets : Processorlike['getMyBrackets']

}=>{

    const {
        get : _getBracket
    } = useMultiPowerStore(MainDatabase.multiListeners.bracket);

    const {
        get : _getMyBrackets
    } = useMultiPowerStore(MainDatabase.multiListeners.myBrackets);

    
    const getBracket = (lookup : ontology.IdLookuplike)=>{
        return _getBracket(lookup._id)
    }

    const getMyBrackets = ()=>{
        const brackets = [];
        for(const id of _getMyBrackets(undefined)??[]){
            const bracket = _getBracket(id);
            if(bracket) brackets.push(bracket);
        }
        return brackets;
    }
    


    return {
        getBracket,
        getMyBrackets
    }

}