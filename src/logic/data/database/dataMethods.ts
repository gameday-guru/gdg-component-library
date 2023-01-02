import { ontology } from "../../../util";

export interface DataMethodslike {

    /**
     * 
     */
    getTeams() : Promise<ontology.Teamlike | undefined>; 

    /**
     * 
     */
    getGamesByDate(date : Date) : Promise<ontology.Teamlike | undefined>; 

    /**
     * 
     */
    getGamesByDate(date : Date) : Promise<ontology.Teamlike | undefined>; 

}