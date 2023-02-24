import { ontology } from "..";
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
    home : MockProjectedGame.away,
    away : MockProjectedGame.away,
    homeProbability : .58,
    awayProbability : .42
})

export interface BracketCorrectedMatchuplike {
    userPick ? : Partial<BracketProjectedGamelike>;
    actualGame ? : Partial<BracketProjectedGamelike>;
}

export const MockBracketCorrectedMatchup : BracketCorrectedMatchuplike = mock({
    userPick : MockBracketProjectedGame,
    actualGame : MockBracketProjectedGame
});

export const MockBracketCorrectedMatchupA : BracketCorrectedMatchuplike = mock({
    userPick : MockBracketProjectedGame
});

export const MockBracketCorrectedMatchupB : BracketCorrectedMatchuplike = mock({
    userPick : MockBracketProjectedGame,
    actualGame : MockBracketProjectedGameB
});

export const MockBracketCorrectedMatchupC : BracketCorrectedMatchuplike = mock({
    userPick : MockBracketProjectedGameB,
    actualGame : MockBracketProjectedGameB
});

// TODO: switch to BracketProjectedGamelike
export type SparseBracketlike = (BracketCorrectedMatchuplike|undefined)[][];

export const Mock4TeamBracket : SparseBracketlike = mock([
    [
        MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketCorrectedMatchupA, undefined, undefined
        ],
    [
       MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
            [
                undefined, undefined, MockBracketCorrectedMatchup, undefined
            ],
    [
        MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketCorrectedMatchupA, undefined, undefined
        ],
    [
       MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
                [
                    undefined, undefined, undefined, MockBracketCorrectedMatchupB
                ],
    [
        MockBracketCorrectedMatchupC, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketCorrectedMatchupA, undefined, undefined
        ],
    [
       MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
            [
                undefined, undefined, MockBracketCorrectedMatchup, undefined
            ],
    [
        MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketCorrectedMatchupA, undefined, undefined
        ],
    [
       MockBracketCorrectedMatchup, undefined, undefined, undefined
    ]
]);

export const MockSelectionTeamBracket : SparseBracketlike = mock([
    [
        MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
        [
        undefined, {}, undefined, undefined
        ],
    [
       MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
            [
                undefined, undefined, {}, undefined
            ],
    [
        MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
        [
        undefined, {}, undefined, undefined
        ],
    [
       MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
                [
                    undefined, undefined, undefined, {}
                ],
    [
        MockBracketCorrectedMatchupC, undefined, undefined, undefined
    ],
        [
        undefined, {}, undefined, undefined
        ],
    [
       MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
            [
                undefined, undefined, {}, undefined
            ],
    [
        MockBracketCorrectedMatchup, undefined, undefined, undefined
    ],
        [
        undefined, {}, undefined, undefined
        ],
    [
       MockBracketCorrectedMatchup, undefined, undefined, undefined
    ]
]);


export const getEmptyBracketOfSize = (x : number) : ontology.SparseBracketlike=>{

    const l1Matchups = Math.floor(x/2)
    const numRows = (l1Matchups) + (2 ** (Math.log2(l1Matchups))) - 1;
    const numCols = Math.log2(x);

    const bracket : ontology.SparseBracketlike = Array(numRows).fill(undefined);
    for(const [i, value] of bracket.entries())
        bracket[i] = Array(numCols).fill(undefined);

    return bracket;

}

export const getBracketOfTeams = (teams : ontology.Teamlike[]) : ontology.SparseBracketlike =>{

    const bracket = getEmptyBracketOfSize(teams.length);
    for(const [rowNo, row] of bracket.entries()){

        const base = Math.floor(rowNo/2) * 2;

        if((rowNo % 2) === 0)
            bracket[rowNo][0] = {
                actualGame : {
                    home : teams[base],
                    away : teams[base + 1]
                }
            }

    }

    const width = bracket[0].length;
    const continuation = Array(width).fill(false);
    for(const [rowNo, row] of bracket.entries())
        for(const [colNo, entry] of row.entries()){

            const colWindowSize = 2 ** (colNo + 1); 

            if(colNo > 0 && ((rowNo % colWindowSize) === (Math.floor(colWindowSize/2) - 1)))
                bracket[rowNo][colNo] = {};
            
        }

    return bracket;

}