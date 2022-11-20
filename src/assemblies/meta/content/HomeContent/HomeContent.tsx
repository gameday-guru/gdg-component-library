import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { MensCollegeBasketballHeader } from '../../header';
import { NcaabMensOverview } from '../../../data/overview/NcaabMensOverview/NcaabMensOverview';
import { ontology } from '../../../../util';

export const HOME_CONTENT_CONTAINER_CLASSNAMES : string[] = [ ];
export const HOME_CONTENT_CONTAINER_STYLE : React.CSSProperties = {
};

export const HOME_CONTENT_INNER_CLASSNAMES : string[] = [ ];
export const HOME_CONTENT_INNER_STYLE : React.CSSProperties = {
    
};

export type HomeContentProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    gameOfTheDay ? : ontology.GameOfTheDaylike;
    top25Games ? : ontology.ProjectedGamelike[];
    top25Teams ? : ontology.RankTrendGamelike[];
};

export const HomeContent : FC<HomeContentProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"backdrop"}
            classNames={[...!props.overrideClasses ? HOME_CONTENT_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? HOME_CONTENT_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? HOME_CONTENT_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? HOME_CONTENT_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <MensCollegeBasketballHeader/>
                </div>
                <div>
                    <NcaabMensOverview
                        gameOfTheDay={props.gameOfTheDay}
                        top25Games={props.top25Games}
                        top25Teams={props.top25Teams}/>
                </div>
            </div>
        </Wrapper>
    )
};