import axios from "axios";
import { EfficiencyTablelike, ProjectionTablelike, TrendTablelike } from "../ontology";

/**
 * 
 * @returns 
 */
export const getProjectionTable = async () : Promise<ProjectionTablelike> =>{

    return JSON.parse((await axios.post(
        `${process.env.REACT_APP_NCAAB_MODEL_PATH}/state/projection_table/get/a/b/UNIVERSAL`
    )).data)["data"];

}

export const getEfficiencyTable = async () : Promise<EfficiencyTablelike> =>{

    return JSON.parse((await axios.post(
        `${process.env.REACT_APP_NCAAB_MODEL_PATH}/state/league_effiency_table/get/a/b/UNIVERSAL`
    )).data)["data"];

}

export const getTrendTable = async () : Promise<TrendTablelike> =>{

    return JSON.parse((await axios.post(
        `${process.env.REACT_APP_NCAAB_MODEL_PATH}/state/trend_table/get/a/b/UNIVERSAL`
    )).data)["data"];

}