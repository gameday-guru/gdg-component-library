import React, {FC, ReactElement} from 'react';
import { ontology } from '../../util';
import { MainSidebar } from '../../assemblies/meta';
import { NcaabTournamentBracket } from '../../assemblies/data/ncaab/tournament/NcaabTournamentBracket';
import { BracketContent } from '../../assemblies/meta/content/BracketContent/BracketContent';
import { BracketByRoundlike } from '../../util/rpc';

export const HOME_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
    "bg-black-500"
];
export const HOME_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type BracketProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    gameOfTheDay ? : ontology.ProjectedGamelike;
    top25Games ? : ontology.ProjectedGamelike[];
    apTop25Teams ? : ontology.RankTrendTeamlike[];
    gdgTop25Teams ? : ontology.RankTrendTeamlike[];
    onWhich ? : (which : "home" | "team" | "matchups" | "bracket")=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];

    ffEast ? : ontology.SparseBracketlike;
    getFfEastBracketGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setFfEastBracketGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;

    ffWest ? : ontology.SparseBracketlike;
    getfFWestBracketGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setFfWestBracketGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;

    ffMidwest ? : ontology.SparseBracketlike;
    getFfMidwestBracketGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setFfMidwestBracketGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;

    ffSouth ? : ontology.SparseBracketlike;
    getFfSouthBracketGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setFfSouthBracketGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;


    east ? : ontology.SparseBracketlike;
    getEastBracketGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setEastBracketGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;

    west ? : ontology.SparseBracketlike;
    getWestBracketGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setWestBracketGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;

    midwest ? : ontology.SparseBracketlike;
    getMidwestBracketGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setMidwestBracketGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;

    south ? : ontology.SparseBracketlike;
    getSouthBracketGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setSouthBracketGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;

    leftSemis ? : ontology.SparseBracketlike;
    getLeftSemisGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setLeftSemisGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;

    rightSemis ? : ontology.SparseBracketlike;
    getRightSemisGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setRightSemisGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;

    final ? : ontology.SparseBracketlike;
    getFinalGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setFinalGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;


    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;

    builder ? : boolean;
    onTeamSelect ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string,
        top : boolean
    })=>Promise<void>;
    teams ? : ontology.Teamlike[];

    onMidwestTeamSelect ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string,
        top : boolean
    })=>Promise<void>;
    onFfMidwestTeamSelect ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string,
        top : boolean
    })=>Promise<void>;

    onWestTeamSelect ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string,
        top : boolean
    })=>Promise<void>;
    onFfWestTeamSelect ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string,
        top : boolean
    })=>Promise<void>;


    onEastTeamSelect ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string,
        top : boolean
    })=>Promise<void>;
    onFfEastTeamSelect ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string,
        top : boolean
    })=>Promise<void>;

    onSouthTeamSelect ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string,
        top : boolean
    })=>Promise<void>;
    onFfSouthTeamSelect ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string,
        top : boolean
    })=>Promise<void>;

    templateOptions ? : {
        [key : string] : string
    }
    onTemplateSelect ? : (id : string)=>Promise<void>

    bracketByRound ? : BracketByRoundlike;
    
};

export const Bracket : FC<BracketProps>  = (props) =>{



    return (
        <div
        className={[...!props.overrideClasses ? HOME_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HOME_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MainSidebar
                onFeedbackSubmit={props.onFeedbackSubmit}
                onWhich={props.onWhich} 
                which='bracket'
                style={{
                    height : '100%'
                }}/>
            </div>
            <div style={{
                height : '100%',
                width : '100%',
                overflowY : "scroll"
            }}>
                <BracketContent {...props}/>
            </div>
        </div>
    )
};