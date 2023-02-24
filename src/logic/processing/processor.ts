import { ontology } from "../../util";
import { MockProjectionArgslike } from "../../util/rpc";

export interface Processorlike {

    // teams
    getTeams() : ontology.Teamlike[] | undefined;
    getTeamsTable() : {[key : string] : ontology.Teamlike} | undefined;

    getApTop25Teams() : ontology.RankTrendTeamlike[] | undefined;
    getGdgTop25Teams() : ontology.RankTrendTeamlike[] | undefined;
    getGdgTopXTeams(x : number) : ontology.RankTrendTeamlike[] | undefined;

    getTopDefensiveTeams: () => ontology.Teamlike[] | undefined;
    getTopOffensiveTeams: () => ontology.Teamlike[] | undefined

    // games
    getGames(date : Date) : ontology.GameByDatelike[] | undefined;
    getGamesTable(date : Date) : {[key : string] : ontology.GameByDatelike} | undefined;
    getGamesTableBetween(dateA : Date, dateB : Date) : {[key : string] : ontology.GameByDatelike} | undefined;
    getGamesInNextWeek(date : Date) : ontology.GameByDatelike[] | undefined;
    getGamesInNextWeekTable(date : Date) : {[key : string] : ontology.GameByDatelike} | undefined;
    getGamesInNextMonth(date : Date) : ontology.GameByDatelike[] | undefined;
    getGamesInNextMonthTable(date : Date) : {[key : string] : ontology.GameByDatelike} | undefined;

    getGameOfTheDay(date : Date) : ontology.ProjectedGamelike | undefined;
    getProjectedGamesTable(date : Date) : {[key : string] : ontology.ProjectedGamelike} | undefined;
    getProjectedGamesTableBetween(dateA : Date, dateB : Date) : {[key : string] : ontology.ProjectedGamelike} | undefined;
    getProjectedGamesInNextWeekTable(date : Date) : {[key : string] : ontology.ProjectedGamelike} | undefined;
    getProjectedGamesInNextMonthTable(date : Date) : {[key : string] : ontology.ProjectedGamelike} | undefined;
    getProjectedGamesTableBetweenForTeam(dateA : Date, dateB : Date, team : ontology.Teamlike) : {[key : string] : ontology.ProjectedGamelike} | undefined

    getTop25Games(data : Date) : ontology.ProjectedGamelike[] | undefined;

    // players
    getPlayers(team : ontology.Teamlike) : ontology.Playerlike[] | undefined;
    getPlayersTable(team : ontology.Teamlike) : {[key : string] : ontology.Playerlike} | undefined;

    // efficiency
    getEfficiencyTable() : ontology.EfficiencyTablelike | undefined;

    // trend
    getTrendTable() : ontology.TrendTablelike | undefined;

    // radar
    getRadarTable() : ontology.RadarTablelike | undefined;

    // projection
    getProjectionTable() : ontology.ProjectionTablelike | undefined;

    // summary
    getLeagueAverages() : ontology.LeagueAverageslike | undefined;

    // point distribution
    getPointDistribution(team : ontology.Teamlike) : ontology.PointDistributionlike | undefined;

    // tos 
    getToses() : ontology.TosTablelike | undefined;
    getTosConfirmed(id : string) : boolean | undefined;

    // blog articles
    getBlogArticles() : ontology.BlogArticleTablelike | undefined;

    // mock projection
    getMockProjection(args : MockProjectionArgslike) : ontology.ProjectionEntrylike | undefined;

}

export interface ProcessorRequirementslike {

}