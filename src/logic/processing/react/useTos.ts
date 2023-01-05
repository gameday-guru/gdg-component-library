import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";

export const useTos = () : {

    getToses : Processorlike['getToses'],
    getTosConfirmed : Processorlike['getTosConfirmed']


}=>{

    const {
        get : _getToses
    } = useMultiPowerStore(MainDatabase.multiListeners.tos);

    const {
        get : getTosConfirmed
    } = useMultiPowerStore(MainDatabase.multiListeners.confirmedTos);

    const getToses = ()=>_getToses(undefined);


    return {
        getTosConfirmed,
        getToses
    }

}