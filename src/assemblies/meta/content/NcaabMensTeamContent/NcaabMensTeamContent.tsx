import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { MensCollegeBasketballHeader } from '../../header';
import { NcaabMensOverview } from '../../../data/ncaab/overview/NcaabMensOverview/NcaabMensOverview';
import { Teams } from '../../../data/ncaab/team/Teams';
import { FilterModal } from '../../../../components/output/containers/filter/FilterModal';
import { ontology } from '../../../../util';

export const MENS_NCAAB_TEAM_CONTENT_CONTAINER_CLASSNAMES : string[] = [

 ];
export const MENS_NCAAB_TEAM_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
    height : '100%',
    overflow : 'scroll'

};

export const MENS_NCAAB_TEAM_CONTENT_INNER_CLASSNAMES : string[] = [

];
export const MENS_NCAAB_TEAM_CONTENT_INNER_STYLE : React.CSSProperties = {
};

export type MensNcaabTeamContentProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    tableEntries ? : ontology.EfficiencyEntrylike[];
    teams ? : { [key : string] : ontology.Teamlike };
    topOffensiveTeams ? : ontology.Teamlike[];
    topOffensiveTeamsStats ? : React.ReactNode[];
    topDefensiveTeams ? : ontology.Teamlike[];
    topDefensiveTeamsStats ? : React.ReactNode[];
    onBuildMatchup ? : (home : string, away : string)=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
};

export const MensNcaabTeamContent : FC<MensNcaabTeamContentProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? MENS_NCAAB_TEAM_CONTENT_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? MENS_NCAAB_TEAM_CONTENT_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? MENS_NCAAB_TEAM_CONTENT_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? MENS_NCAAB_TEAM_CONTENT_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <MensCollegeBasketballHeader
                    onTeamClick={props.onTeamClick}
                    onMatchupClick={props.onMatchupClick}
                    teams={props.headerTeams}
                    projectedGames={props.headerProjectedGames}/>
                </div>
                <div>
                    <Teams 
                    onMatchupClick={props.onMatchupClick}
                    onTeamClick={props.onTeamClick}
                    onBuildMatchup={props.onBuildMatchup}
                    topDefensiveTeams={props.topDefensiveTeams}
                    topDefensiveTeamsStats={props.topDefensiveTeamsStats}
                    topOffensiveTeams={props.topOffensiveTeams}
                    topOffensiveTeamsStats={props.topOffensiveTeamsStats}
                    tableEntries={props.tableEntries}
                    teams={props.teams}/>
                </div>
            </div>
        </Wrapper>
    )
};