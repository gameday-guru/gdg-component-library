import { ontology } from "../../../util"
import { MockProjectionArgslike } from "../../../util/rpc";
import { BlogArticlesMultiCache } from "../domain/blogs";
import { ConfirmedTosMultiCache } from "../domain/confirmedTos";
import { EfficiencyMultiCache } from "../domain/efficiency";
import { GamesByDateMultiCache } from "../domain/gamesByDate";
import { MockProjectionMultiCache } from "../domain/mockProjection/caches";
import { TeamsMultiCache } from "../domain/ncaabTeams/caches";
import { PlayersMultiCache } from "../domain/players";
import { ProjectionMultiCache } from "../domain/projection";
import { RadarMultiCache } from "../domain/radar";
import { TosesMultiCache } from "../domain/tos";
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
    blogs : MultiPowerStorelike<undefined, ontology.BlogArticleTablelike>;
    tos : MultiPowerStorelike<undefined, ontology.TosTablelike>;
    confirmedTos : MultiPowerStorelike<string, boolean>;
    mockProjection : MultiPowerStorelike<MockProjectionArgslike, ontology.ProjectionEntrylike>;
}

export const DEFAULT_MULTI_LISTENERS : DataMultiPowerStoreslike = {
    gamesByDate : GamesByDateMultiCache,
    ncaabTeams : TeamsMultiCache,
    players : PlayersMultiCache,
    efficiency : EfficiencyMultiCache,
    trend : TrendMultiCache,
    projection : ProjectionMultiCache,
    radar : RadarMultiCache,
    blogs : BlogArticlesMultiCache,
    tos : TosesMultiCache,
    confirmedTos : ConfirmedTosMultiCache,
    mockProjection : MockProjectionMultiCache
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