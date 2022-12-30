import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { MensCollegeBasketballHeader } from '../../header';
import { viusage } from '../../../../util';
import { Matchup } from '../../../data/ncaab/matchup/Matchup';
import { ontology } from '../../../../util';

export const MATCHUPS_CONTENT_CONTAINER_CLASSNAMES : string[] = [ ];
export const MATCHUPS_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
    height : '100%',
    overflow : 'scroll'
};

export const MATCHUPS_CONTENT_INNER_CLASSNAMES : string[] = [ ];
export const MATCHUPS_CONTENT_INNER_STYLE : React.CSSProperties = {
};

export type MatchupContentProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    homeDistro ? : ontology.PointDistributionlike;
    home ? : ontology.Teamlike;
    homeEfficiency ? : ontology.EfficiencyEntrylike;
    awayDistro ? : ontology.PointDistributionlike;
    away ? : ontology.Teamlike;
    awayEfficiency ? : ontology.EfficiencyEntrylike;
    gameProjection ? : ontology.ProjectionEntrylike;
    gameProjections ? : ontology.ProjectionEntrylike[];
    leagueAverages ? : ontology.LeagueAverageslike;
    homeGameProjections ? : ontology.ProjectedGamelike[];
    awayGameProjections ? : ontology.ProjectedGamelike[];
    game ? : ontology.GameByDatelike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const MatchupContent : FC<MatchupContentProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? MATCHUPS_CONTENT_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? MATCHUPS_CONTENT_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? MATCHUPS_CONTENT_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? MATCHUPS_CONTENT_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <MensCollegeBasketballHeader/>
                </div>
                <div>
                    <Matchup 
                    onMatchupClick={props.onMatchupClick}
                    onTeamClick={props.onTeamClick}
                    game={props.game}
                    home={props.home}
                    homeDistro={props.homeDistro}
                    homeEfficiency={props.homeEfficiency}
                    away={props.away}
                    awayDistro={props.awayDistro}
                    awayEfficiency={props.awayEfficiency}
                    gameProjection={props.gameProjection}
                    gameProjections={props.gameProjections}
                    leagueAverages={props.leagueAverages}
                    homeGameProjections={props.homeGameProjections}
                    awayGameProjections={props.awayGameProjections}/>
                </div>
            </div>
        </Wrapper>
    )
};