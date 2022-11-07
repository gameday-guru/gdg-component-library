import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { Pill } from '../../../../components';
import { Stacked } from '../../../../components/output/containers/comparison';
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
};

export const NcaabMensUpcomingGames : FC<NcaabMensUpcomingGamesProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? NCAAB_MENS_UPCOMING_GAMES_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? NCAAB_MENS_UPCOMING_GAMES_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? NCAAB_MENS_UPCOMING_GAMES_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? NCAAB_MENS_UPCOMING_GAMES_INNER_STYLE : {}, ...props.style}}>
                <h2 className='text-lg'>Upcoming Games for Top 25</h2>
                <br/>
                <hr/>
                <br/>
                <div style={{
                    gridTemplateColumns : '1fr 1fr 1fr 1fr 1fr'
                }} className='grid gap-2 text-sm'>
                    <Pill>This Week</Pill>
                    <Pill>Big 12</Pill>
                    <Pill>ACC</Pill>
                    <Pill>Pac 12</Pill>
                    <Pill>On the Bubble</Pill>
                </div>
                <TeamMatchupRowProjection/>
            </div>
        </Wrapper>
    )
};