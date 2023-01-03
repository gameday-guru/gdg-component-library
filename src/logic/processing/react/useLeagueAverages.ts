import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";
import { useTeams } from "./useTeams";
import { useEfficiency } from "./useEfficiency";

export const useLeagueAverages = () : {

    getLeagueAverages : Processorlike['getLeagueAverages']


}=>{

    const {
        getTeams
    } = useTeams()

    const {
        getEfficiencyTable
    } = useEfficiency()

    const getLeagueAverages = () : ontology.LeagueAverageslike | undefined =>{

        const teams = getTeams();
        const efficiency = getEfficiencyTable();
        if(!teams || ! efficiency) return undefined;

        let sumOe = 0;
        let sumDe = 0;
        let sumPower = 0;
        let count = 0;
        for(const team of teams){
            const eff = efficiency[team.TeamID.toString()];
            if(!eff) continue;
            ++count;
            sumOe += eff.oe;
            sumDe += eff.de;
            sumPower += (.56 * eff.oe) - (.44 * eff.de)
        }

        return {
            offensiveEfficiency : sumOe/count,
            defensiveEfficiency : sumDe/count,
            powerRating : sumPower/count
        }
    

    }
   

    return {
        getLeagueAverages
    }

}