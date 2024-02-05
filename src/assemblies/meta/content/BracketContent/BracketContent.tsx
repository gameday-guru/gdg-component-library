import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { MensCollegeBasketballHeader } from '../../header';
import { NcaabMensOverview } from '../../../data/ncaab/overview/NcaabMensOverview/NcaabMensOverview';
import { ontology } from '../../../../util';
import { NcaabTournamentBracket } from '../../../data/ncaab/tournament/NcaabTournamentBracket';
import { NcaaMarchMadnessTemplatedBracket } from '../../../data/ncaab/tournament/NcaabMarchMadnessTemplatedBracket/NcaaMarchMadnessTemplatedBracket';
import { BracketByRoundlike } from '../../../../util/rpc';

export const HOME_CONTENT_CONTAINER_CLASSNAMES : string[] = [ ];
export const HOME_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
};

export const HOME_CONTENT_INNER_CLASSNAMES : string[] = [ ];
export const HOME_CONTENT_INNER_STYLE : React.CSSProperties = {
    
};

export type BracketContentProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    gameOfTheDay ? : ontology.ProjectedGamelike;
    top25Games ? : ontology.ProjectedGamelike[];
    apTop25Teams ? : ontology.RankTrendTeamlike[];
    gdgTop25Teams ? : ontology.RankTrendTeamlike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
    onBlogClick ? : (id : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;

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

    builder ? : boolean;
    
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

    teams ? : ontology.Teamlike[];
    rowHeight ? : React.CSSProperties["height"]

    templateOptions ? : {
        [key : string] : string
    }
    onTemplateSelect ? : (id : string)=>Promise<void>

    bracketByRound ? : BracketByRoundlike;

};

export const BracketContent : FC<BracketContentProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? HOME_CONTENT_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? HOME_CONTENT_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? HOME_CONTENT_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? HOME_CONTENT_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <MensCollegeBasketballHeader
                    onAccountClick={props.onAccountClick}
                    onTeamClick={props.onTeamClick}
                    onMatchupClick={props.onMatchupClick}
                    teams={props.headerTeams}
                    projectedGames={props.headerProjectedGames}/>
                </div>
                <div className='p-2'>
                    <NcaaMarchMadnessTemplatedBracket {...props}/>
                    <div style={{
                        height : "200px"
                    }}>

                    </div>
                </div>
            </div>
        </Wrapper>
    )
};