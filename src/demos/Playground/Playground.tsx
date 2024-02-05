import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Bracket } from '../../assemblies/data/ncaab/tournament/Bracket';

import { bracketWidth, getChampionshipPos, getMatchupWinner, getSparseBracketOfTeams, Mock4TeamBracket, MockGame, MockSelectionTeamBracket, ProjectedGamelike, ProjectionEntrylike } from '../../util/ontology';
import Decimal from "decimal.js";
import { Stackdown } from '../../components/input/select/Stackdown/Stackdown';
import { BracketMatchupStackdown } from '../../assemblies/data/ncaab/tournament/BracketMatchupStackdown/BracketMatchupStackdown';
import { useMockProjection } from '../../logic/processing/react/useMockProjection';
import { useTopTeams } from '../../logic/processing/react/useTopTeams';
import { ontology } from '../../util';
import { useTeams } from '../../logic/processing/react/useTeams';
import { setMatchupWinner } from '../../util/ontology';
import { NcaabTournamentBracket } from '../../assemblies/data/ncaab/tournament/NcaabTournamentBracket';

export const PLAYGROUND_CLASSNAMES : string[] = [ ];
export const PLAYGROUND_STYLE : React.CSSProperties = {
};

const RADIAN = Math.PI / 180;
const SPORT_EXPONENT = 11.5;
export const pythagoreanWin = (home_team_score : number, away_team_score : number) : [number, number]=>{
    
    const _homeScore = new Decimal(home_team_score);
    const _awayScore = new Decimal(away_team_score);
    const pythagoreanTotal : Decimal = (_homeScore.pow(SPORT_EXPONENT)).plus(_awayScore.pow(SPORT_EXPONENT));
    const homePythagoreanWin : Decimal = _homeScore.pow(SPORT_EXPONENT).dividedBy(pythagoreanTotal);
    const awayPythagoreanWin : Decimal = _awayScore.pow(SPORT_EXPONENT).dividedBy(pythagoreanTotal);
    const _homePythagoreanWin : number = homePythagoreanWin.toNumber();
    const _awayPythagoreanWin : number = awayPythagoreanWin.toNumber();

    return [_homePythagoreanWin, _awayPythagoreanWin];

}

export const makeGetMockProjection = (
    {
        mockProjections,
        setMockProjections,
        getMockProjection
    } : {
        mockProjections : {
            [key : string] : {
                [key : string] : ProjectionEntrylike
            }
        },
        setMockProjections : (v : {
            [key : string] : {
                [key : string] : ProjectionEntrylike
            }
        })=>void;
        getMockProjection : (args : {
            home_team_id : string,
            away_team_id : string,
            neutral : boolean
        })=>ProjectionEntrylike | undefined;
    }
)=>(args : {
    topTeamId : string,
    bottomTeamId : string,
}) : ProjectionEntrylike | undefined =>{

    if(mockProjections[args.topTeamId]?.[args.bottomTeamId])
        return mockProjections[args.topTeamId]?.[args.bottomTeamId];
    

    const projection = getMockProjection({
        home_team_id : args.topTeamId,
        away_team_id : args.bottomTeamId,
        neutral : true
    });

    if(!projection) return undefined;

    const copyProjections = {...mockProjections};
    copyProjections[args.topTeamId] = {
        ...copyProjections[args.topTeamId],
        [args.bottomTeamId] : projection
    }
    setMockProjections(copyProjections);


    return projection;


}

export const makeGetProbability = ({
    getMockProjection, 
    bracket,
} : {
    getMockProjection : (args : {
        topTeamId : string,
        bottomTeamId : string,
    })=>ProjectionEntrylike | undefined,
    bracket : ontology.SparseBracketlike,
})=>(pos : {
    rowNo : number,
    colNo : number
}) : {
    topProbability ? : number,
    bottomProbability ? : number, 
}=>{

    const getProbability = (pos : {
        rowNo : number,
        colNo : number
    }) : {
        topProbability ? : number,
        bottomProbability ? : number, 
    }=>{

        const entry = bracket[pos.rowNo][pos.colNo];

        if(!entry) return {};

        const [topTeamId, bottomTeamId] = entry;
        if(!topTeamId||!bottomTeamId) return {};

        const projection = getMockProjection({
            topTeamId,
            bottomTeamId
        });

        if(!projection) return {};

        const [homePct, awayPct] = pythagoreanWin(projection.home_team_score, projection.away_team_score);

        if(pos.colNo === 0){

            return {
                topProbability : homePct,
                bottomProbability : awayPct
            }

        }

        const offset = pos.colNo > 0 ? 2 ** (pos.colNo - 1) : pos.colNo; 

        const above =  bracket[pos.rowNo - offset]?.[pos.colNo - 1];
        if(!above) return {};
        const [aboveTopTeamId, aboveBottomTeamId] = above;
       
        const below = bracket[pos.rowNo + offset]?.[pos.colNo - 1];
        if(!below) return {};
        const [belowTopTeamId, belowBottomTeamId] = below;

        const aboveProbability = getProbability({
            rowNo : pos.rowNo - offset,
            colNo : pos.colNo - 1
        });
        const homePctPrev = aboveTopTeamId === topTeamId 
        ? aboveProbability.topProbability
        : aboveProbability.bottomProbability;


        const belowProbability = getProbability({
            rowNo : pos.rowNo + offset,
            colNo : pos.colNo - 1
        });

        const awayPctPrev = belowTopTeamId === bottomTeamId 
        ? belowProbability.topProbability
        : belowProbability.bottomProbability;

        return {
            topProbability :  homePctPrev ? homePctPrev * homePct : homePct * (1/(2** pos.colNo)),
            bottomProbability : awayPctPrev ? awayPctPrev * awayPct : awayPct * (1/(2** pos.colNo))
        }

    }

    return getProbability(pos);

}

export const makeGetBracketGameView = ({
    bracket,
    getTeam,
    getProbability,
    getMockProjection
} : {
    bracket : ontology.SparseBracketlike,
    getTeam : (id: string) => ontology.Teamlike | undefined,
    getProbability : (pos : {
        rowNo : number,
        colNo : number
    })=>{
        topProbability ? : number,
        bottomProbability ? : number, 
    },
    getMockProjection: (args: {
        topTeamId: string;
        bottomTeamId: string;
    }) => ProjectionEntrylike | undefined
})=>(pos : {
    rowNo : number,
    colNo : number
}): ontology.BracketGameViewlike | undefined=>{

    const entry = bracket[pos.rowNo]?.[pos.colNo];
    if(!entry) return undefined;

    const [topTeamId, bottomTeamId] = entry;
    const topTeam = topTeamId ? getTeam(topTeamId) : undefined;
    const bottomTeam = bottomTeamId ? getTeam(bottomTeamId) : undefined;
    const gameProjection = topTeamId && bottomTeamId 
    ? getMockProjection({ topTeamId, bottomTeamId }) : undefined;

    const [topWinPct, bottomWinPct] = gameProjection ? pythagoreanWin(
        gameProjection.home_team_score,
        gameProjection.away_team_score
    ) : [undefined, undefined];

    return {
        top : topTeam,
        bottom : bottomTeam,
        topWin : topWinPct,
        bottomWin : bottomWinPct,
        ...getProbability({
            rowNo : pos.rowNo, 
            colNo : pos.colNo
        }),
        game : MockGame, // TODO: link this into bracket determination
        gameProjection,
        winnerId : getMatchupWinner({
            pos,
            bracket
        })
    }

}

export const makeSetBracketWinner = (
    {
        bracket,
        setBracket
    } : {
        bracket : ontology.SparseBracketlike,
        setBracket : (b : ontology.SparseBracketlike)=>void
    },
)=>async (args : {
    pos : {
        rowNo : number,
        colNo : number
    },
    id : string
})=>{

    const offset = args.pos.colNo > 0 ? 2 ** (args.pos.colNo - 1) : args.pos.colNo; 

    setBracket(setMatchupWinner({
        ...args,
        bracket
    }));

}

export type PlaygroundProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Playground : FC<PlaygroundProps>  = (props) =>{

    const {
        getGdgTopXTeams
    } = useTopTeams();

    const top64 = getGdgTopXTeams(68)?.map((team)=>team.team);

    const [ffWest, setFfWest] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    )

    const [ffEast, setFfEast] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    const [ffSouth, setFfSouth] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    const [ffMidwest, setFfMidwest] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );


    const [eastBracket, setEastBracket] 
    = useState<ontology.SparseBracketlike>(
        [[]]
    );
    const [westBracket, setWestBracket] 
    = useState<ontology.SparseBracketlike>(
        [[]]
    );
    const [midwestBracket, setMidwestBracket] 
    = useState<ontology.SparseBracketlike>(
        [[]]
    );
    const [southBracket, setSouthBracket] 
    = useState<ontology.SparseBracketlike>(
        [[]]
    );

    const [leftSemis, setLeftSemisBracket] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    const [rightSemis, setRightSemisBracket] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    const [finals, setFinalsBracket] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );

    const setFfWestWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> =>{

        const cpy = [...westBracket];
        cpy[14][0][1] = args.id;
        setWestBracket(cpy);

    }

    const setFfEastWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> =>{

        const cpy = [...eastBracket];
        cpy[14][0][1] = args.id;
        setEastBracket(cpy);

    }

    const setFfMidwestWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> =>{

        const cpy = [...midwestBracket];
        cpy[14][0][1] = args.id;
        setMidwestBracket(cpy);

    }

    const setFfSouthWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> =>{

        const cpy = [...southBracket];
        cpy[14][0][1] = args.id;
        setSouthBracket(cpy);

    }

    useEffect(()=>{

        if(top64){

            const _t64 = top64
            .map((val, i) : [ontology.Teamlike, number]=>[val, i]);
            
            _t64.sort(([valA, iA], [valB, iB])=>{

                return (8 * (iA % 2) * 4 * (iA % 4) + (iA % 16) + iA)
                - (8 * (iB % 2) * 4 * (iB % 4) + (iB % 16) + iA);

            })
            
            const _top64 = _t64.map(([team])=>team);

            setFfEast(getSparseBracketOfTeams(
                _top64.slice(60, 62)
            ));

            setFfWest(getSparseBracketOfTeams(
                _top64.slice(62, 64)
            ));

            setFfMidwest(getSparseBracketOfTeams(
                _top64.slice(64, 66)
            ));

            setFfSouth(getSparseBracketOfTeams(
                _top64.slice(66, 68)
            ));

            setEastBracket(getSparseBracketOfTeams([
                ..._top64.slice(0, 15),
                _top64[60]
            ]));

            setWestBracket(getSparseBracketOfTeams([
                ..._top64.slice(15, 30),
                _top64[62]
            ]));

            setMidwestBracket(getSparseBracketOfTeams([
                ..._top64.slice(30, 45),
                _top64[64]
            ]));

            setSouthBracket(getSparseBracketOfTeams([
                ..._top64.slice(45, 60),
                _top64[66]
            ]));

        }

        

    }, [top64 !== undefined]);

    // mock projections
    const [mockProjections, setMockProjections] = useState<{
        [key : string] : {
            [key : string] : ProjectionEntrylike
        }
    }>({});

    const {
        getMockProjection,
    } = useMockProjection();

    const {
        getTeam
    } = useTeams();


    const _getMockProjection = makeGetMockProjection({
        mockProjections,
        setMockProjections,
        getMockProjection
    });

    // ffeast
    const getFfEastProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : ffEast
    });
    const getFfEastBracketGameView = makeGetBracketGameView({
        bracket : ffEast,
        getMockProjection : _getMockProjection,
        getProbability : getFfEastProbability,
        getTeam
    });

    const _getFfEastBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined =>{
        return {
            ...getFfEastBracketGameView(pos),
            winnerId : eastBracket[14]?.[0]?.[1]
        }
    } 


    // ffwest
    const getFfWestProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : ffWest
    });
    const getFfWestBracketGameView = makeGetBracketGameView({
        bracket : ffWest,
        getMockProjection : _getMockProjection,
        getProbability : getFfWestProbability,
        getTeam
    });
    const _getFfWestBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined =>{

        return {
            ...getFfWestBracketGameView(pos),
            winnerId : westBracket[14]?.[0]?.[1]
        }
    } 

    // ffmidwest
    const getFfMidwestProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : ffMidwest
    });
    const getFfMidwestBracketGameView = makeGetBracketGameView({
        bracket : ffMidwest,
        getMockProjection : _getMockProjection,
        getProbability : getFfMidwestProbability,
        getTeam
    });
    const _getFfMidwestBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined =>{

        return {
            ...getFfMidwestBracketGameView(pos),
            winnerId : midwestBracket[14]?.[0]?.[1]
        }
    } 

    // ffsouth
    const getFfSouthProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : ffSouth
    });
    const getFfSouthBracketGameView = makeGetBracketGameView({
        bracket : ffSouth,
        getMockProjection : _getMockProjection,
        getProbability : getFfSouthProbability,
        getTeam
    });
    const _getFfSouthBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined =>{
        return {
            ...getFfSouthBracketGameView(pos),
            winnerId : southBracket[14]?.[0]?.[1]
        }
    } 


    // east
    const getEastProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : eastBracket
    });
    const getEastBracketGameView = makeGetBracketGameView({
        bracket : eastBracket,
        getMockProjection : _getMockProjection,
        getProbability : getEastProbability,
        getTeam
    });
    const setEastBracketGameWinner = makeSetBracketWinner({
        bracket : eastBracket,
        setBracket : setEastBracket
    });


    // west
    const getWestProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : westBracket
    });
    const getWestBracketGameView = makeGetBracketGameView({
        bracket : westBracket,
        getMockProjection : _getMockProjection,
        getProbability : getWestProbability,
        getTeam
    });
    const setWestBracketGameWinner = makeSetBracketWinner({
        bracket : westBracket,
        setBracket : setWestBracket
    });

    // midwest
    const getMidwestProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : midwestBracket
    });
    const getMidwestBracketGameView = makeGetBracketGameView({
        bracket : midwestBracket,
        getMockProjection : _getMockProjection,
        getProbability : getMidwestProbability,
        getTeam
    });
    const setMidwestBracketGameWinner = makeSetBracketWinner({
        bracket : midwestBracket,
        setBracket : setMidwestBracket
    });

    // south
    const getSouthProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : southBracket
    });
    const getSouthBracketGameView = makeGetBracketGameView({
        bracket : southBracket,
        getMockProjection : _getMockProjection,
        getProbability : getSouthProbability,
        getTeam
    });
    const setSouthBracketGameWinner = makeSetBracketWinner({
        bracket : southBracket,
        setBracket : setSouthBracket
    });

    // getL

    // leftSemis
    const getLeftSemisProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : leftSemis
    });
    const _getLeftSemisProbability = (pos: {
        rowNo: number;
        colNo: number;
    }) : {
        topProbability?: number;
        bottomProbability?: number;
    } =>{

        const prob = getLeftSemisProbability(pos);

        
        const champPos = getChampionshipPos(westBracket);
        const midwestProb = getMidwestProbability(champPos);
        const eastProb = getEastProbability(champPos);

        const topProbability = 
        midwestBracket[champPos.rowNo]?.[champPos.colNo]?.[0] === leftSemis[0]?.[0]?.[0]
        ? midwestProb.topProbability
        : midwestProb.bottomProbability;
        const _topProbability = topProbability || .0125;
        const _gameTopProbability = prob.topProbability || .5;

        const bottomProbability = 
        eastBracket[champPos.rowNo]?.[champPos.colNo]?.[0] === leftSemis[0]?.[0]?.[1]
        ? eastProb.topProbability
        : eastProb.bottomProbability;
        const _bottomProbability = bottomProbability || .0125;
        const _gameBottomProbability = prob.bottomProbability || .5;

        return {
            // midwest
            topProbability : _topProbability * _gameTopProbability,
            // east
            bottomProbability : _bottomProbability * _gameBottomProbability
        }

    }

    const getLeftSemisBracketGameView = makeGetBracketGameView({
        bracket : leftSemis,
        getMockProjection : _getMockProjection,
        getProbability : _getLeftSemisProbability,
        getTeam
    });
    const setLeftSemisBracketGameWinner = makeSetBracketWinner({
        bracket : leftSemis,
        setBracket : setLeftSemisBracket
    });

    // rightSemis
    const getRightSemisProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : rightSemis
    });
    const _getRightSemisProbability = (pos: {
        rowNo: number;
        colNo: number;
    }) : {
        topProbability?: number;
        bottomProbability?: number;
    } =>{

        const prob = getRightSemisProbability(pos);

        const champPos = getChampionshipPos(westBracket);
        const southProb = getSouthProbability(champPos);
        const westProb = getWestProbability(champPos);

        const topProbability = 
        southBracket[champPos.rowNo]?.[champPos.colNo]?.[0] === leftSemis[0]?.[0]?.[0]
        ? southProb.topProbability
        : southProb.bottomProbability;
        const _topProbability = topProbability || .0125;
        const _gameTopProbability = prob.topProbability || .5;

        const bottomProbability = 
        westBracket[champPos.rowNo]?.[champPos.colNo]?.[0] === leftSemis[0]?.[0]?.[1]
        ? westProb.topProbability
        : westProb.bottomProbability;
        const _bottomProbability = bottomProbability || .0125;
        const _gameBottomProbability = prob.bottomProbability || .5;

        return {
            // midwest
            topProbability : _topProbability * _gameTopProbability,
            // east
            bottomProbability : _bottomProbability * _gameBottomProbability
        }

    }

    const getRightSemisBracketGameView = makeGetBracketGameView({
        bracket : rightSemis,
        getMockProjection : _getMockProjection,
        getProbability : _getRightSemisProbability,
        getTeam
    });
    const setRightSemisBracketGameWinner = makeSetBracketWinner({
        bracket : rightSemis,
        setBracket : setRightSemisBracket
    });


    // linked setters
    const _setMidwestBracketGameWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> => {

        if(args.pos.colNo > (bracketWidth(midwestBracket) - 2)){

            const cpy = [...leftSemis];
            cpy[0][0][0] = args.id;
            setLeftSemisBracket(cpy);

        } else {

            setMidwestBracketGameWinner(args);

        }

    }

    const _setEastBracketGameWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> => {

        if(args.pos.colNo > (bracketWidth(eastBracket) - 2)){

            const cpy = [...leftSemis];
            cpy[0][0][1] = args.id;
            setLeftSemisBracket(cpy);

        } else {

            setEastBracketGameWinner(args);

        }

    }

    const _setSouthBracketGameWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> => {

        if(args.pos.colNo > (bracketWidth(southBracket) - 2)){

            const cpy = [...rightSemis];
            cpy[0][0][0] = args.id;
            setRightSemisBracket(cpy);

        } else {

            setSouthBracketGameWinner(args);

        }

    }

    const _setWestBracketGameWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> => {

        if(args.pos.colNo > (bracketWidth(westBracket) - 2)){

            const cpy = [...rightSemis];
            cpy[0][0][1] = args.id;
            setRightSemisBracket(cpy);

        } else {

            setWestBracketGameWinner(args);

        }

    }

    const _setLeftSemisBracketGameWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> => {

        if(args.pos.colNo > (bracketWidth(leftSemis) - 2)){

            const cpy = [...finals];
            cpy[0][0][0] = args.id;
            setFinalsBracket(cpy);

        } else {

            setLeftSemisBracketGameWinner(args);

        }

    }

    const _setRightSemisBracketGameWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> => {

        if(args.pos.colNo > (bracketWidth(rightSemis) - 2)){

            const cpy = [...finals];
            cpy[0][0][1] = args.id;
            setFinalsBracket(cpy);

        } else {

            setRightSemisBracketGameWinner(args);

        }

    }

    

    // finals
    const [champion, setChampion] = useState<string|undefined>(undefined);
    const getFinalsProbability = makeGetProbability({
        getMockProjection : _getMockProjection,
        bracket : finals
    });
    const _getFinalsProbability = (pos: {
        rowNo: number;
        colNo: number;
    }) : {
        topProbability?: number;
        bottomProbability?: number;
    } =>{

        const prob = getRightSemisProbability(pos);

        const champPos = getChampionshipPos(leftSemis);
        const leftProb = _getLeftSemisProbability(champPos);
        const rightProb = _getRightSemisProbability(champPos);

        const topProbability = 
        leftSemis[champPos.rowNo]?.[champPos.colNo]?.[0] === leftSemis[0]?.[0]?.[0]
        ? leftProb.topProbability
        : leftProb.bottomProbability;
        const _topProbability = topProbability || .0125;
        const _gameTopProbability = prob.topProbability || .5;

        const bottomProbability = 
        rightSemis[champPos.rowNo]?.[champPos.colNo]?.[0] === rightSemis[0]?.[0]?.[1]
        ? rightProb.topProbability
        : rightProb.bottomProbability;
        const _bottomProbability = bottomProbability || .0125;
        const _gameBottomProbability = prob.bottomProbability || .5;

        return {
            // left
            topProbability : _topProbability * _gameTopProbability,
            // right
            bottomProbability : _bottomProbability * _gameBottomProbability
        }

    }
    const getFinalsBracketGameView = makeGetBracketGameView({
        bracket : finals,
        getMockProjection : _getMockProjection,
        getProbability : getFinalsProbability,
        getTeam
    });
    const setFinalsBracketGameWinner = makeSetBracketWinner({
        bracket : finals,
        setBracket : setFinalsBracket
    });

    // linked getters
    const _getMidwestBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined=>{

        if(pos.colNo > (bracketWidth(midwestBracket) - 2)){

            return {
                ...getMidwestBracketGameView(pos),
                winnerId : leftSemis[0]?.[0]?.[0]
            }

        } else {

            return getMidwestBracketGameView(pos);

        }

    }
    
    const _getEastBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined=>{

        if(pos.colNo > (bracketWidth(eastBracket) - 2)){

            return {
                ...getEastBracketGameView(pos),
                winnerId : leftSemis[0]?.[0]?.[1]
            }

        } else {

            return getEastBracketGameView(pos);

        }

    }

    const _getSouthBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined=>{

        if(pos.colNo > (bracketWidth(southBracket) - 2)){

            return {
                ...getSouthBracketGameView(pos),
                winnerId : rightSemis[0]?.[0]?.[0]
            }

        } else {

            return getSouthBracketGameView(pos);

        }

    }

    const _getWestBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined=>{

        if(pos.colNo > (bracketWidth(westBracket) - 2)){

            return {
                ...getWestBracketGameView(pos),
                winnerId : rightSemis[0]?.[0]?.[1]
            }

        } else {

            return getWestBracketGameView(pos);

        }

    }

    const _getLeftSemisBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined=>{

        if(pos.colNo > (bracketWidth(leftSemis) - 2)){

            return {
                ...getLeftSemisBracketGameView(pos),
                winnerId : finals[0]?.[0]?.[0]
            }

        } else {

            return getLeftSemisBracketGameView(pos);

        }

    }

    const _getRightSemisBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined=>{

        if(pos.colNo > (bracketWidth(rightSemis) - 2)){

            return {
                ...getRightSemisBracketGameView(pos),
                winnerId : finals[0]?.[0]?.[1]
            }

        } else {

            return getRightSemisBracketGameView(pos);

        }

    }

    const _getFinalsBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined=>{

        if(pos.colNo > (bracketWidth(finals) - 2)){

            return {
                ...getFinalsBracketGameView(pos),
                winnerId : champion
            }

        } else {

            return getFinalsBracketGameView(pos);

        }

    }

    // champion setter
    const setFinalGameWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> => {

        setChampion(args.id);

    }


    return (
        <div
        className={[...!props.overrideClasses ? PLAYGROUND_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? PLAYGROUND_STYLE : {}, ...props.style}}>
            <NcaabTournamentBracket

                // ffEast
                ffEast={ffEast}
                getFfEastBracketGameView={_getFfEastBracketGameView}
                setFfEastBracketGameWinner={setFfEastWinner}

                // ffWest
                ffWest={ffWest}
                getfFWestBracketGameView={_getFfWestBracketGameView}
                setFfWestBracketGameWinner={setFfWestWinner}

                // ffMidwest
                ffMidwest={ffEast}
                getFfMidwestBracketGameView={_getFfMidwestBracketGameView}
                setFfMidwestBracketGameWinner={setFfMidwestWinner}

                // ffSouth
                ffSouth={ffSouth}
                getFfSouthBracketGameView={_getFfSouthBracketGameView}
                setFfSouthBracketGameWinner={setFfSouthWinner}

                // east
                east={eastBracket}
                getEastBracketGameView={_getEastBracketGameView}
                setEastBracketGameWinner={_setEastBracketGameWinner}

                // west
                west={westBracket}
                getWestBracketGameView={_getWestBracketGameView}
                setWestBracketGameWinner={_setWestBracketGameWinner}

                // midwest
                midwest={midwestBracket}
                getMidwestBracketGameView={_getMidwestBracketGameView}
                setMidwestBracketGameWinner={_setMidwestBracketGameWinner}

                // south
                south={southBracket}
                getSouthBracketGameView={_getSouthBracketGameView}
                setSouthBracketGameWinner={_setSouthBracketGameWinner}

                // left semis
                leftSemis={leftSemis}
                getLeftSemisGameView={_getLeftSemisBracketGameView}
                setLeftSemisGameWinner={_setLeftSemisBracketGameWinner}

                // right semis 
                rightSemis={rightSemis}
                getRightSemisGameView={_getRightSemisBracketGameView}
                setRightSemisGameWinner={_setRightSemisBracketGameWinner}

                // final
                final={finals}
                getFinalGameView={_getFinalsBracketGameView}
                setFinalGameWinner={setFinalGameWinner}

            />
        </div>
    )
};