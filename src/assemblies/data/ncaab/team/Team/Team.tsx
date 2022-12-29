import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { Teamlike } from '../../../../../util/ontology';
import { GameLogAndTeamMembers } from '../GameLogAndTeamMembers';
import { TeamStatTripleRow } from '../TeamStatTripleRow';

export const TEAM_CLASSNAMES : string[] = [ 
    "grid",
    "gap-4",
    "p-4",
];
export const TEAM_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr"
};

export type TeamProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    teams ? : { [key : string] : ontology.Teamlike };
    team ? : ontology.Teamlike;
    leagueAverages ? : ontology.LeagueAverageslike;
    pointDistribution ? : ontology.PointDistributionlike;

};

export const Team : FC<TeamProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? TEAM_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? TEAM_STYLE : {}, ...props.style}}>
            <div>
                <TeamStatTripleRow/>
            </div>
            <div>
                <GameLogAndTeamMembers/>
            </div>
        </div>
    )
};