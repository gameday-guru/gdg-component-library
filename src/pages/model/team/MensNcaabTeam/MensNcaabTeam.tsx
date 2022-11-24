import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../assemblies/meta';
import { MensNcaabTeamContent } from '../../../../assemblies/meta/content/NcaabMensTeamContent';
import { ontology } from '../../../../util';

export const MENS_NCAAB_TEAM_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
];
export const MENS_NCAAB_TEAM_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type MensNcaabTeamProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    tableEntries ? : ontology.EfficiencyEntrylike[];
    teams ? : { [key : string] : ontology.Teamlike };
    topOffensiveTeams ? : ontology.Teamlike[];
    topDefensiveTeams ? : ontology.Teamlike[];
};

export const MensNcaabTeam : FC<MensNcaabTeamProps>  = (props) =>{

    // const navigate = useNavigate();
    // const {checksCompleted} = useCheckStore();
    // if(!checksCompleted) navigate("/");

    return (
        <div
        className={[...!props.overrideClasses ? MENS_NCAAB_TEAM_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MENS_NCAAB_TEAM_STYLE : {}, ...props.style}}>
            <div style={{
                height : '100%',
                width : '100%'
            }}>
                <MainSidebar style={{
                    height : '100%'
                }}/>
            </div>
            <div className='overflow-y-scroll' style={{
                height : '100%',
                width : '100%',
                overflow : 'scroll'
            }}>
                <MensNcaabTeamContent
                topDefensiveTeams={props.topDefensiveTeams}
                topOffensiveTeams={props.topOffensiveTeams}
                tableEntries={props.tableEntries}
                teams={props.teams}/>
            </div>
        </div>
    )
};