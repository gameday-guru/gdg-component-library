import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { DateString } from '../../generic';
import { TeamSemiDetailedMatchup } from '../../team/TeamSemiDetailedMatchup';
import { ontology } from '../../../../util';

export const NCAAB_MENS_GAME_OF_THE_DAY_CONTAINER_CLASSNAMES : string[] = [
    "grid",
    "p-4"
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
    viusage ? : viusage.primary.Viusagelike;
    home ? : ontology.Teamlike;
    away ? : ontology.Teamlike;
    gameProjection ? : ontology.ProjectionEntrylike;
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
                <TeamSemiDetailedMatchup 
                    home={props.home}
                    away={props.away}
                    gameProjection={props.gameProjection}/>
            </div>
        </Wrapper>
    )
};