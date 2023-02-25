import { ontology } from "..";
import { ProjectedGamelike, Teamlike } from "./ncaab";
export interface BracketProjectedGamelike extends ProjectedGamelike {
    homeProbability?: number;
    awayProbability?: number;
}
export declare const MockBracketProjectedGame: BracketProjectedGamelike;
export declare const MockBracketProjectedGameB: BracketProjectedGamelike;
export interface BracketCorrectedMatchuplike {
    userPick?: Partial<BracketProjectedGamelike>;
    actualGame?: Partial<BracketProjectedGamelike>;
}
export declare const MockBracketCorrectedMatchup: BracketCorrectedMatchuplike;
export declare const MockBracketCorrectedMatchupA: BracketCorrectedMatchuplike;
export declare const MockBracketCorrectedMatchupB: BracketCorrectedMatchuplike;
export declare const MockBracketCorrectedMatchupC: BracketCorrectedMatchuplike;
export declare type SparseBracketlike = (BracketCorrectedMatchuplike | undefined)[][];
export declare const Mock4TeamBracket: SparseBracketlike;
export declare const MockSelectionTeamBracket: SparseBracketlike;
export declare const getEmptyBracketOfSize: (x: number) => ontology.SparseBracketlike;
export declare const getBracketOfTeams: (teams: ontology.Teamlike[]) => ontology.SparseBracketlike;
