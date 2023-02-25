import { Mockable } from "./mockable";
export interface TeamGameStatsByDatelike extends Mockable {
    StatID: number;
    TeamID: number;
    SeasonType: number;
    Season: number;
    Name: string;
    Team: string;
    Wins?: number;
    Losses?: number;
    ConferenceWins?: number;
    ConferenceLosses?: number;
    GlobalTeamID?: number;
    Possessions?: number;
    GameID: number;
    OpponentID: number;
    Opponent: string;
    Day?: Date;
    Date?: Date;
    HomeOrAway: string;
    IsGameOver: boolean;
    GlobalGameID: number;
    GlobalOpponentID: number;
    Updated?: Date;
    Games: number;
    FantasyPoints?: number;
    Minutes?: number;
    FieldGoalsMade: number;
    FieldGoalsAttempted: number;
    FieldGoalsPercentage: number;
    EffectiveFieldGoalsPercentage: number;
    TwoPointersMade: number;
    TwoPointersAttempted: number;
    TwoPointersPercentage: number;
    ThreePointersMade: number;
    ThreePointersAttempted: number;
    ThreePointersPercentage: number;
    FreeThrowsMade: number;
    FreeThrowsAttempted: number;
    FreeThrowsPercentage: number;
    OffensiveRebounds: number;
    DefensiveRebounds: number;
    Rebounds: number;
    OffensiveReboundsPercentage?: number;
    DefensiveReboundsPercentage?: number;
    TotalReboundsPercentage?: number;
    Assists: number;
    Steals: number;
    BlockedShots: number;
    Turnovers: number;
    PersonalFouls: number;
    Points?: number;
    TrueShootingAttempts: number;
    TrueShootingPercentage: number;
    PlayerEfficiencyRating?: number;
    AssistsPercentage?: number;
    StealsPercentage?: number;
    BlocksPercentage?: number;
    TurnOversPercentage?: number;
    UsageRatePercentage?: number;
    FantasyPointsFanDuel?: number;
    FantasyPointsDraftKings?: number;
    FantasyPointsYahoo?: number;
}
export interface Periodlike extends Mockable {
    PeriodID: number;
    GameID: number;
    Number: number;
    Name: string;
    Type: string;
    AwayScore: number;
    HomeScore: number;
}
export interface GameByDatelike extends Mockable {
    GameID: number;
    Season: number;
    SeasonType: number;
    Status: string;
    Day: Date;
    Date?: Date;
    AwayTeam: string;
    HomeTeam: string;
    AwayTeamID: number;
    HomeTeamID: number;
    AwayTeamScore?: number;
    HomeTeamScore?: number;
    Updated: Date;
    Period?: string;
    TimeRemainingMinutes?: number;
    TimeRemainingSeconds?: number;
    PointSpread?: number;
    OverUnder?: number;
    AwayTeamMoneyLine?: number;
    HomeTeamMoneyLine?: number;
    GlobalGameID: number;
    GlobalAwayTeamID: number;
    GlobalHomeTeamID: number;
    TournamentID?: string;
    Bracket?: string;
    Round?: string;
    AwayTeamSeed?: number;
    HomeTeamSeed?: number;
    AwayTeamPreviousGameID?: number;
    HomeTeamPreviousGameID?: number;
    AwayTeamPreviousGlobalGameID?: number;
    HomeTeamPreviousGloablGameID?: number;
    TournamentDisplayOrder?: number;
    TournamentDisplayOrderForHomeTeam: string;
    IsClosed: boolean;
    GameEndDate?: Date;
    HomeRotationNumber?: number;
    AwayRotationNumber?: number;
    TopTeamPreviousGameID?: string;
    BottomTeamPreviousGameID?: string;
    Channel?: string;
    NeutralVenue?: boolean;
    AwayPointSpreadPayout?: string;
    HomePointSpreadPayout?: string;
    OverPayout?: string;
    UnderPayout?: string;
    DateUTC?: Date;
    Stadium?: Stadiumlike;
    Periods: Periodlike[];
    DateTimeUTC?: string;
}
export interface Stadiumlike extends Mockable {
    StadiumID: number;
    Active: boolean;
    Name: string;
    Address?: string;
    City: string;
    State: string;
    Zip?: string;
    Country?: string;
    Capacity?: number;
    GeoLat?: number;
    GeoLong?: number;
}
export interface Teamlike extends Mockable {
    TeamID: number;
    Key: string;
    Active: boolean;
    School: string;
    Name: string;
    ApRank?: number;
    Wins?: number;
    Losses?: number;
    ConferenceWins?: number;
    ConferenceLosses?: number;
    GlobalTeamID: number;
    ConferenceID?: number;
    Conference?: string;
    TeamLogoUrl: string;
    ShortDisplayName: string;
    Stadium?: Stadiumlike;
}
export interface ProjectionEntrylike extends Mockable {
    game_id: number;
    home_team_id: number;
    away_team_id: number;
    home_team_score: number;
    away_team_score: number;
}
export interface ProjectionTablelike {
    [key: string]: ProjectionEntrylike;
}
export interface EfficiencyEntrylike extends Mockable {
    team_id: number;
    de: number;
    oe: number;
    tempo: number;
}
export interface EfficiencyTablelike {
    [key: string]: EfficiencyEntrylike;
}
export interface GameEfficiencyEntrylike extends Mockable {
    team_id: number;
    game_id: number;
    game_oe: number;
    game_de: number;
    tempo: number;
}
export interface GameEfficiencyTablelike {
    [key: string]: GameEfficiencyEntrylike;
}
export declare const MockHome: Teamlike;
export declare const MockAway: Teamlike;
export declare const MockHomeEff: EfficiencyEntrylike;
export declare const MockAwayEff: EfficiencyEntrylike;
export declare const MockProjection: ProjectionEntrylike;
export interface GameOfTheDaylike extends Mockable {
    home: Teamlike;
    away: Teamlike;
    gameProjection: ProjectionEntrylike;
}
export interface ProjectedGamelike extends Mockable {
    home: Teamlike;
    away: Teamlike;
    game: GameByDatelike;
    gameProjection: ProjectionEntrylike;
}
export declare const MockGame: GameByDatelike;
export declare const MockProjectedGame: ProjectedGamelike;
export declare const ReverseMockProjectedGame: ProjectedGamelike;
export declare enum Trend {
    DECREASING = -1,
    NOCHANGE = 0,
    INCREASING = 1
}
export declare const getTrend: (a: number | undefined, b: number | undefined) => Trend;
export interface RankTrendTeamlike extends Mockable {
    team: Teamlike;
    rank: number;
    trend: Trend;
    efficiency: EfficiencyEntrylike;
}
export declare const MockRankTrendTeam: RankTrendTeamlike;
export interface TrendDetaillike extends Mockable {
    last_rank?: number;
    current_rank?: number;
}
export interface TrendEntrylike extends Mockable {
    team_id: string;
    ap: TrendDetaillike;
    gdg_power_rating: TrendDetaillike;
}
export interface TrendTablelike {
    [key: string]: TrendEntrylike;
}
export interface PointDistributionMemberlike extends Mockable {
    freeThrow: number;
    twoPoint: number;
    threePoint: number;
}
export interface PointDistributionlike extends Mockable {
    defense: PointDistributionMemberlike;
    offense: PointDistributionMemberlike;
}
export declare const MockPointDistribution: PointDistributionlike;
export interface LeagueAverageslike extends Mockable {
    powerRating: number;
    offensiveEfficiency: number;
    defensiveEfficiency: number;
}
export declare const MockAverageDistribution: LeagueAverageslike;
export interface Playerlike extends Mockable {
    PlayerID: number;
    FirstName: string;
    LastName: string;
    TeamID: number;
    Team: string;
    Jersey: number;
    Position: string;
    Class: string;
    Height: number;
    Weight: number;
    BirthCity?: string;
    BirthState?: string;
    HighSchool: string;
    SportRadarPlayerID?: string;
    RotoworldPlayerID?: string;
    RotoWirePlayerID?: string;
    FantasyAlarmPlayerID?: string;
    GlobalTeamID: number;
    InjuryStatus?: string;
    InjuryBodyPart?: string;
    InjuryNotes?: string;
    InjuryStartDate?: string;
}
export declare const MockPlayer: Playerlike;
export interface RadarDetaillike extends Mockable {
    FieldGoalsMade: number;
    FieldGoalsAttempted: number;
    TwoPointersMade: number;
    TwoPointersAttempted: number;
    TwoPointersPercentage: number;
    ThreePointersMade: number;
    ThreePointersAttempted: number;
    FreeThrowsMade: number;
    FreeThrowsAttempted: number;
    OffensiveRebounds: number;
    DefensiveRebounds: number;
    Rebounds: number;
    Assists: number;
    Steals: number;
    BlockedShots: number;
    Turnovers: number;
    PersonalFouls: number;
    Points?: number;
    TrueShootingAttempts: number;
}
export interface RadarEntrylike extends Mockable {
    team_id: string;
    offense: RadarDetaillike;
    defense: RadarDetaillike;
}
export interface RadarTablelike {
    [key: string]: RadarEntrylike;
}
