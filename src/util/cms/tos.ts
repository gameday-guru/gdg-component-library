import { Toslike } from "../ontology";
import axios from "axios";

export const getToses = async () : Promise<Toslike[]> =>{
    return JSON.parse((await axios.post(
        `${import.meta.env.VITE_CMS_PATH}/api/terms-of-services`
    )).data)["data"];
}

export const getTos = async (id : string) : Promise<Toslike> =>{
    return JSON.parse((await axios.post(
        `${import.meta.env.VITE_CMS_PATH}/api/terms-of-services/${id}`
    )).data)["data"];
}