import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../assemblies/meta';
import { HomeContent } from '../../../assemblies/meta/content/HomeContent/HomeContent';
import { ontology } from '../../../util';

export const HOME_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900"
];
export const HOME_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type HomeProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    gameOfTheDay ? : ontology.GameOfTheDaylike;
    top25Games ? : ontology.ProjectedGamelike[];
    apTop25Teams ? : ontology.RankTrendTeamlike[];
    gdgTop25Teams ? : ontology.RankTrendTeamlike[];
};

export const Home : FC<HomeProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? HOME_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HOME_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MainSidebar style={{
                    height : '100%'
                }}/>
            </div>
            <div style={{
                height : '100%',
                width : '100%',
                overflowY : "scroll"
            }}>
                <HomeContent 
                gameOfTheDay={props.gameOfTheDay}
                top25Games={props.top25Games}
                apTop25Teams={props.apTop25Teams}
                gdgTop25Teams={props.gdgTop25Teams}/>
            </div>
        </div>
    )
};