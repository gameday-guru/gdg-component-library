import React, { FC, ReactElement } from 'react';
import { ontology } from '../../../../../util';
import { SideTeam } from '../../team/SideTeam';
import { Orientation } from '../util';
import { generate } from 'shortid';
import { BracketBlank } from '../BracketBlank';
import { BracketMatchupStackdown } from '../BracketMatchupStackdown/BracketMatchupStackdown';
import { BracketEntry } from '../BracketEntry/BracketEntry';
import { shouldBeBracketEntry, shouldLeaderBeUp } from '../../../../../util/ontology';
import { Wrapper } from '../../../../../components';

export const BRACKET_CLASSNAMES: string[] = [
    "grid"
];
export const BRACKET_STYLE: React.CSSProperties = {

};

export type BracketProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    bracket?: ontology.SparseBracketlike;
    getBracketGameView? : (pos : {
        rowNo : number,
        colNo : number
    })=>(ontology.BracketGameViewlike|undefined);
    setBracketGameWinner ? : (args : {
        pos : {
            rowNo : number,
            colNo : number
        },
        id : string
    })=>Promise<void>;
    mirror ? : boolean;
    last ? : "down" | "up" | "end" | "agnostic";
    centerAll ? : boolean;
    rowHeight ? : React.CSSProperties["height"];
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
};

export const Bracket: FC<BracketProps> = (props) => {

    const _bracket = props.bracket || ontology.Mock4TeamBracket;
    const _rowHeight = props.rowHeight||"100px";

    // based on the dimensions of the bracket and some display paramters,
    // you will need to compute the number of grid columns and rows
    // if you're straight-up mapping the sparse matrix to the display
    // then this should be the dimensions of the sparse matrix
    const height = _bracket.length;
    const width = _bracket[0].length;
    const rowTemplate: string = Array(height).fill(_rowHeight).join(" ");
    const colTemplate: string = Array(width).fill("1fr").join(" ");
    const continuation = Array(width).fill(false);

    const bracketEntries = _bracket.map((row, rowNo,) => {

        const _row = props.mirror ? [...row].reverse() : row;
        
        return _row.map((bracketEntry, _colNo) => {

            const colNo = props.mirror ? width - _colNo - 1 : _colNo;

            let up = shouldLeaderBeUp({ rowNo, colNo});
            let noLeader = false;
            let continues = continuation[colNo]; 
            if(colNo === width - 1){

                switch(props.last){

                    case "down" : {

                        up = false;
                        break;

                    }

                    case "up" : {

                        up = true;
                        continues = !continues;
                        break

                    }

                    case "end" : {

                        noLeader = true;
                        continues = false;
                        break;

                    }

                    default : {
                        noLeader = true;
                        continues = false;
                        break;
                    }

                }

            }

            if(!shouldBeBracketEntry({rowNo, colNo})) 
                return <BracketBlank 
                    reverse={props.mirror}
                    key={generate()}
                    style={{
                        height : "1px",
                        overflow : "visible"
                    }} continuation={continues}/>
            

            continuation[colNo] = !continuation[colNo];
            const offset = colNo > 0 ? 2 ** (colNo - 1) : colNo; 
            const above = _bracket[rowNo - offset]?.[colNo - 1];
            const below = _bracket[rowNo + offset]?.[colNo - 1];

            const getBracketGameView = () : ontology.BracketGameViewlike|undefined =>{

                if(props.getBracketGameView)
                    return props.getBracketGameView({
                        rowNo,
                        colNo
                    });

                return undefined;

            }

            const setBracketGameWinner = async (id : string)=>{

                if(props.setBracketGameWinner)
                    await props.setBracketGameWinner({
                        pos : {
                            rowNo,
                            colNo
                        },
                        id
                    })

            }

            const handleTeamSelect = async (id : string, top : boolean)=>{
                if(props.onTeamSelect)
                    await props.onTeamSelect({
                        pos : {
                            rowNo,
                            colNo
                        },
                        id,
                        top
                    })
            }

            
            return <BracketEntry
                builder={colNo === 0 && props.builder}
                center={props.centerAll}
                reverse={props.mirror}
                key={generate()}
                inheritance={colNo > 0} 
                up={up}
                noLeader={noLeader}
                onTeamSelect={handleTeamSelect}
                onWinnerSelect={setBracketGameWinner}
                getBracketGameView={getBracketGameView}
                teams={props.teams}/>

        })

    }).flat();

    return (
        <Wrapper
            viusage='backdrop'
            classNames={[...!props.overrideClasses ? BRACKET_CLASSNAMES : [], ...props.classNames || []]}
            style={{
                ...!props.overrideStyle ? {
                    ...BRACKET_STYLE,
                    gridTemplateColumns: colTemplate,
                    gridTemplateRows: rowTemplate,
                    borderColor : "#333333"
                } : {}, ...props.style
            }}>
            {bracketEntries}
        </Wrapper>
    )
};