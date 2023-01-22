import { mock, Mockable } from "./mockable";
import { GameByDatelike, MockAway, MockHome, ProjectedGamelike, Teamlike } from "./ncaab";

export interface BracketPicklike {
    home : Teamlike;
    away : Teamlike;
}

export const MockBracketPick : BracketPicklike = mock({
    home : MockHome,
    away : MockAway
});

export type BracketEntrylike = [BracketPicklike | undefined , ProjectedGamelike | undefined];
export type SparseBracketlike = BracketEntrylike[][];
export type Bracketlike = BracketEntrylike[];

export const Mock4TeamBracket : SparseBracketlike = mock([
    [
        [MockBracketPick, undefined], [undefined, undefined], [undefined, undefined]
    ],
    [
        [undefined, undefined], [MockBracketPick, undefined], [undefined, undefined]
    ],
    [
        [MockBracketPick, undefined], [undefined, undefined], [undefined, undefined]
    ]
]);