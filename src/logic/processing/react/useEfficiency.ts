import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";

export const useEfficiency = () : {

    getEfficiencyTable : Processorlike['getEfficiencyTable'],


}=>{

    const {
        get : _getEfficiencyTable
    } = useMultiPowerStore(MainDatabase.multiListeners.efficiency);

    const getEfficiencyTable = ()=>_getEfficiencyTable(undefined);


    return {
        getEfficiencyTable
    }

}