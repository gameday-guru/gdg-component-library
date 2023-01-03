import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";

export const useRadars = () : {

    getRadarTable : Processorlike['getRadarTable'],


}=>{

    const {
        get : _getRadarTable
    } = useMultiPowerStore(MainDatabase.multiListeners.radar);

    const getRadarTable = ()=>_getRadarTable(undefined);


    return {
        getRadarTable
    }

}