import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../../components';
import { Bracket } from '../../Bracket';
import { ontology } from '../../../../../../util';

export const NCAAB_TOURNAMENT_FIRST_FOUR_CLASSNAMES : string[] = [
    "p-8"
];
export const NCAAB_TOURNAMENT_FIRST_FOUR_STYLE : React.CSSProperties = {
    display : "grid",
    gridTemplateColumns : "1fr 1fr 1fr 1fr",
    alignItems : "center",
    alignContent : "center",
    position : "relative",
};

export type NcaabTournamentFirstFourProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;

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
};

export const NcaabTournamentFirstFour : FC<NcaabTournamentFirstFourProps>  = (props) =>{

    return (
        <Wrapper
        viusage='backdrop'
        classNames={[...!props.overrideClasses ? NCAAB_TOURNAMENT_FIRST_FOUR_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? NCAAB_TOURNAMENT_FIRST_FOUR_STYLE : {}, ...props.style}}>
            <div style={{
                display : "grid",
                gridTemplateColumns : "1fr 3fr",
                alignContent : "center",
                alignItems : "center"
            }}>
                <div className='text-2xl'>
                    S
                </div>
                <Bracket 
                    onTeamSelect={props.onFfSouthTeamSelect}
                    teams={props.teams}
                    builder={props.builder}
                    rowHeight={"auto"}
                    bracket={props.ffSouth}
                    getBracketGameView={props.getFfSouthBracketGameView}
                    setBracketGameWinner={props.setFfSouthBracketGameWinner}/>
            </div>
            <div style={{
                display : "grid",
                gridTemplateColumns : "1fr 3fr",
                alignContent : "center",
                alignItems : "center"
            }}>
                <div className='text-2xl'>
                    MW
                </div>
                <Bracket 
                    onTeamSelect={props.onFfMidwestTeamSelect}
                    teams={props.teams}
                    builder={props.builder}
                    rowHeight={"auto"}
                    bracket={props.ffMidwest}
                    getBracketGameView={props.getFfMidwestBracketGameView}
                    setBracketGameWinner={props.setFfMidwestBracketGameWinner}/>
            </div>
            <div style={{
                display : "grid",
                gridTemplateColumns : "1fr 3fr",
                alignContent : "center",
                alignItems : "center"
            }}>
                <div className='text-2xl'>
                    E
                </div>
                <Bracket 
                    onTeamSelect={props.onFfEastTeamSelect}
                    teams={props.teams}
                    bracket={props.ffEast}
                    builder={props.builder}
                    rowHeight={"auto"}
                    setBracketGameWinner={props.setFfEastBracketGameWinner}
                    getBracketGameView={props.getFfEastBracketGameView}/>
            </div>
            <div style={{
                display : "grid",
                gridTemplateColumns : "1fr 3fr",
                alignContent : "center",
                alignItems : "center"
            }}>
                <div className='text-2xl'>
                    W
                </div>
                <Bracket   
                    onTeamSelect={props.onFfWestTeamSelect}
                    teams={props.teams}
                    builder={props.builder}
                    rowHeight={"auto"}
                    bracket={props.ffWest}
                    getBracketGameView={props.getfFWestBracketGameView}
                    setBracketGameWinner={props.setFfWestBracketGameWinner}/>
            </div>
        </Wrapper>
    )
};