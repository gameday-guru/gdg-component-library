import React, {FC, ReactElement} from 'react';
import { Sidebar } from '../../../assemblies/meta/universal/Sidebar';
import { SideFeed } from '../../../components/output/containers';
import { Dotousel } from '../../../components/navigation/panels/Dotousel';
import { Logo } from '../../../components/output/icons/Logo';
import { LeftRight } from '../../../components/output/containers/general';
import { Snu } from '../../../assemblies/meta/universal';
import { useNavigate } from 'react-router-dom';
import { FilterSet } from '../../../components/output/containers/filter';
import { useCheckStore } from '../../../components/CheckProvider';

export const HOME_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900"
];
export const HOME_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 4fr"
};

export type HomeProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
};

export const Home : FC<HomeProps>  = (props) =>{

    // const navigate = useNavigate();
    // const {checksCompleted} = useCheckStore();
    // if(!checksCompleted) navigate("/");

    return (
        <div
        className={[...!props.overrideClasses ? HOME_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HOME_STYLE : {}, ...props.style}}>
            <Sidebar classNames={["h-full", "w-full"]}/>

        </div>
    )
};