import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology, viusage } from '../../../../../util';
import { Pill } from '../../../../../components';
import { Stacked } from '../../../../../components/output/containers/comparison';
import { TeamMatchupRowProjection } from '../../team/TeamMatchupRowProjection';

export const NCAAB_MENS_UPCOMING_GAMES_CONTAINER_CLASSNAMES : string[] = [ 
    "p-4"
];
export const NCAAB_MENS_UPCOMING_GAMES_CONTAINER_STYLE : React.CSSProperties = {
};

export const NCAAB_MENS_UPCOMING_GAMES_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_UPCOMING_GAMES_INNER_STYLE : React.CSSProperties = {
    textAlign : "left"
};

export type NcaabMensUpcomingGamesProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike
    which ? : string;
    top25Games ? : ontology.ProjectedGamelike[];
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const NcaabMensUpcomingGames : FC<NcaabMensUpcomingGamesProps>  = (props) =>{

    const options = [
        "This Week",
        "Big 12",
        "ACC", 
        "PAC 12", 
        "On the Bubble"
    ];
    const selections = options
    .map((display, i)=>{
        return <Pill 
            emphasis={props.which === display ? 500 : 300}
            viusage={props.which === display || ( !props.which && i ===0 )? 'navigate' : 'wrap'}
            key={display}>
                {display}
        </Pill>
    });
    const gameProjections = (props.top25Games||[])
    .map((entry, i)=>{
        return (
            <TeamMatchupRowProjection 
                onTeamClick={props.onTeamClick}
                key={entry.game.GameID}
                home={entry.home}
                away={entry.away}
                game={entry.game}
                gameProjection={entry.gameProjection}/>
        )
    });

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? NCAAB_MENS_UPCOMING_GAMES_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? NCAAB_MENS_UPCOMING_GAMES_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? NCAAB_MENS_UPCOMING_GAMES_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? NCAAB_MENS_UPCOMING_GAMES_INNER_STYLE : {}, ...props.style}}>
                <h2 className='text-xl'>Upcoming Games for Top 25</h2>
                <br/>
                <hr/>
                <br/>
                <div style={{
                    gridTemplateColumns : '1fr 1fr 1fr 1fr 1fr'
                }} className='grid gap-2 text-sm'>
                    {selections}
                </div>
                <br/>
                <div className='grid gap-2 text-sm'>
                    {gameProjections}
                </div>
            </div>
        </Wrapper>
    )
};