import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { Bracket } from '../Bracket';
import { NcaabTournamentBracketSemisOn } from './NcaabTournamentBracketSemisOn/NcaabTournamentBracketSemisOn';
import { NcaabTournamentFirstFour } from './NcaabTournamentFirstFour/NcaabTournamentFirstFour';
import { BracketByRoundlike } from '../../../../../util/rpc';
import { NcaabTournamentByRoundByRegion } from '../NcaabTournamentByRoundByRegion/NcaabTournamentByRoundByRegion';

export const NCAAB_TOURNAMENT_BRACKET_CLASSNAMES : string[] = [ 
    "gap-4"
];
export const NCAAB_TOURNAMENT_BRACKET_STYLE : React.CSSProperties = {
    display : "grid",
    gridTemplateColumns : "1fr",
    // gridTemplateRows : "1fr 1fr",
    position : "relative"
};

export type NcaabTournamentBracketProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;


    firstEast ? : ontology.SparseBracketlike;
    firstWest ? : ontology.SparseBracketlike;
    firstMidwest ? : ontology.SparseBracketlike;
    firstSouth ? : ontology.SparseBracketlike;
    teams ? : ontology.Teamlike[];
    builder ? : boolean;


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

    bracketByRound ? : BracketByRoundlike;

};

export const NcaabTournamentBracket : FC<NcaabTournamentBracketProps>  = (props) =>{

    return (
        <Wrapper
        viusage='backdrop'
        classNames={[...!props.overrideClasses ? NCAAB_TOURNAMENT_BRACKET_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? NCAAB_TOURNAMENT_BRACKET_STYLE : {}, ...props.style}}>
            <div style={{
                padding : 8,
                display : "grid",
                justifyItems : "center"
            }}> 
                <div 
                style={{
                    // width : "300px",
                    fontSize : 12,
                    // textAlign : "left"
                    color : "#666666"
                }}>
                    {/*<p>
                        <b>Proj. =</b> Gameday Guru's score projection. 
                    </p>
                    <p>
                        <b>W% =</b> The team's odds to win the game at hand.
                    </p>
                    <p>
                        <b>T% =</b> The team's odds to win the game at hand and all previous games.
                    </p>
                    <p>
                        <b>Score =</b> The actual score of the game.
            </p>*/}
                </div>
                <div>
                    <h2 className='text-2xl'>First Four</h2>
                </div>
            </div>
            <div>
                <NcaabTournamentFirstFour
                    {...props}/>
            </div>
            <div className='gap-2' style={{
                display : "grid",
                gridTemplateColumns : "1fr 1fr"
            }}>
                <div style={{
                    position : "relative"
                }}>
                    <Bracket
                        onTeamSelect={props.onSouthTeamSelect}
                        teams={props.teams}
                        builder={props.builder}
                        last='down'
                        // mirror
                        bracket={props.south}
                        getBracketGameView={props.getSouthBracketGameView}
                        setBracketGameWinner={props.setSouthBracketGameWinner}/>
                        <div style={{
                            position : "absolute",
                            width : 0,
                            height : 0,
                            overflow : "visible",
                            display : "grid",
                            alignContent : "center",
                            alignItems : "center",
                            top : "50%",
                            left : "50%"
                        }}> 
                            <h2 className='text-xl'>South</h2>
                        </div>
                </div>
                <div style={{
                    position : "relative"
                }}>
                    <Bracket
                        mirror
                        // rowHeight={"800px"}
                        onTeamSelect={props.onMidwestTeamSelect}
                        teams={props.teams}
                        builder={props.builder}
                        last='down'
                        bracket={props.midwest}
                        getBracketGameView={props.getMidwestBracketGameView}
                        setBracketGameWinner={props.setMidwestBracketGameWinner}/>
                    <div style={{
                        position : "absolute",
                        width : 0,
                        height : 0,
                        overflow : "visible",
                        display : "grid",
                        alignContent : "center",
                        alignItems : "center",
                        top : "50%",
                        left : "50%"
                    }}> 
                        <h2 className='text-xl'>Midwest</h2>
                    </div>
                </div>
            </div>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
            <div  className='gap-2' style={{
                display : "grid",
                gridTemplateColumns : "1fr 1fr "
            }}>
                <div style={{
                    position : "relative"
                }}>
                    <Bracket
                        // mirror
                        onTeamSelect={props.onEastTeamSelect}
                        teams={props.teams}
                        builder={props.builder}
                        last='up'
                        bracket={props.east}
                        getBracketGameView={props.getEastBracketGameView}
                        setBracketGameWinner={props.setEastBracketGameWinner}/>
                    <div style={{
                        position : "absolute",
                        width : 0,
                        height : 0,
                        overflow : "visible",
                        display : "grid",
                        alignContent : "center",
                        alignItems : "center",
                        top : "50%",
                        left : "50%"
                    }}> 
                        <h2 className='text-xl'>East</h2>
                    </div>
                </div>
                <div style={{
                    position : "relative"
                }}>
                    <Bracket
                        onTeamSelect={props.onWestTeamSelect}
                        teams={props.teams}
                        builder={props.builder}
                        last='up'
                        mirror
                        bracket={props.west}
                        getBracketGameView={props.getWestBracketGameView}
                        setBracketGameWinner={props.setWestBracketGameWinner}/>
                    <div style={{
                        position : "absolute",
                        width : 0,
                        height : 0,
                        overflow : "visible",
                        display : "grid",
                        alignContent : "center",
                        alignItems : "center",
                        top : "50%",
                        left : "50%"
                    }}> 
                        <h2 className='text-xl'>West</h2>
                    </div>
                </div>
            </div>
            <div style={{
                 position : "absolute",
                 width : 0,
                 height : 0,
                 overflow : "visible",
                 display : "grid",
                 alignContent : "center",
                 alignItems : "center",
                 justifyContent : "center",
                 justifyItems : "center",
                 top : "50%",
                 left : "50%"
            }}>
                <NcaabTournamentBracketSemisOn
                    style={{
                        width : "600px"
                    }}
                    leftSemis={props.leftSemis} 
                    getLeftSemisGameView={props.getLeftSemisGameView}
                    setLeftSemisGameWinner={props.setLeftSemisGameWinner}

                    rightSemis={props.rightSemis}
                    getRightSemisGameView={props.getRightSemisGameView}
                    setRightSemisGameWinner={props.setRightSemisGameWinner}

                    final={props.final}
                    getFinalGameView={props.getFinalGameView}
                    setFinalGameWinner={props.setFinalGameWinner}/>
            </div>
           
        </Wrapper>
    )
};