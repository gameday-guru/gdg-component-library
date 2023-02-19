import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { MatchupComparisonStatsBarChart } from '../MatchupComparisonBarChart';
import { MatchupHeadline } from '../MatchupHeadline';
import { NcaabMensGameOfTheDay } from '../NcaabMensGameOfTheDay';
import { OffenseDefensePointRadar } from '../OffenseDefensePointRadar';

export const MATHCUP_COMPISON_DESKTOP_CLASSNAMES : string[] = [
    "grid",
    "p-4",
    "rounded-lg",
    "gap-4"
];
export const MATHCUP_COMPISON_DESKTOP_STYLE : React.CSSProperties = {
};

export type MatchupComparisonDesktopProps = {
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
    game ? : ontology.GameByDatelike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const MatchupComparisonDesktop : FC<MatchupComparisonDesktopProps>  = (props) =>{


    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? MATHCUP_COMPISON_DESKTOP_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? MATHCUP_COMPISON_DESKTOP_STYLE : {}, ...props.style}}>
            <div>
                <MatchupHeadline 
                onTeamClick={props.onTeamClick}
                onMatchupClick={props.onMatchupClick}
                game={props.game}
                home={props.home}
                away={props.away}
                gameProjection={props.gameProjection}
                viusage='backdrop'/>
            </div>
            <div 
            className='gap-4'
            style={{
                display : "grid",
                gridTemplateColumns : "2fr 3fr 2fr"
            }}>
                <div>
                    <OffenseDefensePointRadar 
                    home={props.home}
                    homeDistro={props.homeDistro?.offense}
                    away={props.away}
                    awayDistro={props.awayDistro?.defense}
                    />
                </div>
                <div>
                    <MatchupComparisonStatsBarChart 
                    home={props.home}
                    homeEfficiency={props.homeEfficiency}
                    away={props.away}
                    awayEfficiency={props.awayEfficiency}
                    leagueAverages={props.leagueAverages}
                    style={{ height : '100%'}}/>
                </div>
                <div>
                    <OffenseDefensePointRadar 
                     home={props.home}
                     homeDistro={props.homeDistro?.defense}
                     away={props.away}
                     awayDistro={props.awayDistro?.offense}
                        reverse/>
                </div>
            </div>
        </Wrapper>
    )
};