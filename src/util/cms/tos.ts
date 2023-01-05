import { Toslike } from "../ontology";
import axios from "axios";
import { TosTablelike } from "../ontology";

export const getToses = async () : Promise<Toslike[]> =>{
    return JSON.parse((await axios.get(
        `${import.meta.env.VITE_CMS_PATH}/api/terms-of-services`
    )).data)["data"];
}

export const getTos = async (id : string) : Promise<Toslike> =>{
    return JSON.parse((await axios.get(
        `${import.meta.env.VITE_CMS_PATH}/api/terms-of-services/${id}`
    )).data)["data"];
}

export const getTosTable = async () : Promise<TosTablelike> =>{

    const toses : any[] = (await axios.get(
        `${import.meta.env.VITE_CMS_PATH}/api/terms-of-services`,
    )).data["data"];

    const table : TosTablelike = {};
    for(const article of toses)
        table[article.id.toString()] = article["attributes"];
    return table;

}