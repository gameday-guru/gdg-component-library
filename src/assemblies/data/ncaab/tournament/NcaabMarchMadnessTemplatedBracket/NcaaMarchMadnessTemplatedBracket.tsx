import React, {FC, ReactElement} from 'react';
import { Cropdown } from '../../../../../components/input/select/Cropdown';
import { ontology } from '../../../../../util';
import { NcaabTournamentBracket } from '../NcaabTournamentBracket';
import { NcaabTournamentByRoundByRegion } from '../NcaabTournamentByRoundByRegion/NcaabTournamentByRoundByRegion';
import { BracketByRoundlike } from '../../../../../util/rpc';

export const NCAA_MARCH_MADNESS_TEMPLATED_BRACKET_CLASSNAMES : string[] = [ ];
export const NCAA_MARCH_MADNESS_TEMPLATED_BRACKET_STYLE : React.CSSProperties = {
    display : "grid",
    alignContent : "center",
    alignItems : "center"
};

export type NcaaMarchMadnessTemplatedBracketProps = {
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

    templateOptions ? : {
        [key : string] : string
    }
    onTemplateSelect ? : (id : string)=>Promise<void>
    bracketByRound ? : BracketByRoundlike;

};

export const NcaaMarchMadnessTemplatedBracket : FC<NcaaMarchMadnessTemplatedBracketProps>  = (props) =>{

    const teamsTable = (props.teams||[]).reduce((agg, team)=>{
        return {
            ...agg,
            [team.TeamID.toString()] : team
        }
    }, {})

    const currentYear = (new Date). getFullYear();

    const _templateOptions = props.templateOptions||{
        "zObp37IyAJ2SOEcAkV2A" : `${currentYear} Bracket Round of 64`
    };

    const Options : {[key : string] : React.ReactNode} = {};
    for(const [id, Label] of Object.entries(_templateOptions))
        Options[id] = <div>
            <h2 className='text-xl'>{Label}</h2>
        </div>

    const Selection = <Cropdown 
        style={{
            width : "300px"
        }}
        selected='zObp37IyAJ2SOEcAkV2A'
        handleOptionSelect={props.onTemplateSelect}
        options={Options}/>

    return (
        <div
        className={[...!props.overrideClasses ? NCAA_MARCH_MADNESS_TEMPLATED_BRACKET_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAA_MARCH_MADNESS_TEMPLATED_BRACKET_STYLE : {}, ...props.style}}>
            <div>
                <h2 className='text-2xl'>NCAAB Men's {currentYear} Tournament</h2>
            </div>
            <br/>
            <div style={{
                margin : "0 auto"
            }}>
                {Selection}
            </div>
            <NcaabTournamentBracket {...props}/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <NcaabTournamentByRoundByRegion teams={teamsTable} classNames={["p-4"]} bracketByRound={props.bracketByRound}/> */}
        </div>
    )
};