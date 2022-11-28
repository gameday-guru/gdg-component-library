import axios from "axios";
import { EfficiencyTablelike, ProjectionTablelike } from "../ontology";

/**
 * 
 * @returns 
 */
export const getProjectionTable = async () : Promise<ProjectionTablelike> =>{

    return JSON.parse((await axios.post(
    "https://prod.rpc-v0.gaguru.net/gdg-ncaab-efficiency/state/projection_table/get/a/b/UNIVERSAL"
    )).data)["data"];

}

export const getEfficiencyTable = async () : Promise<EfficiencyTablelike> =>{

    return JSON.parse((await axios.post(
    "https://prod.rpc-v0.gaguru.net/gdg-ncaab-efficiency/state/league_effiency_table/get/a/b/UNIVERSAL"
    )).data)["data"];

}