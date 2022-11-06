import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { DateString } from '../../generic';

export const NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_CLASSNAMES : string[] = [
    "grid"
];
export const NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_STYLE : React.CSSProperties = {
    justifyContent : "center",
    justifyItems : "center"
};

export const NCAAB_MENS_GAME_OF_THE_DAY_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_GAME_OF_THE_DAY_INNER_STYLE : React.CSSProperties = {
    
};

export type NcaabMensGameOfTheDayProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike
};

export const NcaabMensGameOfTheDay : FC<NcaabMensGameOfTheDayProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? NCAAB_MENS_GAME_OF_THE_DAY_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? NCAAB_MENS_GAME_OF_THE_DAY_INNER_STYLE : {}, ...props.style}}>
                <h2 className="text-lg">Game of the Day</h2>
                <DateString/>
                <div>
                    {/** TODO:  */}
                </div>
            </div>
        </Wrapper>
    )
};