import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Wrapper } from '../../../../components';
import { ontology, viusage } from '../../../../util';
import { LeftRight } from '../../../../components/output/containers/general';
import { Snu } from '../Snu';
import { SportsBasketball } from "@mui/icons-material";
import { ProjectedGamelike } from '../../../../util/ontology';
import levenshtein from "fast-levenshtein";
import { MockOver } from '../../../../components/output/MockOver';
import { SideTeam } from '../../../data/ncaab/team/SideTeam';
import { SideMatchup } from '../../../data/ncaab/matchup/SideMatchup/SideMatchup';
import { SupportedMedialike } from '../../../../util/media';
import { MensCollegeBasketballMobileHeader } from './MensCollegeBasketballHeaderMobile';
import { MensCollegeBasketballDesktopHeader } from './MensCollegeBasketballHeaderDesktop';
import { useSupportedMedia } from '../../../../util/media/useSupportedMedia';

export const MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_CLASSNAMES : string[] = [ ];
export const MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_STYLE : React.CSSProperties = {
};

export const MENS_COLLEGE_BASKETBALL_HEADER_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "p-4"
];
export const MENS_COLLEGE_BASKETBALL_HEADER_INNER_STYLE : React.CSSProperties = {
    
};



export type MensCollegeBasketballHeaderProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    projectedGames ? : ontology.ProjectedGamelike[];
    teams ? : ontology.Teamlike[];
    count ? : number;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;
    medium ? : SupportedMedialike;
};

export const MensCollegeBasketballHeader : FC<MensCollegeBasketballHeaderProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch (props.medium||medium) {
        case "mobile" : return <MensCollegeBasketballMobileHeader/>
        default : return <MensCollegeBasketballDesktopHeader/>

    }

};