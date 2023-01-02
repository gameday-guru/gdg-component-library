import { ontology } from "../../../util";
import { Listenerlike } from "../../operations";
import { DataMethodslike } from "./dataMethods";

export interface DataServicelike {
    /**
     * Enables user to monitor for a changes to the data in the dataService. 
     * @param cb 
     */
    monitorListeners(cb : (which : Listenerlike<any, any>)=>void | Promise<void>) : void;
    
    methods : DataSeviceMethodslike;

}