import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";
import { useTeams } from "./useTeams";
import { useEfficiency } from "./useEfficiency";
import { useRadars } from "./useRadar";

export const usePointDistribution = () : {

    getPointDistribution : Processorlike['getPointDistribution']


}=>{


    const {
        getRadarTable
    } = useRadars();

    const getPointDistribution = (team : ontology.Teamlike) : ontology.PointDistributionlike | undefined =>{

        const radarTable = getRadarTable();
        if(! radarTable) return undefined;

        const radarEntry = radarTable[team.TeamID.toString()];
        let pointDistribution : ontology.PointDistributionlike | undefined = undefined;
        if(radarEntry) pointDistribution = {
            offense : {
                freeThrow : radarEntry.offense.FreeThrowsMade,
                twoPoint : radarEntry.offense.TwoPointersMade * 2,
                threePoint : radarEntry.offense.ThreePointersMade * 3
            },
            defense : {
                freeThrow : radarEntry.defense.FreeThrowsMade,
                twoPoint : radarEntry.defense.TwoPointersMade * 2,
                threePoint : radarEntry.defense.ThreePointersMade * 3
            }
        }

        return pointDistribution;
    

    }
   

    return {
        getPointDistribution
    }

}