import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { MatchupComparison } from '../MatchupComparison';
import { TeamMatchups } from '../TeamMatchups';

export const MATCHUP_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4",
    "p-4"
];
export const MATCHUP_STYLE : React.CSSProperties = {
};

export type MatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
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

export const Matchup : FC<MatchupProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? MATCHUP_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MATCHUP_STYLE : {}, ...props.style}}>
            <div>
                <MatchupComparison
                game={props.game}
                home={props.home}
                homeDistro={props.homeDistro}
                homeEfficiency={props.homeEfficiency}
                away={props.away}
                awayDistro={props.awayDistro}
                awayEfficiency={props.awayEfficiency}
                gameProjection={props.gameProjection}
                gameProjections={props.gameProjections}
                leagueAverages={props.leagueAverages}/>
            </div>
            <div 
            className='grid gap-4 p-4'
            style={{
                gridTemplateColumns : '1fr 1fr'
            }}>
                <div>
                    <TeamMatchups
                    onMatchupClick={props.onMatchupClick}
                    onTeamClick={props.onTeamClick}
                    team={props.home}
                    games={props.homeGameProjections}/>
                </div>
                <div>
                    <TeamMatchups 
                    onMatchupClick={props.onMatchupClick}
                    onTeamClick={props.onTeamClick}
                    team={props.away}
                    games={props.awayGameProjections}/>
                </div>
            </div>
        </div>
    )
};