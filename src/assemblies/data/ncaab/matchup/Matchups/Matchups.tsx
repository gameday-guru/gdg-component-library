import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { NcaabMensAllUpcomingGames } from '../../overview/NcaabMensAllUpcomingGames/NcaabMensAllUpcomingGames';
import { WeekMatchupCarousel } from '../WeekMatchupCarousel';

export const MATCHUPS_CLASSNAMES : string[] = [
    "grid",
    "gap-4",
    "p-4",
];
export const MATCHUPS_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr"
};

export type MatchupsProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    gamesThisWeek ? : ontology.ProjectedGamelike[];
    allUpcomingGames ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const Matchups : FC<MatchupsProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? MATCHUPS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MATCHUPS_STYLE : {}, ...props.style}}>
            <div>
                <WeekMatchupCarousel
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                gamesThisWeek={props.gamesThisWeek}/>
            </div>
            <div>
                <NcaabMensAllUpcomingGames
                allUpcomingGames={props.allUpcomingGames}/>
            </div>
        </div>
    )
};