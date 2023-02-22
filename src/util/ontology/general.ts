import { mock, Mockable } from "./mockable";
import { GameByDatelike, MockAway, MockHome, MockProjectedGame, ProjectedGamelike, Teamlike } from "./ncaab";

export interface BracketProjectedGamelike extends ProjectedGamelike {
    homeProbability ? : number;
    awayProbability ? : number;
}

export const MockBracketProjectedGame : BracketProjectedGamelike = mock({
    ...MockProjectedGame,
    homeProbability : .54,
    awayProbability : .46
});

export const MockBracketProjectedGameB : BracketProjectedGamelike = mock({
    ...MockProjectedGame,
    homeProbability : .58,
    awayProbability : .42
})

export interface BracketCorrectedMatchuplike {
    userPick ? : BracketProjectedGamelike;
    actualGame ? : BracketProjectedGamelike;
}

export const MockBracketCorrectedMatchup : BracketCorrectedMatchuplike = mock({
    userPick : MockBracketProjectedGame,
    actualGame : MockBracketProjectedGame
});

export const MockBracketCorrectedMatchupA : BracketCorrectedMatchuplike = mock({
    userPick : MockBracketProjectedGame
});

// TODO: switch to BracketProjectedGamelike
export type SparseBracketlike = (BracketCorrectedMatchuplike|undefined)[][];

export const Mock4TeamBracket : SparseBracketlike = mock([
    [
        MockBracketCorrectedMatchup, undefined, undefined
    ],
    [
      undefined, MockBracketCorrectedMatchupA, undefined
    ],
    [
       MockBracketCorrectedMatchup, undefined, undefined
    ]
]);