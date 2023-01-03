import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";

export const useTrends = () : {

    getTrendTable : Processorlike['getTrendTable'],


}=>{

    const {
        get : _getTrendTable
    } = useMultiPowerStore(MainDatabase.multiListeners.trend);

    const getTrendTable = ()=>_getTrendTable(undefined);


    return {
        getTrendTable
    }

}