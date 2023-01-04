import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { MensCollegeBasketballHeader } from '../../header';
import { ontology, viusage } from '../../../../util';
import { Matchups } from '../../../data/ncaab/matchup/Matchups';

export const MATCHUPS_CONTENT_CONTAINER_CLASSNAMES : string[] = [ ];
export const MATCHUPS_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
    height : '100%',
    overflow : 'scroll'
};

export const MATCHUPS_CONTENT_INNER_CLASSNAMES : string[] = [ ];
export const MATCHUPS_CONTENT_INNER_STYLE : React.CSSProperties = {
};

export type MatchupsContentProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    gamesThisWeek ? : ontology.ProjectedGamelike[];
    allUpcomingGames ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];
}

export const MatchupsContent : FC<MatchupsContentProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? MATCHUPS_CONTENT_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? MATCHUPS_CONTENT_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? MATCHUPS_CONTENT_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? MATCHUPS_CONTENT_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <MensCollegeBasketballHeader
                    onTeamClick={props.onTeamClick}
                    onMatchupClick={props.onMatchupClick}
                    teams={props.headerTeams}
                    projectedGames={props.headerProjectedGames}/>
                </div>
                <div>
                    <Matchups
                    onMatchupClick={props.onMatchupClick}
                    onTeamClick={props.onTeamClick}
                    allUpcomingGames={props.allUpcomingGames}
                    gamesThisWeek={props.gamesThisWeek}/>
                </div>
            </div>
        </Wrapper>
    )
};