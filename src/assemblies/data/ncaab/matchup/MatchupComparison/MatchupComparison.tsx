import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { MatchupComparisonStatsBarChart } from '../MatchupComparisonBarChart';
import { MatchupHeadline } from '../MatchupHeadline';
import { NcaabMensGameOfTheDay } from '../NcaabMensGameOfTheDay';
import { OffenseDefensePointRadar } from '../OffenseDefensePointRadar';
import { MatchupComparisonMobile } from './MatchupComparisonMobile';
import { MatchupComparisonDesktop } from './MatchupComparisonDesktop';

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
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const MatchupComparison : FC<MatchupComparisonProps>  = (props) =>{

    const medium = useSupportedMedia();
    switch(medium) {
        case "mobile" : return <MatchupComparisonMobile {...props}/>
        default : return <MatchupComparisonDesktop {...props}/>
    }

};