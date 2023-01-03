import { ontology } from "../../../util"
import { EfficiencyMultiCache } from "../domain/efficiency";
import { GamesByDateMultiCache } from "../domain/gamesByDate";
import { TeamsMultiCache } from "../domain/ncaabTeams/caches";
import { PlayersMultiCache } from "../domain/players";
import { ProjectionMultiCache } from "../domain/projection";
import { RadarMultiCache } from "../domain/radar";
import { TrendMultiCache } from "../domain/trend";
import { MultiPowerStorelike } from "../operations";

export interface DataMultiPowerStoreslike {
    gamesByDate : MultiPowerStorelike<Date, ontology.GameByDatelike[]>;
    ncaabTeams : MultiPowerStorelike<undefined, {[key : string] : ontology.Teamlike}>;
    players : MultiPowerStorelike<ontology.Teamlike, ontology.Playerlike[]>;
    efficiency : MultiPowerStorelike<undefined, ontology.EfficiencyTablelike>;
    trend : MultiPowerStorelike<undefined, ontology.TrendTablelike>;
    projection : MultiPowerStorelike<undefined, ontology.ProjectionTablelike>;
    radar : MultiPowerStorelike<undefined, ontology.RadarTablelike>;
}

export const DEFAULT_MULTI_LISTENERS : DataMultiPowerStoreslike = {
    gamesByDate : GamesByDateMultiCache,
    ncaabTeams : TeamsMultiCache,
    players : PlayersMultiCache,
    efficiency : EfficiencyMultiCache,
    trend : TrendMultiCache,
    projection : ProjectionMultiCache,
    radar : RadarMultiCache
}

export interface Databaselike {
       
    multiListeners : DataMultiPowerStoreslike;

}

export class Database implements Databaselike {

    multiListeners : DataMultiPowerStoreslike;

    constructor(multiListeners ? : DataMultiPowerStoreslike){
        this.multiListeners = multiListeners||DEFAULT_MULTI_LISTENERS;
    }

}

export const MainDatabase = new Database();