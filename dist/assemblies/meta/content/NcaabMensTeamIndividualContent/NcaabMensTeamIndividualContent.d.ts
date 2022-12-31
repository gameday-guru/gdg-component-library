import React, { FC } from 'react';
import { viusage } from '../../../../util';
import { ontology } from '../../../../util';
export declare const MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_CONTAINER_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_CONTAINER_STYLE: React.CSSProperties;
export declare const MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_INNER_CLASSNAMES: string[];
export declare const MENS_NCAAB_TEAM_INDIVIDUAL_CONTENT_INNER_STYLE: React.CSSProperties;
export declare type MensNcaabTeamIndividualContentProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
    teams?: {
        [key: string]: ontology.Teamlike;
    };
    team?: ontology.Teamlike;
    leagueAverages?: ontology.LeagueAverageslike;
    pointDistribution?: ontology.PointDistributionlike;
    games?: ontology.ProjectedGamelike[];
    efficiency?: ontology.EfficiencyEntrylike;
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const MensNcaabTeamIndividualContent: FC<MensNcaabTeamIndividualContentProps>;