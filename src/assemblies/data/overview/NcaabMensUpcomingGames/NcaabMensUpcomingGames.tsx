import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';

export const NCAAB_MENS_UPCOMING_GAMES_CONTAINER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_UPCOMING_GAMES_CONTAINER_STYLE : React.CSSProperties = {
};

export const NCAAB_MENS_UPCOMING_GAMES_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_UPCOMING_GAMES_INNER_STYLE : React.CSSProperties = {
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

            </div>
        </Wrapper>
    )
};