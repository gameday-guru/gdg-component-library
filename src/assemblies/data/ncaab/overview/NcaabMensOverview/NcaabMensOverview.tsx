import React, {FC, ReactElement} from 'react';
import { NcaabMensTop25 } from '../../league';
import { NcaabMensOverviewStack } from '../NcaabMensOverviewStack';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { NcaabMensMobileOverview } from './NcaabMensMobileOverview';
import { NcaabMensOverviewDesktop } from './NcaabMensOverviewDesktop';

export const NCAAB_MENS_OVERVIEW_CLASSNAMES : string[] = [
    "grid",
    "gap-4",
    "p-4"
 ];
export const NCAAB_MENS_OVERVIEW_STYLE : React.CSSProperties = {
    gridTemplateColumns : "2fr 1fr"
};

export type NcaabMensOverviewProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    gameOfTheDay ? : ontology.ProjectedGamelike;
    top25Games ? : ontology.ProjectedGamelike[];
    apTop25Teams ? : ontology.RankTrendTeamlike[];
    gdgTop25Teams ? : ontology.RankTrendTeamlike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    blogs ? : ontology.BlogArticlelike[];
    onBlogClick ? : (id : string)=>Promise<void>;
};

export const NcaabMensOverview : FC<NcaabMensOverviewProps>  = (props) =>{

    const medium = useSupportedMedia();
    switch (medium) {
        case "mobile" : return <NcaabMensMobileOverview {...props}/>
        default : return <NcaabMensOverviewDesktop {...props}/>
    }

};