import React, {FC, ReactElement} from 'react';

export const NCAAB_MENS_GAME_OF_THE_DAY_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_GAME_OF_THE_DAY_STYLE : React.CSSProperties = {
};

export type NcaabMensGameOfTheDayProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const NcaabMensGameOfTheDay : FC<NcaabMensGameOfTheDayProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_MENS_GAME_OF_THE_DAY_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_MENS_GAME_OF_THE_DAY_STYLE : {}, ...props.style}}>

        </div>
    )
};