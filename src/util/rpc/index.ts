import axios from "axios";
import { EfficiencyTablelike, ProjectionEntrylike, ProjectionTablelike, RadarTablelike, TrendTablelike } from "../ontology";
import process from "process";

/**
 * 
 * @returns 
 */
export const getProjectionTable = async () : Promise<ProjectionTablelike> =>{

    return JSON.parse((await axios.post(
        `${import.meta.env.VITE_NCAAB_MODEL_PATH}/state/projection_table/get/a/b/UNIVERSAL`
    )).data)["data"];

}

export const getEfficiencyTable = async () : Promise<EfficiencyTablelike> =>{

    return JSON.parse((await axios.post(
        `${import.meta.env.VITE_NCAAB_MODEL_PATH}/state/league_effiency_table/get/a/b/UNIVERSAL`
    )).data)["data"];

}

export const getTrendTable = async () : Promise<TrendTablelike> =>{

    return JSON.parse((await axios.post(
        `${import.meta.env.VITE_NCAAB_MODEL_PATH}/state/trend_table/get/a/b/UNIVERSAL`
    )).data)["data"];

}

export const getRadarTable = async () : Promise<RadarTablelike> =>{

    return JSON.parse((await axios.post(
        `${import.meta.env.VITE_NCAAB_MODEL_PATH}/state/radar_table/get/a/b/UNIVERSAL`
    )).data)["data"];

}

export interface MockProjectionArgslike {
    home_team_id : string,
    away_team_id : string,
    neutral : boolean
}

export const getMockProjection = async (args : MockProjectionArgslike) : Promise<ProjectionEntrylike> =>{

    const data =  (await axios.post(
        `${import.meta.env.VITE_NCAAB_MODEL_PATH}/method/get_mock_projection`,
        args
    )).data;

    return data;

}

export type BracketByRoundlike = {[key : string] : number | string}[]


export const getBracketByRound = async () : Promise<BracketByRoundlike> =>{
    console.log('path: ', `${import.meta.env.VITE_NCAAB_MODEL_PATH}/method/get_bracket_by_round`);
    const data =  (await axios.post(
        `${import.meta.env.VITE_NCAAB_MODEL_PATH}/method/get_bracket_by_round`,
        {
            id : 1
        }
    )).data;

    return data;

}