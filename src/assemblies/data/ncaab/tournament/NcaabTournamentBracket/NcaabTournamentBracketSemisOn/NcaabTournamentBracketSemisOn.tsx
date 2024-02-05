import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../../components';
import { ontology } from '../../../../../../util';
import { Bracket } from '../../Bracket';

export const NCAAB_TOURNAMENT_BRACKET_SEMIS_ON_CLASSNAMES : string[] = [
    "p-8"
 ];
export const NCAAB_TOURNAMENT_BRACKET_SEMIS_ON_STYLE : React.CSSProperties = {
    display : "grid",
    gridTemplateColumns : "1fr 1fr 1fr",
    alignItems : "center",
    alignContent : "center",
    height : "200px",
    top : "200px",
    position : "relative"
};

export type NcaabTournamentBracketSemisOnProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;

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
};

export const NcaabTournamentBracketSemisOn : FC<NcaabTournamentBracketSemisOnProps>  = (props) =>{

    return (
        <Wrapper
        viusage='backdrop'
        classNames={[...!props.overrideClasses ? NCAAB_TOURNAMENT_BRACKET_SEMIS_ON_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? NCAAB_TOURNAMENT_BRACKET_SEMIS_ON_STYLE : {}, ...props.style}}>
            <div>
                <Bracket 
                    bracket={props.leftSemis}
                    getBracketGameView={props.getLeftSemisGameView}
                    setBracketGameWinner={props.setLeftSemisGameWinner}/>
            </div>
            <div>
                <h2 className='text-2xl'>Final Four</h2>
                <Bracket bracket={props.final} centerAll
                    setBracketGameWinner={props.setFinalGameWinner}
                    getBracketGameView={props.getFinalGameView}/>
            </div>
            <div>
                <Bracket 
                    bracket={props.rightSemis} mirror
                    getBracketGameView={props.getRightSemisGameView}
                    setBracketGameWinner={props.setRightSemisGameWinner}/>
            </div>
        </Wrapper>
    )
};