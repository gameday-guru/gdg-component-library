import React, { FC, ReactElement } from 'react';
import { ontology } from '../../../../../util';
import { SideTeam } from '../../team/SideTeam';
import { BracketMatchup } from '../BracketMatchup/BracketMatchup';
import { Orientation } from '../util';
import { generate } from 'shortid';
import { BracketBlank } from '../BracketBlank';
import { BracketEntry } from '../BracketEntry/BracketEntry';

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
    onBracketUpdate ? : (
        update : (bracket : ontology.SparseBracketlike)=>Promise<ontology.SparseBracketlike>
    )=>Promise<void>;
    mirror ? : boolean;
    getMockProjection ? : (args : {
        home_team_id : string,
        away_team_id : string,
        neutral : boolean
    })=>ontology.ProjectionEntrylike | undefined;
    getProbability ? : (args : {
        home_team_id : string,
        away_team_id : string,
        pos : {
            rowNo : number,
            colNo : number
        }
    })=>{
        homeProbability ? : number,
        awayProbability ? : number, 
    }
};

export const Bracket: FC<BracketProps> = (props) => {

    const _bracket = props.bracket || ontology.Mock4TeamBracket;

    // based on the dimensions of the bracket and some display paramters,
    // you will need to compute the number of grid columns and rows
    // if you're straight-up mapping the sparse matrix to the display
    // then this should be the dimensions of the sparse matrix
    const height = _bracket.length;
    const width = _bracket[0].length;
    const rowTemplate: string = Array(_bracket.length).fill("70px").join(" ");
    const colTemplate: string = Array(_bracket[0].length).fill("1fr").join(" ");
    const continuation = Array(width).fill(false);

    const bracketEntries = _bracket.map((row, rowNo,) => {
        
        return row.map((bracketEntry, colNo) => {

            if (bracketEntry) {
                continuation[colNo] = !continuation[colNo];
            }

            const offset = colNo > 0 ? 2 ** (colNo - 1) : colNo; 
            const above = _bracket[rowNo - offset]?.[colNo - 1];
            const below = _bracket[rowNo + offset]?.[colNo - 1];

            if(!bracketEntry) {
                return <BracketBlank 
                key={generate()}
                style={{
                    height : "1px",
                    overflow : "visible"
                }} continuation={ continuation[colNo] }/>
            }

            const teamOptionsAbove : {[key : string] : ontology.Teamlike} = {

            };
            const teamOptionsBelow : {[key : string] : ontology.Teamlike} = {

            };
            if (colNo > 0){
    
                if(above?.userPick?.home)
                    teamOptionsAbove[
                        above?.userPick?.home.TeamID.toLocaleString()
                    ] = above?.userPick?.home;
                if(above?.userPick?.away)
                    teamOptionsAbove[
                        above?.userPick?.away.TeamID.toLocaleString()
                    ] = above?.userPick?.away;
                if(above?.actualGame?.home)
                    teamOptionsAbove[
                        above?.actualGame?.home.TeamID.toLocaleString()
                    ] = above?.actualGame?.home;
                if(above?.actualGame?.away)
                    teamOptionsAbove[
                        above?.actualGame?.away.TeamID.toLocaleString()
                    ] = above?.actualGame?.away;

                
                if(below?.userPick?.home)
                    teamOptionsBelow[
                        below?.userPick?.home.TeamID.toLocaleString()
                    ] = below?.userPick?.home;
                if(below?.userPick?.away)
                    teamOptionsBelow[
                        below?.userPick?.away.TeamID.toLocaleString()
                    ] = below?.userPick?.away;
                if(below?.actualGame?.home)
                    teamOptionsBelow[
                        below?.actualGame?.home.TeamID.toLocaleString()
                    ] = below?.actualGame?.home;
                if(below?.actualGame?.away)
                    teamOptionsBelow[
                        below?.actualGame?.away.TeamID.toLocaleString()
                    ] = below?.actualGame?.away;

            }


            const handleMatchupUpdate = async (
                update : (matchup : ontology.BracketCorrectedMatchuplike)=>Promise<ontology.BracketCorrectedMatchuplike>
            )=>{

                if(props.onBracketUpdate){

                    await props.onBracketUpdate(async (bracket)=>{

                        if(bracketEntry)
                            bracket[rowNo][colNo] 
                            = await update(bracketEntry);

                        return [
                            ...bracket
                        ]

                    });

                }


            }

            const _getProbability = (args : {
                home_team_id : string,
                away_team_id : string,
            }) : {
                homeProbability ? : number,
                awayProbability ? : number, 
            }=>{


                if(!props.getProbability) return {};

                return props.getProbability({
                    ...args,
                    pos : {
                        rowNo,
                        colNo
                    }
                });

            }

            return <BracketEntry 
                getProbability={_getProbability}
                getMockProjection={props.getMockProjection}
                aboveNeedsSelection={colNo > 0 && !above?.userPick && !above?.actualGame}
                belowNeedsSelection={colNo > 0 && !below?.userPick && !below?.actualGame}
                onMatchupUpdate={handleMatchupUpdate}
                teamsAbove={teamOptionsAbove}
                teamsBelow={teamOptionsBelow}
                matchup={bracketEntry} 
                key={generate()} 
                inheritance={colNo > 0} 
                up={!continuation[colNo]} />;

        })

    }).flat();

    return (
        <div
            className={[...!props.overrideClasses ? BRACKET_CLASSNAMES : [], ...props.classNames || []].join(" ")}
            style={{
                ...!props.overrideStyle ? {
                    ...BRACKET_STYLE,
                    gridTemplateColumns: colTemplate,
                    gridTemplateRows: rowTemplate
                } : {}, ...props.style
            }}>
            {bracketEntries}
        </div>
    )
};