import React, {FC, ReactElement} from 'react';

export const NCAAB_MENS_UPCOMING_GAMES_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_UPCOMING_GAMES_STYLE : React.CSSProperties = {
};

export type NcaabMensUpcomingGamesProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const NcaabMensUpcomingGames : FC<NcaabMensUpcomingGamesProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_MENS_UPCOMING_GAMES_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_MENS_UPCOMING_GAMES_STYLE : {}, ...props.style}}>

        </div>
    )
};