import React, {FC, ReactElement, useState} from 'react';
import { Wrapper } from '../../../../../components';
import { Pill } from '../../../../../components';
import { ontology } from '../../../../../util';
import { MockProjectedGame } from '../../../../../util/ontology';
import { TeamMatchupRowProjection } from '../TeamMatchupRowProjection';
import { FilterSet } from '../../../../../components/output/containers/filter';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { UpcomingGamesMobile } from './UpcomingGamesMobile';
import { UpcomingGamesDesktop } from './UpcomingGamesDesktop';

export const UPCOMING_GAMES_CONTAINER_CLASSNAMES : string[] = [
    "rounded-lg",
    "p-4"
];
export const UPCOMING_GAMES_CONTAINER_STYLE : React.CSSProperties = {
};

export const UPCOMING_GAMES_INNER_CLASSNAMES : string[] = [ ];
export const UPCOMING_GAMES_INNER_STYLE : React.CSSProperties = {
    textAlign : "left"
};

export type UpcomingGamesProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    which ? : string;
    games ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    options ? : string[];
    viusage ? : Viusagelike;
    Title ? : React.ReactNode;
    presets ? : {
        [key : string] : (table : ontology.ProjectedGamelike[])=>Promise<ontology.ProjectedGamelike[]>
    }
    stackedGamblers ? : boolean;
};

export const UpcomingGames : FC<UpcomingGamesProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch (medium) {
        case "mobile" : return <UpcomingGamesMobile {...props}/>
        default : return <UpcomingGamesDesktop {...props}/>
    }
    
};