import axios from "axios";
import { EfficiencyTablelike, ProjectionTablelike, TrendTablelike } from "../ontology";

/**
 * 
 * @returns 
 */
export const getProjectionTable = async () : Promise<ProjectionTablelike> =>{

    return JSON.parse((await axios.post(
    // "https://prod.rpc.gaguru.net/gdg-ncaab-efficiency/state/projection_table/get/a/b/UNIVERSAL"
    "http://localhost:8000/state/projection_table/get/a/b/UNIVERSAL"
    )).data)["data"];

}

export const getEfficiencyTable = async () : Promise<EfficiencyTablelike> =>{

    return JSON.parse((await axios.post(
    // "https://prod.rpc.gaguru.net/gdg-ncaab-efficiency/state/league_effiency_table/get/a/b/UNIVERSAL"
    "http://localhost:8000/state/league_effiency_table/get/a/b/UNIVERSAL"
    )).data)["data"];

}

export const getTrendTable = async () : Promise<TrendTablelike> =>{

    return JSON.parse((await axios.post(
    // "https://prod.rpc.gaguru.net/gdg-ncaab-efficiency/state/trend_table/get/a/b/UNIVERSAL"
    "http://localhost:8000/state/trend_table/get/a/b/UNIVERSAL"
    )).data)["data"];

}