import { ProjectedGamelike, Teamlike } from "./ncaab";
export interface BracketPicklike {
    home: Teamlike;
    away: Teamlike;
}
export declare const MockBracketPick: BracketPicklike;
export declare type BracketEntrylike = [BracketPicklike | undefined, ProjectedGamelike | undefined];
export declare type SparseBracketlike = BracketEntrylike[][];
export declare type Bracketlike = BracketEntrylike[];
export declare const Mock4TeamBracket: SparseBracketlike;
