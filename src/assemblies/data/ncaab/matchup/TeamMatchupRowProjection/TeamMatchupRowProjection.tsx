import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { DateString } from '../../generic';
import { GamblersTuple } from '../../team/GamblersTuple';
import { StackedProjection } from '../../team/StackedProjection';
import { ontology } from '../../../../../util';
import { Button } from '../../../../../components';
import { MockOver } from '../../../../../components/output/MockOver';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { TeamMatchupRowProjectionMobile } from './TeamMatchupRowProjectionMobile';
import { TeamMatchupRowProjectionDesktop } from './TeamMatchupRowProjectionDesktop';

export const TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4",
    "rounded-lg",
    "gap-2"
];
export const TEAM_MATCHUP_ROW_PROJECTION_CONTAINER_STYLE : React.CSSProperties = {
};

export const TEAM_MATCHUP_ROW_PROJECTION_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const TEAM_MATCHUP_ROW_PROJECTION_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "3fr 1fr",
    gridTemplateRows : "1fr"
};

export type TeamMatchupRowProjectionProps = {
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
    onMatchupClick ? : (matchupId : string)=>Promise<void>;
    gamblers ? : boolean;
    stackedGamblers ? : boolean;
};

export const TeamMatchupRowProjection : FC<TeamMatchupRowProjectionProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch(medium) {
        case "mobile" : return <TeamMatchupRowProjectionMobile {...props}/>
        default : return <TeamMatchupRowProjectionDesktop {...props}/>
    }

};