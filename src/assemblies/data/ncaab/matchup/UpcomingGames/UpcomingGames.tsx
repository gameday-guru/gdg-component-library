import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';

export const UPCOMING_GAMES_CONTAINER_CLASSNAMES : string[] = [ ];
export const UPCOMING_GAMES_CONTAINER_STYLE : React.CSSProperties = {
};

export const UPCOMING_GAMES_INNER_CLASSNAMES : string[] = [ ];
export const UPCOMING_GAMES_INNER_STYLE : React.CSSProperties = {
};

export type UpComingGamesProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const UpComingGames : FC<UpComingGamesProps>  = (props) =>{

    return (
        <Wrapper
            classNames={[...!props.overrideClasses ? UPCOMING_GAMES_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? UPCOMING_GAMES_CONTAINER_STYLE : {}, ...props.style}}>
            <div
                className={[...!props.overrideClasses ? UPCOMING_GAMES_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
                style={{...!props.overrideStyle ? UPCOMING_GAMES_INNER_STYLE : {}, ...props.style}}>
                    {/** TODO: FilterHeaderWithEasyTags */}
                    {/** TODO: for matchup in matchup: TeamMatchupRowProjection */}
            </div>
        </Wrapper>
    )
};