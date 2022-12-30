import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { MatchupComparisonStatsBarChart } from '../MatchupComparisonBarChart';
import { MatchupHeadline } from '../MatchupHeadline';
import { NcaabMensGameOfTheDay } from '../NcaabMensGameOfTheDay';
import { OffenseDefensePointRadar } from '../OffenseDefensePointRadar';

export const MATCHUP_COMPARISON_CLASSNAMES : string[] = [
    "grid",
    "p-4",
    "rounded-lg",
    "gap-4"
];
export const MATCHUP_COMPARISON_STYLE : React.CSSProperties = {
};

export type MatchupComparisonProps = {
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
};

export const MatchupComparison : FC<MatchupComparisonProps>  = (props) =>{

     console.log(props.homeDistro, props.awayDistro);

    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? MATCHUP_COMPARISON_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? MATCHUP_COMPARISON_STYLE : {}, ...props.style}}>
            <div>
                <MatchupHeadline 
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