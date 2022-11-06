import React, {FC, ReactElement} from 'react';
import { Sidebar } from '../../../../assemblies/meta/nav/LogoedSidebar';
import { SideFeed } from '../../../../components/output/containers';
import { Dotousel } from '../../../../components/navigation/panels/Dotousel';
import { Logo } from '../../../../components/output/icons/Logo';
import { LeftRight } from '../../../../components/output/containers/general';
import { Snu } from '../../../../assemblies/meta/universal';
import { useNavigate } from 'react-router-dom';
import { FilterSet } from '../../../../components/output/containers/filter';
import { Carousel } from '../../../../components/navigation/panels';
import { Calendar } from 'react-bootstrap-icons';
import { Table } from '../../../../components/output/indicators/table/Table';
import { EfficiencyTrendData, EfficiencyTrendTable } from './mock';
import { useCheckStore } from '../../../../components/CheckProvider';

export const NCAAB_TEAM_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900"
];
export const NCAAB_TEAM_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 4fr"
};

export type NcaabTeamProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
};

export const NcaabTeam : FC<NcaabTeamProps>  = (props) =>{

    const navigate = useNavigate();
    const {checksCompleted} = useCheckStore();
    if(!checksCompleted) navigate("/");
    const teamName = window.location.pathname.split("/").slice(-1)[0];

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_TEAM_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_TEAM_STYLE : {}, ...props.style}}>
            <Sidebar style={{
                height : "100%",
                width : "100%"
            }}/>
            <div className='gap-4' style={{
                width : "100%",
                height : "100%",
                display : "grid",
                gridTemplateRows : "1fr 4fr 4fr",
            }}>
                <div
                className='bg-drk-gray-100'
                style={{
                    width : "100%",
                    position : "relative",
                    display : "grid",
                    alignContent : "center",
                    alignItems : "center",
                    padding : 8
                }}>
                    <LeftRight Left={<div>
                        
                        <h2 className='text-xl' style={{
                            position : "absolute",
                            bottom : 4,
                            left : 40,
                            textDecoration : "underline"
                        }}>{decodeURI(teamName)}</h2>
                    </div>} Right={<Snu size={24}/>}/>
                </div>
                <div className='px-8 gap-4'  style={{
                    width : "100%",
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr"
                }}>
                    <Dotousel style={{
                      width : "100%"
                    }} classNames={["bg-drk-gray-400", "p-4", "rounded", "w-64", "grc"]} Entries={[
                        <div style={{
                            display : "grid",
                            justifyContent : "center",
                            justifyItems : "center",
                            alignContent : "center"
                        }}>
                            <div style={{
                                height : "80px",
                                width : "80px"
                            }}>
                                <Logo/>
                            </div>
                            <br/>
                            <h2 className="text-xl">{decodeURI(teamName)} News</h2>
                        </div>
                    ]}/>
                    <div>
                        <div style={{
                            height : "100%",
                            display : "grid",
                            alignItems : "start",
                            justifyItems : "center",
                            padding : 10
                        }} className='bg-drk-gray-500 rounded-lg'>
                            <Carousel Entries={[
                                <div>
                                    <div style={{
                                        display : "flex",
                                        alignContent : "center",
                                        alignItems : "center",
                                        padding : 12
                                    }}>

                                        <h2 className="text-2xl">This Week's Matchups</h2>
                                        &emsp;
                                        &emsp;
                                        <Calendar size={20}/>
                                    </div>

                                </div>
                            ]}>

                            </Carousel>
                            <h2 className='text-lg'>No matchups for this team. Next game <span className='text-drk-gray-700 cursor-pointer hover:underline'>North Florida @ Gonzaga: TBD</span></h2>
                        </div>
                    </div>
                </div>
                <div className="p-4" style={{
                    width : "100%",
                }}>
                    <FilterSet Title={<h2 className='text-xl'>Model Updates</h2>} emphasis={400} invert viusage='sort'>
                            <Table classNames={["w-full text-drk-gray-800"]} table={EfficiencyTrendTable}/>
                        </FilterSet>
                </div>
            </div>
        </div>
    )
};