import { ontology } from "../../../util"
import { EfficiencyMultiCache } from "../../domain/efficiency";
import { GamesByDateMultiCache } from "../../domain/gamesByDate";
import { TeamsMultiCache } from "../../domain/ncaabTeams/caches";
import { PlayersMultiCache } from "../../domain/players";
import { ProjectionMultiCache } from "../../domain/projection";
import { TrendMultiCache } from "../../domain/trend";
import { MultiListenerlike } from "../../operations";

export interface DataMultiListenerslike {
    gamesByDate : MultiListenerlike<Date, ontology.GameByDatelike[]>;
    ncaabTeams : MultiListenerlike<undefined, {[key : string] : ontology.Teamlike}>;
    players : MultiListenerlike<ontology.Teamlike, ontology.Playerlike[]>;
    efficiency : MultiListenerlike<undefined, ontology.EfficiencyTablelike>;
    trend : MultiListenerlike<undefined, ontology.TrendTablelike>;
    projection : MultiListenerlike<undefined, ontology.ProjectionTablelike>;
}

export const DEFAULT_MULTI_LISTENERS : DataMultiListenerslike = {
    gamesByDate : GamesByDateMultiCache,
    ncaabTeams : TeamsMultiCache,
    players : PlayersMultiCache,
    efficiency : EfficiencyMultiCache,
    trend : TrendMultiCache,
    projection : ProjectionMultiCache
}