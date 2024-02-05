import { mock, Mockable } from "./mockable";
import { GameByDatelike, MockAway, MockHome, MockProjectedGame, ProjectedGamelike, Teamlike } from "./ncaab";
import { ProjectionEntrylike } from "./ncaab";
import { ontology } from "..";
import { MockGame, MockProjection } from "./ncaab";

export interface BracketGameViewlike extends Mockable {
    // NOTE: for funsy, using an associative array is actually packed better by the VM than tuples
    top ? : Teamlike;
    bottom ? : Teamlike;
    game ? : GameByDatelike;
    gameProjection ? : ProjectionEntrylike;
    topProbability ? : number; // probability that accumulates
    bottomProbability ? : number; // probability that accumulates
    topWin ? : number;
    bottomWin ? : number;
    winnerId ? : string;
    rankTop ? : number;
    rankBottom ? : number
}

export const MockBracketGameView : BracketGameViewlike = mock({
    top : MockHome,
    bottom : MockAway,
    game : MockGame,
    gameProjection : MockProjection,
    bottomProbability : .56,
    topProbability : .44,
});

export const MockBracketGameViewB : BracketGameViewlike = mock({
    top : MockAway,
    bottom : MockAway,
    game : MockGame,
    gameProjection : MockProjection,
    bottomProbability : .58,
    topProbability : .42,
})


// TODO: switch to BracketGameViewlike
export type PackedBracketlike = [string|undefined, string|undefined][];
export type SparseBracketlike = [string|undefined, string|undefined][][];
export interface IdSparseBracketlike {
    _id : string,
    ffWest : SparseBracketlike;
    west :  SparseBracketlike;
    ffEast : SparseBracketlike;
    east : SparseBracketlike;
    ffMidwest : SparseBracketlike;
    midwest : SparseBracketlike;
    ffSouth : SparseBracketlike;
    south : SparseBracketlike;
    leftFinalFour : SparseBracketlike;
    rightFinalFour : SparseBracketlike;
    championship : SparseBracketlike;
    champion ? : string;
}
export type PartIdSparseBracketlike = IdSparseBracketlike & {
    _id ? : string,
}
export type IdLookuplike = {
    _id : string
}
export type SparseBracketViewlike = (BracketGameViewlike|undefined)[][];

export const Mock4TeamBracket : SparseBracketViewlike = mock([
    [
        MockBracketGameView, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketGameView, undefined, undefined
        ],
    [
       MockBracketGameView, undefined, undefined, undefined
    ],
            [
                undefined, undefined, MockBracketGameView, undefined
            ],
    [
        MockBracketGameView, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketGameView, undefined, undefined
        ],
    [
       MockBracketGameView, undefined, undefined, undefined
    ],
                [
                    undefined, undefined, undefined, MockBracketGameViewB
                ],
    [
        MockBracketGameViewB, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketGameView, undefined, undefined
        ],
    [
       MockBracketGameView, undefined, undefined, undefined
    ],
            [
                undefined, undefined, MockBracketGameView, undefined
            ],
    [
        MockBracketGameView, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketGameView, undefined, undefined
        ],
    [
       MockBracketGameView, undefined, undefined, undefined
    ]
]);

export const MockSelectionTeamBracket : SparseBracketViewlike = mock([
    [
        MockBracketGameView, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketGameView, undefined, undefined
        ],
    [
       MockBracketGameView, undefined, undefined, undefined
    ],
            [
                undefined, undefined, MockBracketGameView, undefined
            ],
    [
        MockBracketGameView, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketGameView, undefined, undefined
        ],
    [
       MockBracketGameView, undefined, undefined, undefined
    ],
                [
                    undefined, undefined, undefined, MockBracketGameView
                ],
    [
        MockBracketGameViewB, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketGameView, undefined, undefined
        ],
    [
       MockBracketGameView, undefined, undefined, undefined
    ],
            [
                undefined, undefined, MockBracketGameView, undefined
            ],
    [
        MockBracketGameView, undefined, undefined, undefined
    ],
        [
        undefined, MockBracketGameView, undefined, undefined
        ],
    [
       MockBracketGameView, undefined, undefined, undefined
    ]
]);


export const getEmptyBracketViewOfSize = (x : number) : SparseBracketViewlike=>{

    const l1Matchups = Math.floor(x/2)
    const numRows = (l1Matchups) + (2 ** (Math.log2(l1Matchups))) - 1;
    const numCols = Math.log2(x);

    const bracket : SparseBracketViewlike = Array(numRows).fill(undefined);
    for(const [i, value] of bracket.entries())
        bracket[i] = Array(numCols).fill(undefined);

    return bracket;

}

export const getEmptyBracketOfSize = (x : number) : SparseBracketlike=>{

    const l1Matchups = Math.floor(x/2)
    const numRows = (l1Matchups) + (2 ** (Math.log2(l1Matchups))) - 1;
    const numCols = Math.log2(x);

    const bracket : SparseBracketlike = Array(numRows).fill(undefined);
    for(const [i, value] of bracket.entries())
        bracket[i] = Array(numCols).fill(undefined);

    return bracket;

}

/**
 * Forms a bracket view from a list of teams.
 * @param teams 
 * @returns 
 */
export const getBracketViewOfTeams = (teams : ontology.Teamlike[]) : SparseBracketViewlike =>{

    const bracket = getEmptyBracketViewOfSize(teams.length);
    for(const [rowNo, row] of bracket.entries()){

        const base = Math.floor(rowNo/2) * 2;

        if((rowNo % 2) === 0)
            bracket[rowNo][0] = {
                home : teams[base],
                away : teams[base + 1]
            } as any;

    }

    for(const [rowNo, row] of bracket.entries())
        for(const [colNo, entry] of row.entries()){

            const colWindowSize = 2 ** (colNo + 1); 

            if(colNo > 0 && ((rowNo % colWindowSize) === (Math.floor(colWindowSize/2) - 1)))
                bracket[rowNo][colNo] = MockBracketGameView;
            
        }

    return bracket;

}

/**
 * Forms a sparse bracket from a list of teams.
 * @param teams 
 * @returns 
 */
export const getSparseBracketOfTeams = (teams : ontology.Teamlike[]) : SparseBracketlike =>{

    const bracket = getEmptyBracketOfSize(teams.length);
    for(const [rowNo, row] of bracket.entries()){

        const base = Math.floor(rowNo/2) * 2;

        if((rowNo % 2) === 0)
            bracket[rowNo][0] = [
                teams[base].TeamID.toString(),
                teams[base + 1].TeamID.toString()
            ];

    }

    return bracket;

}

/**
 * Asserts whether a bracket entry should exist at this position is a sparse bracket.
 * @param pos 
 * @returns 
 */
export const shouldBeBracketEntry = (pos : {
    rowNo : number,
    colNo : number
}) : boolean =>{

    const colWindowSize = 2 ** (pos.colNo + 1); 
    return (pos.rowNo % colWindowSize) === (Math.floor(colWindowSize/2) - 1);

}

/**
 * 
 * @param pos 
 * @returns 
 */
export const whichBracketWindow = (pos : {
    rowNo : number,
    colNo : number
}) : number =>{

    const colWindowSize = 2 ** (pos.colNo + 1); 
    return Math.floor(pos.rowNo/colWindowSize);

}

/**
 * 
 * @param pos 
 * @returns 
 */
export const shouldLeaderBeUp = (pos : {
    rowNo : number,
    colNo : number
}) : boolean =>{

    return (whichBracketWindow(pos) % 2) === 1;

}

export const bracketHeight = (bracket : SparseBracketlike)=>bracket.length;
export const bracketWidth = (bracket : SparseBracketlike)=>bracket[0].length;

export const getMatchupWinner = (kwargs : {
    pos : {
        rowNo : number,
        colNo : number
    },
    bracket : SparseBracketlike
}) : string | undefined =>{

    const height = bracketHeight(kwargs.bracket);
    const width = bracketWidth(kwargs.bracket);
    if(kwargs.pos.rowNo > (height - 1) || kwargs.pos.rowNo < 0) 
        return undefined;
    if(kwargs.pos.colNo > (width - 2)  || kwargs.pos.colNo < 0) 
        return undefined;    

    const offset = 2 ** (kwargs.pos.colNo);

    return shouldLeaderBeUp(kwargs.pos)
    ?  kwargs.bracket[kwargs.pos.rowNo - offset]?.[kwargs.pos.colNo + 1]?.[1]
    : kwargs.bracket[kwargs.pos.rowNo + offset]?.[kwargs.pos.colNo + 1]?.[0];

}

export const cleanRight = (kwargs : {
    colNo : number,
    id : string,
    bracket : SparseBracketlike
}) : SparseBracketlike =>{

    const width = bracketWidth(kwargs.bracket);
    if(kwargs.colNo > (width - 2)  || kwargs.colNo < 0) 
        return kwargs.bracket;

    const cpy = [...kwargs.bracket];
    for(const [rowNo, row] of cpy.entries())
        for(
            const [colNo, entry] 
            of row.slice(kwargs.colNo).entries()
        ) {

            if(entry){
                
                const [topTeamId, bottomTeamId] = entry;

                if(topTeamId === kwargs.id){

                    cpy[rowNo][kwargs.colNo + colNo][0] = undefined;

                } 
                
                if (bottomTeamId === kwargs.id){

                    cpy[rowNo][kwargs.colNo + colNo][1] = undefined;

                }

            }

        }

    return cpy;

}

export const setMatchupWinner = (kwargs : {
    pos : {
        rowNo : number,
        colNo : number
    },
    bracket : SparseBracketlike,
    id : string,
    toggle ? : boolean
}) : SparseBracketlike =>{

    const height = bracketHeight(kwargs.bracket);
    const width = bracketWidth(kwargs.bracket);
    if(kwargs.pos.rowNo > (height - 1) || kwargs.pos.rowNo < 0) 
        return kwargs.bracket;
    if(kwargs.pos.colNo > (width - 2)  || kwargs.pos.colNo < 0) 
        return kwargs.bracket;

    const entry = kwargs.bracket[kwargs.pos.rowNo][kwargs.pos.colNo];
    if(!entry) return kwargs.bracket;
    if(!entry.includes(kwargs.id)) return kwargs.bracket;

    const offset = 2 ** (kwargs.pos.colNo);
    const cpy = [...kwargs.bracket];

    if(
        !shouldLeaderBeUp(kwargs.pos) &&
        !cpy[kwargs.pos.rowNo + offset][kwargs.pos.colNo + 1]
    )
        cpy[kwargs.pos.rowNo + offset][kwargs.pos.colNo + 1] = [undefined, undefined];
    else if (
        shouldLeaderBeUp(kwargs.pos) &&
        !cpy[kwargs.pos.rowNo - offset][kwargs.pos.colNo + 1]
    )
        cpy[kwargs.pos.rowNo - offset][kwargs.pos.colNo + 1] = [undefined, undefined];
        

    const oldWinnerId = getMatchupWinner({
        pos : kwargs.pos,
        bracket : kwargs.bracket
    });

    const cleanedBracket = oldWinnerId ? cleanRight({
        colNo : kwargs.pos.colNo + 1,
        bracket : kwargs.bracket,
        id : oldWinnerId
    }) : cpy;

    const _id = oldWinnerId === kwargs.id ? undefined : kwargs.id;

    if(shouldLeaderBeUp(kwargs.pos))
        cleanedBracket[kwargs.pos.rowNo - offset][kwargs.pos.colNo + 1][1] = _id;
    else 
        cleanedBracket[kwargs.pos.rowNo + offset][kwargs.pos.colNo + 1][0] = _id;

    return cleanedBracket;


}

export const sliceRows = (bracket : SparseBracketlike, start : number, end : number)=>{

    return bracket.slice(start, end);

}

export const sliceCols = (bracket : SparseBracketlike, start : number, end : number)=>{

    return bracket.map((row)=>row.slice(start, end));

}

export const slice = (bracket : SparseBracketlike, rows : [number, number], cols : [number, number])=>{

    const intm = sliceRows(bracket, rows[0], rows[1]);
    return sliceCols(intm, cols[0], cols[1]);

}

export const getChampionshipPos = (bracket : SparseBracketlike) : {
    rowNo : number,
    colNo : number
}=>{

    return {
        rowNo : Math.floor(bracketHeight(bracket)/2),
        colNo : bracketWidth(bracket) - 1
    }

}

export const getWinner = (bracket : SparseBracketlike) : string | undefined =>{

    const {rowNo, colNo} = getChampionshipPos(bracket);
    const entry = bracket[
        Math.floor(bracketHeight(bracket)/2)
    ][
        bracketWidth(bracket) - 1
    ];
    const [a ,b] = entry;
    return a ? a : b;

}