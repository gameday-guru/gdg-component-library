import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { MensCollegeBasketballHeader } from '../../header';
import { NcaabMensOverview } from '../../../data/ncaab/overview/NcaabMensOverview/NcaabMensOverview';
import { ontology } from '../../../../util';
import { NcaabTournamentBracket } from '../../../data/ncaab/tournament/NcaabTournamentBracket';
import { NcaaMarchMadnessTemplatedBracket } from '../../../data/ncaab/tournament/NcaabMarchMadnessTemplatedBracket/NcaaMarchMadnessTemplatedBracket';
import { BracketByRoundlike } from '../../../../util/rpc';
import { Button } from '../../../../components';

export const HOME_CONTENT_CONTAINER_CLASSNAMES : string[] = [ ];
export const HOME_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
};

export const HOME_CONTENT_INNER_CLASSNAMES : string[] = [ ];
export const HOME_CONTENT_INNER_STYLE : React.CSSProperties = {
    
};

export type MyBracketsContentProps = {
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

    brackets ? : ontology.IdSparseBracketlike[];
    onBracketIdClick ? : (id : string)=>Promise<void>;
    teams ? : {[key : string] : ontology.Teamlike}

};

export const MyBracketsContent : FC<MyBracketsContentProps>  = (props) =>{

    const bracketEntries = (props.brackets||[]).map((bracket)=>{

        return <Button viusage={'navigate'} style={{
            // textAlign : "left"
        }} onClick={async ()=>{
            if(props.onBracketIdClick){
                await props.onBracketIdClick(bracket._id);
            }
        }}>
            {bracket.champion && props.teams?.[bracket.champion] 
            ? `${props.teams?.[bracket.champion].School} wins!`
            : "No winner"} ({bracket._id})
        </Button>

    });

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
                <div className='p-4' style={{
                    textAlign : "left"
                }}>
                    <h2 className='text-2xl'>My Brackets</h2>
                    <hr/>
                    <br/>
                    <div className='gap-2' style={{
                        display : "grid",
                        alignContent : "center"
                    }}>
                    {bracketEntries}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};