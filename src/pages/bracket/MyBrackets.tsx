import React, {FC, ReactElement} from 'react';
import { ontology } from '../../util';
import { MainSidebar } from '../../assemblies/meta';
import { MyBracketsContent, MyBracketsContentProps } from '../../assemblies/meta/content/MyBracketsContent';
export const HOME_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
    "bg-black-500"
];
export const HOME_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type MyBracketsProps = MyBracketsContentProps & {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    gameOfTheDay ? : ontology.ProjectedGamelike;
    top25Games ? : ontology.ProjectedGamelike[];
    apTop25Teams ? : ontology.RankTrendTeamlike[];
    gdgTop25Teams ? : ontology.RankTrendTeamlike[];
    onWhich ? : (which : "home" | "team" | "matchups" | "bracket")=>Promise<void>;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    headerProjectedGames ? : ontology.ProjectedGamelike[];
    headerTeams ? : ontology.Teamlike[];

    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
    onAccountClick ? : ()=>Promise<void>;

    
};

export const MyBrackets : FC<MyBracketsProps>  = (props) =>{



    return (
        <div
        className={[...!props.overrideClasses ? HOME_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HOME_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MainSidebar
                onFeedbackSubmit={props.onFeedbackSubmit}
                onWhich={props.onWhich} 
                which='bracket'
                style={{
                    height : '100%'
                }}/>
            </div>
            <div style={{
                height : '100%',
                width : '100%',
                overflowY : "scroll"
            }}>
                <MyBracketsContent {...props}/>
            </div>
        </div>
    )
};