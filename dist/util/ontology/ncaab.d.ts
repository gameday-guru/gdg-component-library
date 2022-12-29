export interface TeamGameStatsByDatelike {
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
export interface Periodlike {
    PeriodID: number;
    GameID: number;
    Number: number;
    Name: string;
    Type: string;
    AwayScore: number;
    HomeScore: number;
}
export interface GameByDatelike {
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
export interface Stadiumlike {
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
export interface Teamlike {
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
export interface ProjectionEntrylike {
    game_id: number;
    home_team_id: number;
    away_team_id: number;
    home_team_score: number;
    away_team_score: number;
}
export interface ProjectionTablelike {
    [key: string]: ProjectionEntrylike;
}
export interface EfficiencyEntrylike {
    team_id: number;
    de: number;
    oe: number;
    tempo: number;
}
export interface EfficiencyTablelike {
    [key: string]: EfficiencyEntrylike;
}
export interface GameEfficiencyEntrylike {
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
export interface GameOfTheDaylike {
    home: Teamlike;
    away: Teamlike;
    gameProjection: ProjectionEntrylike;
}
export interface ProjectedGamelike {
    home: Teamlike;
    away: Teamlike;
    game: GameByDatelike;
    gameProjection: ProjectionEntrylike;
}
export declare enum Trend {
    DECREASING = -1,
    NOCHANGE = 0,
    INCREASING = 1
}
export declare const getTrend: (a: number | undefined, b: number | undefined) => Trend;
export interface RankTrendTeamlike {
    team: Teamlike;
    rank: number;
    trend: Trend;
    efficiency: EfficiencyEntrylike;
}
export interface TrendDetaillike {
    last_rank?: number;
    current_rank?: number;
}
export interface TrendEntrylike {
    team_id: string;
    ap: TrendDetaillike;
    gdg_power_rating: TrendDetaillike;
}
export interface TrendTablelike {
    [key: string]: TrendEntrylike;
}
