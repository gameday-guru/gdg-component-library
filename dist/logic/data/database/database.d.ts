import { ontology } from "../../../util";
import { MultiPowerStorelike } from "../operations";
export interface DataMultiPowerStoreslike {
    gamesByDate: MultiPowerStorelike<Date, ontology.GameByDatelike[]>;
    ncaabTeams: MultiPowerStorelike<undefined, {
        [key: string]: ontology.Teamlike;
    }>;
    players: MultiPowerStorelike<ontology.Teamlike, ontology.Playerlike[]>;
    efficiency: MultiPowerStorelike<undefined, ontology.EfficiencyTablelike>;
    trend: MultiPowerStorelike<undefined, ontology.TrendTablelike>;
    projection: MultiPowerStorelike<undefined, ontology.ProjectionTablelike>;
    radar: MultiPowerStorelike<undefined, ontology.RadarTablelike>;
}
export declare const DEFAULT_MULTI_LISTENERS: DataMultiPowerStoreslike;
export interface Databaselike {
    multiListeners: DataMultiPowerStoreslike;
}
export declare class Database implements Databaselike {
    multiListeners: DataMultiPowerStoreslike;
    constructor(multiListeners?: DataMultiPowerStoreslike);
}
export declare const MainDatabase: Database;
