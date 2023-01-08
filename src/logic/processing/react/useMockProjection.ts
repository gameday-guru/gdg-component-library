import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";
import { MockProjectionArgslike } from "../../../util/rpc";

export const useMockProjection = () : {

    getMockProjection : Processorlike['getMockProjection']

}=>{

    const {
        get : _getMockProjection
    } = useMultiPowerStore(MainDatabase.multiListeners.mockProjection);

    const getMockProjection = (a : MockProjectionArgslike)=>_getMockProjection(a);


    return {
        getMockProjection
    }

}