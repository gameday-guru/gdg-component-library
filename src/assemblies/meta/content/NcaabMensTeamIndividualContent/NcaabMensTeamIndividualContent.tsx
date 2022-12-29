import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { MensCollegeBasketballHeader } from '../../header';
import { NcaabMensOverview } from '../../../data/ncaab/overview/NcaabMensOverview/NcaabMensOverview';
import { Teams } from '../../../data/ncaab/team/Teams';
import { FilterModal } from '../../../../components/output/containers/filter/FilterModal';
import { ontology } from '../../../../util';
import { Team } from '../../../data/ncaab/team/Team';

export const MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_CONTAINER_CLASSNAMES : string[] = [

 ];
export const MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
};

export const MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_INNER_CLASSNAMES : string[] = [

];
export const MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_INNER_STYLE : React.CSSProperties = {
};

export type MensNcaabTeamIndividualContentProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    teams ? : { [key : string] : ontology.Teamlike };
    team ? : ontology.Teamlike;
    leagueAverages ? : ontology.LeagueAverageslike;
    pointDistribution ? : ontology.PointDistributionlike;
};

export const MensNcaabTeamIndividualContent : FC<MensNcaabTeamIndividualContentProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <MensCollegeBasketballHeader/>
                </div>
                <div>
                    <Team
                    team={props.team}/>
                </div>
            </div>
        </Wrapper>
    )
};