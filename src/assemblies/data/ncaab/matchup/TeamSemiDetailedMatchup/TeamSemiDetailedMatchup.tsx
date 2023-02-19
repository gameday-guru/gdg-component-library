import React, {FC, ReactElement} from 'react';
import { Button, Wrapper } from '../../../../../components';
import { DateString } from '../../generic';
import { H2H } from '../H2H';
import { ProjectionZeroSum } from '../../team/ProjectionZeroSum';
import { ProjectionWinPercentage } from '../../team/ProjectionWinPercentage';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { MockOver } from '../../../../../components/output/MockOver';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { TeamSemiDetailedMatchupMobile } from './TeamSemiDeatiledMatchupMobile';
import { TeamSemiDetailedMatchupDesktop } from './TeamSemiDetailedMatchupDesktop';

export const TEAM_DETAILED_MATCHUP_CONTAINER_CLASSNAMES : string[] = [ ];
export const TEAM_DETAILED_MATCHUP_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_DETAILED_MATCHUP_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4"
];
export const TEAM_DETAILED_MATCHUP_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 2fr",
    justifyContent : "center",
    justifyItems : "center",
    alignContent : "center",
    alignItems : "center"
};

export type TeamSemiDetailedMatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    home ? : ontology.Teamlike;
    away ? : ontology.Teamlike;
    game ? : ontology.GameByDatelike;
    gameProjection ? : ontology.ProjectionEntrylike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    viusage ? : Viusagelike;
};

export const TeamSemiDetailedMatchup : FC<TeamSemiDetailedMatchupProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch (medium) {
        case "mobile" :  return <TeamSemiDetailedMatchupMobile {...props}/>;
        default : return <TeamSemiDetailedMatchupDesktop {...props}/> 
    }


};