import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';
import { Bracket } from '../../pages/bracket/Bracket';

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
import { useSupportedMedia } from '../../util/media/useSupportedMedia';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { useTos } from '../../logic/processing/react/useTos';
import { submitFeedback } from '../../util/firebase';
import { useProjectedGames } from '../../logic/processing/react/useProjectedGames';
import { useBrackets } from '../../logic/processing/react/useBrackets';
import { setBracket } from '../../util/firebase';
import { BracketByRoundlike, getBracketByRound } from '../../util/rpc';
import { RoundByRoundChampions } from '../../fixtures';
import { SeedMap } from '../../fixtures';

export const PLAYGROUND_CLASSNAMES : string[] = [ ];
export const PLAYGROUND_STYLE : React.CSSProperties = {
};

const firebaseConfig = {
    apiKey: "AIzaSyDtJnJmtM8BEe3Jzgy9pT_gPIrCDpNe_Rw",
    authDomain: "gdg-proto-f7542.firebaseapp.com",
    databaseURL: "https://gdg-proto-f7542-default-rtdb.firebaseio.com",
    projectId: "gdg-proto-f7542",
    storageBucket: "gdg-proto-f7542.appspot.com",
    messagingSenderId: "822423637214",
    appId: "1:822423637214:web:5fa27bdc21b3f2e251c64f",
    measurementId: "G-90P3M7PT46"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

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
    getMockProjection,
    seeds
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
    }) => ProjectionEntrylike | undefined,
    seeds : {[key : string] : number}
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
        }),
        rankTop : topTeamId ? seeds[topTeamId] : undefined,
        rankBottom : bottomTeamId ? seeds[bottomTeamId] : undefined
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

    setBracket(setMatchupWinner({
        ...args,
        bracket
    }));

}

export type BracketPageProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const BracketPage : FC<BracketPageProps>  = (props) =>{

    const defaultTemplate = "bBO5lfVkACwWY9ZO6ufk";

    const medium = useSupportedMedia();

    const editQueue = useRef<(()=>Promise<void>)[]>([]);

    const navigate = useNavigate();
    const { dateStr, id } = useParams();
    const [user, loading, error] = useAuthState(auth);
    const date = new Date(dateStr||new Date());

    const _id = useRef(id);

    const {
        getTosConfirmed
    } = useTos();

    const { getBracket } = useBrackets()
    const bracket = _id.current ? getBracket({_id : _id.current}) : getBracket({_id : defaultTemplate }) ;
    // console.log("BRACKET LOADED: ", bracket?._id, bracket);

    const {
        getGdgTopXTeams
    } = useTopTeams();

    const top64 = getGdgTopXTeams(68)?.map((team)=>team.team);

    const [ffWest, _setFfWest] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    )
    useEffect(()=>{

        if(bracket?.ffWest)
            _setFfWest(bracket?.ffWest)

    }, [bracket]);

    const [ffEast, _setFfEast] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    useEffect(()=>{

        if(bracket?.ffEast)
            _setFfEast(bracket?.ffEast)

    }, [bracket]);

    const [ffSouth, _setFfSouth] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    useEffect(()=>{

        if(bracket?.ffSouth)
            _setFfSouth(bracket?.ffSouth)

    }, [bracket]);

    const [ffMidwest, _setFfMidwest] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    useEffect(()=>{

        if(bracket?.ffMidwest)
            _setFfMidwest(bracket?.ffMidwest)

    }, [bracket]);


    const [eastBracket, _setEastBracket] 
    = useState<ontology.SparseBracketlike>(
        [[]]
    );
    useEffect(()=>{

        if(bracket?.east)
            _setEastBracket(bracket?.east)

    }, [bracket]);

    const [westBracket, _setWestBracket] 
    = useState<ontology.SparseBracketlike>(
        [[]]
    );
    useEffect(()=>{

        if(bracket?.west)
            _setWestBracket(bracket?.west)

    }, [bracket]);

    const [midwestBracket, _setMidwestBracket] 
    = useState<ontology.SparseBracketlike>(
        [[]]
    );
    useEffect(()=>{

        if(bracket?.midwest){
            _setMidwestBracket(bracket.midwest)
        }

    }, [bracket]);

    const [southBracket, _setSouthBracket] 
    = useState<ontology.SparseBracketlike>(
        [[]]
    );
    useEffect(()=>{

        if(bracket?.south)
           _setSouthBracket(bracket?.south)

    }, [bracket]);

    const [leftSemis, _setLeftSemisBracket] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    useEffect(()=>{

        if(bracket?.leftFinalFour)
            _setLeftSemisBracket(bracket?.leftFinalFour)

    }, [bracket]);

    const [rightSemis, _setRightSemisBracket] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    useEffect(()=>{

        if(bracket?.rightFinalFour)
            _setRightSemisBracket(bracket?.rightFinalFour)

    }, [bracket]);

    const [finals, _setFinalsBracket] 
    = useState<ontology.SparseBracketlike>(
        [[[
            undefined, undefined
        ]]]
    );
    useEffect(()=>{

        if(bracket?.championship)
            _setFinalsBracket(bracket?.championship)

    }, [bracket]);

    const [champion, _setChampion] = useState<string|undefined>(undefined);
    useEffect(()=>{

        if(bracket?.champion)
            _setChampion(bracket.champion)

    }, [bracket]);

    const seeds : {[key : string] : number} = {};
    for(const [i, row] of eastBracket.entries()){
        if(!row[0]) continue;
        const [top, bottom] = row[0]
        if(i % 2 === 0 && top && bottom){
            seeds[top] = SeedMap[i % 16];
            seeds[bottom] = SeedMap[(i+1) % 16];
        }
    }
    for(const [i, row] of westBracket.entries()){
        if(!row[0]) continue;
        const [top, bottom] = row[0]
        if(i % 2 === 0 && top && bottom){
            seeds[top] = SeedMap[i % 16];
            seeds[bottom] = SeedMap[(i+1) % 16];
        }
    }
    for(const [i, row] of southBracket.entries()){
        if(!row[0]) continue;
        const [top, bottom] = row[0]
        if(i % 2 === 0 && top && bottom){
            seeds[top] = SeedMap[i % 16];
            seeds[bottom] = SeedMap[(i+1) % 16];
        }
    }
    for(const [i, row] of midwestBracket.entries()){
        if(!row[0]) continue;
        const [top, bottom] = row[0]
        if(i % 2 === 0 && top && bottom){
            seeds[top] = SeedMap[i % 16];
            seeds[bottom] = SeedMap[(i+1) % 16];
        }
    }

    const setPartialBracket = async (part : Partial<ontology.IdSparseBracketlike>)=>{
        
        const edit = async ()=>{
            const res = await setBracket({
                ffWest : ffWest,
                west : westBracket,
                ffEast : ffEast,
                east : eastBracket,
                ffSouth : ffSouth,
                south : southBracket,
                ffMidwest : ffMidwest,
                midwest : midwestBracket,
                leftFinalFour : leftSemis,
                rightFinalFour : rightSemis,
                championship : finals,
                champion : champion,
                _id : _id.current as any,
                ...part
            });

            if(!_id.current){
                _id.current = res._id;
                navigate(`/brackets/${res._id}`)
            }

        }

        editQueue.current.push(edit)

        for(const edit of editQueue.current)
            await edit();
        
    }

    const setFfWest = (b : ontology.SparseBracketlike)=>{
        _setFfWest(b);
        setPartialBracket({
            ffWest : b
        });
    };
    const setWestBracket = (b : ontology.SparseBracketlike)=>{
        _setWestBracket(b);
        setPartialBracket({
            west : b
        });
    };

    const setFfSouth = (b : ontology.SparseBracketlike)=>{
        _setFfSouth(b);
        setPartialBracket({
            ffSouth : b
        });
    };
    const setSouthBracket = (b : ontology.SparseBracketlike)=>{
        _setSouthBracket(b);
        setPartialBracket({
            south : b
        });
    };

    const setFfMidwest = (b : ontology.SparseBracketlike)=>{
        _setFfMidwest(b);
        setPartialBracket({
            ffMidwest : b
        });
    };
    const setMidwestBracket = (b : ontology.SparseBracketlike)=>{
        _setMidwestBracket(b);
        setPartialBracket({
            midwest : b
        });
    };

    const setFfEast = (b : ontology.SparseBracketlike)=>{
        _setFfEast(b);
        setPartialBracket({
            ffEast : b
        });
    };
    const setEastBracket = (b : ontology.SparseBracketlike)=>{
        _setEastBracket(b);
        setPartialBracket({
            east : b
        });
    };

    const setLeftSemisBracket = (b : ontology.SparseBracketlike)=>{
        _setLeftSemisBracket(b);
        setPartialBracket({
            leftFinalFour : b
        });
    };

    const setRightSemisBracket = (b : ontology.SparseBracketlike)=>{
        _setRightSemisBracket(b);
        setPartialBracket({
            rightFinalFour : b
        });
    };

    const setFinalsBracket = (b : ontology.SparseBracketlike)=>{
        _setFinalsBracket(b);
        setPartialBracket({
            championship : b
        });
    };

    const setChampion = (c : string)=>{
        _setChampion(c);
        setPartialBracket({
            champion : c
        });
    };


    const setFfWestWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> =>{

        const cpy = [...westBracket];
        cpy[8][0][1] = args.id;
        setWestBracket(cpy);

    }

    const _selectFfWestBracketTeam = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
        top : boolean;
    }) : Promise<void> => {


        if(args.pos.colNo !== 0) return;


        const cpy = [...ffWest];
        if (args.top)
            cpy[args.pos.rowNo][args.pos.colNo][0] = args.id;
        else 
            cpy[args.pos.rowNo][args.pos.colNo][1] = args.id
    
        setFfWest(cpy);

    }

    const setFfEastWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> =>{

        const cpy = [...eastBracket];
        cpy[0][0][1] = args.id;
        setEastBracket(cpy);

    }

    const _selectFfEastBracketTeam = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
        top : boolean;
    }) : Promise<void> => {


        if(args.pos.colNo !== 0) return;


        const cpy = [...ffEast];
        if (args.top)
            cpy[args.pos.rowNo][args.pos.colNo][0] = args.id;
        else 
            cpy[args.pos.rowNo][args.pos.colNo][1] = args.id
    
        setFfEast(cpy);

    }

    const setFfMidwestWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> =>{

        const cpy = [...midwestBracket];
        cpy[8][0][1] = args.id;
        setMidwestBracket(cpy);

    }

    const _selectFfMidwestBracketTeam = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
        top : boolean;
    }) : Promise<void> => {


        if(args.pos.colNo !== 0) return;


        const cpy = [...ffMidwest];
        if (args.top)
            cpy[args.pos.rowNo][args.pos.colNo][0] = args.id;
        else 
            cpy[args.pos.rowNo][args.pos.colNo][1] = args.id
    
        setFfMidwest(cpy);

    }

    const setFfSouthWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> =>{

        const cpy = [...southBracket];
        cpy[0][0][1] = args.id;
        setSouthBracket(cpy);

    }

    const _selectFfSouthBracketTeam = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
        top : boolean;
    }) : Promise<void> => {


        if(args.pos.colNo !== 0) return;


        const cpy = [...ffSouth];
        if (args.top)
            cpy[args.pos.rowNo][args.pos.colNo][0] = args.id;
        else 
            cpy[args.pos.rowNo][args.pos.colNo][1] = args.id
    
        setFfSouth(cpy);

    }

    useEffect(()=>{

        if(top64 && !bracket){

            const _t64 = top64
            .map((val, i) : [ontology.Teamlike, number]=>[val, i]);
            
            _t64.sort(([valA, iA], [valB, iB])=>{

                return (8 * (iA % 2) * 4 * (iA % 4) + (iA % 16) + iA)
                - (8 * (iB % 2) * 4 * (iB % 4) + (iB % 16) + iA);

            })
            
            const _top64 = _t64.map(([team])=>team);

            _setFfEast(getSparseBracketOfTeams(
                _top64.slice(60, 62)
            ));

            _setFfWest(getSparseBracketOfTeams(
                _top64.slice(62, 64)
            ));

            _setFfMidwest(getSparseBracketOfTeams(
                _top64.slice(64, 66)
            ));

            _setFfSouth(getSparseBracketOfTeams(
                _top64.slice(66, 68)
            ));

            _setEastBracket(getSparseBracketOfTeams([
                ..._top64.slice(0, 15),
                _top64[60]
            ]));

            _setWestBracket(getSparseBracketOfTeams([
                ..._top64.slice(15, 30),
                _top64[62]
            ]));

            _setMidwestBracket(getSparseBracketOfTeams([
                ..._top64.slice(30, 45),
                _top64[64]
            ]));

            _setSouthBracket(getSparseBracketOfTeams([
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
        getTeam, getTeams
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
        getTeam,
        seeds
    });

    const _getFfEastBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined =>{
        return {
            ...getFfEastBracketGameView(pos),
            winnerId : eastBracket[0]?.[0]?.[1]
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
        getTeam,
        seeds
    });
    const _getFfWestBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined =>{

        return {
            ...getFfWestBracketGameView(pos),
            winnerId : westBracket[8]?.[0]?.[1]
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
        getTeam,
        seeds
    });
    const _getFfMidwestBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined =>{

        return {
            ...getFfMidwestBracketGameView(pos),
            winnerId : midwestBracket[8]?.[0]?.[1]
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
        getTeam,
        seeds
    });
    const _getFfSouthBracketGameView = (pos: {
        rowNo: number;
        colNo: number;
    }) : ontology.BracketGameViewlike | undefined =>{
        return {
            ...getFfSouthBracketGameView(pos),
            winnerId : southBracket[0]?.[0]?.[1]
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
        getTeam,
        seeds
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
        getTeam,
        seeds
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
        getTeam,
        seeds
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
        getTeam,
        seeds
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
        const southProb = getMidwestProbability(champPos);
        const eastProb = getEastProbability(champPos);

        const topProbability = 
        southBracket[champPos.rowNo]?.[champPos.colNo]?.[0] === leftSemis[0]?.[0]?.[0]
        ? southProb.topProbability
        : southProb.bottomProbability;
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
        getTeam,
        seeds
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
        const midwestProb = getMidwestProbability(champPos);
        const westProb = getWestProbability(champPos);

        const topProbability = 
        midwestBracket[champPos.rowNo]?.[champPos.colNo]?.[0] === leftSemis[0]?.[0]?.[0]
        ? midwestProb.topProbability
        : midwestProb.bottomProbability;
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
        getTeam,
        seeds
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

            const cpy = [...rightSemis];
            cpy[0][0][0] = args.id;
            setRightSemisBracket(cpy);

        } else {

            setMidwestBracketGameWinner(args);

        }

    }

    const _selectMidwestBracketTeam = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
        top : boolean;
    }) : Promise<void> => {


        if(args.pos.colNo !== 0) return;


        const cpy = [...midwestBracket];
        if (args.top)
            cpy[args.pos.rowNo][args.pos.colNo][0] = args.id;
        else 
            cpy[args.pos.rowNo][args.pos.colNo][1] = args.id
    
        setMidwestBracket(cpy);


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

    const _selectEastBracketTeam = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
        top : boolean;
    }) : Promise<void> => {


        if(args.pos.colNo !== 0) return;


        const cpy = [...eastBracket];
        if (args.top)
            cpy[args.pos.rowNo][args.pos.colNo][0] = args.id;
        else 
            cpy[args.pos.rowNo][args.pos.colNo][1] = args.id
    
        setEastBracket(cpy);


    }

    const _setSouthBracketGameWinner = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
    }) : Promise<void> => {

        if(args.pos.colNo > (bracketWidth(southBracket) - 2)){

            const cpy = [...leftSemis];
            cpy[0][0][0] = args.id;
            setLeftSemisBracket(cpy);

        } else {

            setSouthBracketGameWinner(args);

        }

    }

    const _selectSouthBracketTeam = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
        top : boolean;
    }) : Promise<void> => {


        if(args.pos.colNo !== 0) return;


        const cpy = [...southBracket];
        if (args.top)
            cpy[args.pos.rowNo][args.pos.colNo][0] = args.id;
        else 
            cpy[args.pos.rowNo][args.pos.colNo][1] = args.id
    
        setSouthBracket(cpy);


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

    const _selectWestBracketTeam = async (args: {
        pos: {
            rowNo: number;
            colNo: number;
        };
        id: string;
        top : boolean;
    }) : Promise<void> => {


        if(args.pos.colNo !== 0) return;


        const cpy = [...westBracket];
        if (args.top)
            cpy[args.pos.rowNo][args.pos.colNo][0] = args.id;
        else 
            cpy[args.pos.rowNo][args.pos.colNo][1] = args.id
    
        setWestBracket(cpy);


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
        getTeam,
        seeds
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

    const {
        getProjectedGamesInNextWeekTable
    } = useProjectedGames();

    const [bracketByRound, setBrackByRound] = useState<BracketByRoundlike>(RoundByRoundChampions);

    useEffect(()=>{

        getBracketByRound()
        .then((data)=>{
            setBrackByRound(data)
        });

    }, [])


    // CLOSING
    if(!user && !loading) navigate("/");
    const tos = user && getTosConfirmed(user.uid);
    if(tos === false) navigate("/tos");

    const handleTeamClick = async (teamId : string)=>{
        navigate(`/team/${teamId}`)
    };

    const handleMatchupClick = async (gameId : string)=>{
        navigate(`/matchup/${gameId}`)
    };

    const headerTeams = getTeams()
    const headerProjectedGames = getProjectedGamesInNextWeekTable(date);


    const handleSubmitFeedback = async (feedback : string)=>{
        await submitFeedback({
            feedback,
            uid : user?.uid||"notloggedin",
            page : window.location.toString()
        });
    }

    const handleAccountClick = async ()=>{
        navigate("/self/overview");
    }

    return (
        <div
        className={[...!props.overrideClasses ? PLAYGROUND_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? PLAYGROUND_STYLE : {}, ...props.style}}>
            <Bracket

                bracketByRound={bracketByRound}
            

                builder={true}
                teams={getTeams()}
                

                onWhich={async (which)=>{
                    navigate("/" + which);
                }}

                onTeamClick={handleTeamClick}
                onMatchupClick={handleMatchupClick}


                headerTeams={headerTeams}
                headerProjectedGames={headerProjectedGames && Object.values(headerProjectedGames)}

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

                onMidwestTeamSelect={_selectMidwestBracketTeam}
                onFfMidwestTeamSelect={_selectFfMidwestBracketTeam}

                onSouthTeamSelect={_selectSouthBracketTeam}
                onFfSouthTeamSelect={_selectFfSouthBracketTeam}

                onEastTeamSelect={_selectEastBracketTeam}
                onFfEastTeamSelect={_selectFfEastBracketTeam}

                onWestTeamSelect={_selectWestBracketTeam}
                onFfWestTeamSelect={_selectFfWestBracketTeam}

            />
        </div>
    )
};