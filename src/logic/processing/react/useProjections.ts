import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";

export const useProjections = () : {

    getProjectionTable : Processorlike['getProjectionTable'],


}=>{

    const {
        get : _getProjectionTable
    } = useMultiPowerStore(MainDatabase.multiListeners.projection);

    const getProjectionTable = ()=>_getProjectionTable(undefined);


    return {
        getProjectionTable
    }

}