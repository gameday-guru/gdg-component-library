import { Mockable } from "./mockable";
import { mock } from "./mockable";

export interface TeamGameStatsByDatelike extends Mockable {
    StatID : number;
    TeamID : number;
    SeasonType : number;
    Season : number;
    Name : string;
    Team : string;
    Wins ? :number;
    Losses ? :number;
    ConferenceWins ? :number;
    ConferenceLosses ? :number;
    GlobalTeamID ? :number;
    Possessions ? :number;
    GameID : number;
    OpponentID : number;
    Opponent : string;
    Day ? :Date;
    Date ? :Date;
    HomeOrAway : string;
    IsGameOver : boolean;
    GlobalGameID : number;
    GlobalOpponentID : number;
    Updated ? :Date;
    Games : number;
    FantasyPoints ? :number;
    Minutes ? :number;
    FieldGoalsMade : number;
    FieldGoalsAttempted : number;
    FieldGoalsPercentage : number;
    EffectiveFieldGoalsPercentage : number;
    TwoPointersMade : number;
    TwoPointersAttempted : number;
    TwoPointersPercentage : number;
    ThreePointersMade : number;
    ThreePointersAttempted : number;
    ThreePointersPercentage : number;
    FreeThrowsMade : number;
    FreeThrowsAttempted : number;
    FreeThrowsPercentage : number;
    OffensiveRebounds : number;
    DefensiveRebounds : number;
    Rebounds : number;
    OffensiveReboundsPercentage ? :number;
    DefensiveReboundsPercentage ? :number;
    TotalReboundsPercentage ? :number;
    Assists : number;
    Steals : number;
    BlockedShots : number;
    Turnovers : number;
    PersonalFouls : number;
    Points ? :number;
    TrueShootingAttempts : number;
    TrueShootingPercentage : number;
    PlayerEfficiencyRating ? :number;
    AssistsPercentage ? :number;
    StealsPercentage ? :number;
    BlocksPercentage ? :number;
    TurnOversPercentage ? :number;
    UsageRatePercentage ? :number;
    FantasyPointsFanDuel ? :number;
    FantasyPointsDraftKings ? :number;
    FantasyPointsYahoo ? :number;
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
    Day: Date
    Date? : Date
    AwayTeam: string;
    HomeTeam: string;
    AwayTeamID: number;
    HomeTeamID: number;
    AwayTeamScore? :number
    HomeTeamScore? :number
    Updated: Date
    Period? :string
    TimeRemainingMinutes? :number
    TimeRemainingSeconds? :number
    PointSpread? :number
    OverUnder? :number
    AwayTeamMoneyLine? :number
    HomeTeamMoneyLine? :number
    GlobalGameID: number;
    GlobalAwayTeamID: number;
    GlobalHomeTeamID: number;
    TournamentID? :string
    Bracket? :string
    Round? :string
    AwayTeamSeed? :number
    HomeTeamSeed? :number
    AwayTeamPreviousGameID? :number
    HomeTeamPreviousGameID? :number
    AwayTeamPreviousGlobalGameID? :number
    HomeTeamPreviousGloablGameID? :number
    TournamentDisplayOrder? :number
    TournamentDisplayOrderForHomeTeam: string;
    IsClosed: boolean
    GameEndDate? : Date
    HomeRotationNumber? :number
    AwayRotationNumber? :number
    TopTeamPreviousGameID? :string
    BottomTeamPreviousGameID? :string
    Channel? :string
    NeutralVenue? :boolean
    AwayPointSpreadPayout? :string
    HomePointSpreadPayout? :string
    OverPayout? :string
    UnderPayout? :string
    DateUTC? : Date
    Stadium? :Stadiumlike
    Periods: Periodlike[]
    DateTimeUTC? : string
}

export interface Stadiumlike extends Mockable {
    StadiumID: number;
    Active: boolean
    Name: string;
    Address? :string
    City: string;
    State: string;
    Zip? :string
    Country? :string
    Capacity? :number
    GeoLat? :number
    GeoLong? :number
};

export interface Teamlike extends Mockable {
    TeamID: number;
    Key: string;
    Active: boolean
    School: string;
    Name: string;
    ApRank? :number
    Wins? :number
    Losses? :number
    ConferenceWins? :number
    ConferenceLosses? :number
    GlobalTeamID: number;
    ConferenceID? :number
    Conference? :string
    TeamLogoUrl: string;
    ShortDisplayName: string;
    Stadium? :Stadiumlike
};

export interface ProjectionEntrylike extends Mockable {
    game_id : number
    home_team_id : number
    away_team_id : number
    home_team_score : number
    away_team_score : number
}

export interface ProjectionTablelike {
    [key : string] : ProjectionEntrylike;
}

export interface EfficiencyEntrylike extends Mockable {
    team_id : number;
    de : number;
    oe : number;
    tempo : number
}

export interface EfficiencyTablelike {
    [key : string] : EfficiencyEntrylike
};

export interface GameEfficiencyEntrylike extends Mockable {
    team_id : number
    game_id : number
    game_oe : number
    game_de : number
    tempo : number
}

export interface GameEfficiencyTablelike {
    [key : string] : GameEfficiencyEntrylike;
}

export const MockHome : Teamlike = mock({
    TeamID : -1,
    GlobalTeamID : -1,
    Key : "mock",
    Name : "Colorado State Rams",
    ShortDisplayName : "Colorado St.",
    Active : true,
    School : "Colorado State",
    TeamLogoUrl : 'data:image/png;base64,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'
});

export const MockAway : Teamlike = mock({
    TeamID : -2,
    GlobalTeamID : -2,
    Key : "mock",
    Name : "Georgia Bulldogs",
    ShortDisplayName : "Georgia",
    Active : true,
    School : "Colorado",
    TeamLogoUrl : "data:image/png;base64,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"
})

export const MockHomeEff : EfficiencyEntrylike = mock({
    team_id : -1,
    oe : 73.1,
    de : 65.2,
    tempo : 43.5
})

export const MockAwayEff : EfficiencyEntrylike = mock({
    team_id : -2,
    oe : 63.4,
    de : 70.2,
    tempo : 39.5
})

export const MockProjection : ProjectionEntrylike = mock({
    game_id : -1,
    home_team_id : -1,
    away_team_id : -1,
    home_team_score : 72.3,
    away_team_score : 64.1
});

export interface GameOfTheDaylike extends Mockable {
    home : Teamlike;
    away : Teamlike;
    gameProjection : ProjectionEntrylike;
}

export interface ProjectedGamelike extends Mockable {
    home : Teamlike;
    away : Teamlike;
    game : GameByDatelike;
    gameProjection : ProjectionEntrylike;
}

export const MockGame : GameByDatelike = mock({
    GameID: 200,
    Season: 2022,
    SeasonType: 0,
    Status: 'IP',
    Day: new Date(),
    AwayTeam: MockAway.Name,
    HomeTeam: MockHome.Name,
    AwayTeamID: MockAway.TeamID,
    HomeTeamID: MockHome.TeamID,
    Updated: new Date(),
    GlobalGameID: 200,
    GlobalAwayTeamID: MockAway.TeamID,
    GlobalHomeTeamID: MockHome.TeamID,
    TournamentDisplayOrderForHomeTeam: "1",
    IsClosed: false,
    Periods: [],
})

export const MockProjectedGame : ProjectedGamelike = mock({
    home : MockHome,
    away : MockAway,
    game : MockGame,
    gameProjection : MockProjection
});

export const ReverseMockProjectedGame : ProjectedGamelike = mock({
    home : MockAway,
    away : MockHome,
    game : MockGame,
    gameProjection : MockProjection
});

export enum Trend {
    DECREASING = -1,
    NOCHANGE = 0,
    INCREASING = 1,
}

export const getTrend = (a : number | undefined, b : number | undefined) : Trend =>{


    if(a === undefined || b === undefined) return Trend.NOCHANGE;

    return b > a ? Trend.INCREASING
    : b < a ? Trend.DECREASING 
    : Trend.NOCHANGE;

}

export interface RankTrendTeamlike extends Mockable {
    team : Teamlike;
    rank : number;
    trend : Trend;
    efficiency : EfficiencyEntrylike;
}

export const MockRankTrendTeam : RankTrendTeamlike = mock<RankTrendTeamlike>({
    team : MockHome,
    rank : 1,
    trend : Trend.NOCHANGE,
    efficiency : MockAwayEff
});

export interface TrendDetaillike extends Mockable {
    last_rank ? : number;
    current_rank ? : number;
}

export interface TrendEntrylike extends Mockable {
    team_id : string;
    ap : TrendDetaillike;
    gdg_power_rating : TrendDetaillike;
}

export interface TrendTablelike {
    [key : string] : TrendEntrylike;
}

export interface PointDistributionMemberlike extends Mockable {
    freeThrow : number;
    twoPoint: number;
    threePoint: number;
}

export interface PointDistributionlike extends Mockable {
    defense : PointDistributionMemberlike;
    offense : PointDistributionMemberlike;
}

export const MockPointDistribution : PointDistributionlike = mock({
    defense : {
        freeThrow : 121,
        twoPoint: 436,
        threePoint: 180
    },
    offense : {
        freeThrow : 30,
        twoPoint: 492,
        threePoint: 210
    }
})

export interface LeagueAverageslike extends Mockable {
    powerRating : number;
    offensiveEfficiency : number;
    defensiveEfficiency : number;
}

export const MockAverageDistribution : LeagueAverageslike = mock({
    powerRating : 17.2,
    offensiveEfficiency : 100.2,
    defensiveEfficiency : 92.7
}   )

export interface Playerlike extends Mockable {
    PlayerID: number
    FirstName: string
    LastName: string
    TeamID: number
    Team: string
    Jersey: number
    Position: string
    Class: string
    Height: number
    Weight: number
    BirthCity ? : string
    BirthState ? : string
    HighSchool: string
    SportRadarPlayerID ? : string
    RotoworldPlayerID ? : string
    RotoWirePlayerID ? : string
    FantasyAlarmPlayerID ? : string
    GlobalTeamID: number
    InjuryStatus ? : string
    InjuryBodyPart ? : string
    InjuryNotes ? : string
    InjuryStartDate ? : string
}

export const MockPlayer : Playerlike = mock({
    PlayerID: 1,
    FirstName: "Arthur",
    LastName: "Merlin",
    TeamID: 4,
    Team: "MIT",
    Jersey: 3,
    Position: "F",
    Class: "Freshman",
    Height: 79,
    Weight: 178,
    BirthCity : "Chico",
    BirthState : "CA",
    HighSchool: "Chico Senior High School",
    GlobalTeamID: 4
});

export interface RadarDetaillike extends Mockable {
    FieldGoalsMade : number;
    FieldGoalsAttempted : number;
    TwoPointersMade : number;
    TwoPointersAttempted : number;
    TwoPointersPercentage : number;
    ThreePointersMade : number;
    ThreePointersAttempted : number;
    FreeThrowsMade : number;
    FreeThrowsAttempted : number;
    OffensiveRebounds : number;
    DefensiveRebounds : number;
    Rebounds : number;
    Assists : number;
    Steals : number;
    BlockedShots : number;
    Turnovers : number;
    PersonalFouls : number;
    Points ? : number;
    TrueShootingAttempts : number;
}

export interface RadarEntrylike extends Mockable {
    team_id : string;
    offense : RadarDetaillike;
    defense : RadarDetaillike;
}

export interface RadarTablelike {
    [key : string] : RadarEntrylike;
}