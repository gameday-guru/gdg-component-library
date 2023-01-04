import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { viusage } from '../../../../../util';
import { DateString } from '../../generic';
import { TeamSemiDetailedMatchup } from '../TeamSemiDetailedMatchup';
import { ontology } from '../../../../../util';
import { MockAway, MockHome } from '../../../../../util/ontology';

export const NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_CLASSNAMES : string[] = [
    "grid",
    "p-4",
    "rounded-lg"
];
export const NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_STYLE : React.CSSProperties = {
    justifyContent : "center",
    justifyItems : "center"
};

export const NCAAB_MENS_GAME_OF_THE_DAY_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_GAME_OF_THE_DAY_INNER_STYLE : React.CSSProperties = {
    
};

export type MatchupHeadlineProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    home ? : ontology.Teamlike;
    away ? : ontology.Teamlike;
    gameProjection ? : ontology.ProjectionEntrylike;
    game ? : ontology.GameByDatelike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const MatchupHeadline : FC<MatchupHeadlineProps>  = (props) =>{

    const _home = props.home||MockHome;
    const _away = props.away||MockAway;

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? NCAAB_MENS_GAME_OF_THE_DAY_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? NCAAB_MENS_GAME_OF_THE_DAY_INNER_STYLE : {}, ...props.style}}>
                <h2 className="text-lg">{_home.School} vs. {_away.School}</h2>
                <TeamSemiDetailedMatchup 
                    viusage={'backdrop'}
                    onTeamClick={props.onTeamClick}
                    onMatchupClick={props.onMatchupClick}
                    home={_home}
                    away={_away}
                    game={props.game}
                    gameProjection={props.gameProjection}/>
            </div>
        </Wrapper>
    )
};