import React, {FC, ReactElement} from 'react';
import { NcaabMensTop25 } from '../../league';
import { NcaabMensOverviewStack } from '../NcaabMensOverviewStack';
import { ontology } from '../../../../util';

export const NCAAB_MENS_OVERVIEW_CLASSNAMES : string[] = [
    "grid",
    "gap-4",
    "p-4"
 ];
export const NCAAB_MENS_OVERVIEW_STYLE : React.CSSProperties = {
    gridTemplateColumns : "2fr 1fr"
};

export type NcaabMensOverviewProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    gameOfTheDay ? : ontology.GameOfTheDaylike;
    top25Games ? : ontology.ProjectedGamelike[];
    top25Teams ? : ontology.RankTrendGamelike[];
};

export const NcaabMensOverview : FC<NcaabMensOverviewProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_MENS_OVERVIEW_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_MENS_OVERVIEW_STYLE : {}, ...props.style}}>
            <div>
                <NcaabMensOverviewStack
                    top25Games={props.top25Games}
                    gameOfTheDay={props.gameOfTheDay}/>
            </div>
            <div>
                <NcaabMensTop25 
                    top25={props.top25Teams}
                    classNames={["rounded-lg"]}/>
            </div>
        </div>
    )
};