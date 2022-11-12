import React, {FC, ReactElement} from 'react';
import { MainSidebar } from '../../../../assemblies/meta';
import { MensNcaabTeamContent } from '../../../../assemblies/meta/content/NcaabMensTeamContent';

export const HOME_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900",
];
export const HOME_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 6fr"
};

export type MensNcaabTeamProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
};

export const MensNcaabTeam : FC<MensNcaabTeamProps>  = (props) =>{

    // const navigate = useNavigate();
    // const {checksCompleted} = useCheckStore();
    // if(!checksCompleted) navigate("/");

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
                width : '100%'
            }}>
                <MensNcaabTeamContent style={{
                    width : "100%",
                    height : "100%"
                }}/>
            </div>
        </div>
    )
};