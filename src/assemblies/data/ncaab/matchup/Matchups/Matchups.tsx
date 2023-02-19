import React, {FC, ReactElement} from 'react';
import { ontology } from '../../../../../util';
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
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

    const medium = useSupportedMedia();
    const groupBy = medium === "mobile" ? 1 : 4;

    return (
        <div
        className={[...!props.overrideClasses ? MATCHUPS_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MATCHUPS_STYLE : {}, ...props.style}}>
            <div>
                <NcaabMensAllUpcomingGames
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                allUpcomingGames={props.gamesThisWeek}/>
            </div>
            <div>
                <WeekMatchupCarousel
                groupBy={groupBy}
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                gamesThisWeek={props.allUpcomingGames}/>
            </div>
        </div>
    )
};