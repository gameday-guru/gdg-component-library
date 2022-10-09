import React, {FC, ReactElement} from 'react';
import { Sidebar } from '../../../../assemblies/meta/universal/Sidebar';
import { SideFeed } from '../../../../components/output/containers';
import { Dotousel } from '../../../../components/navigation/panels/Dotousel';
import { Logo } from '../../../../components/output/icons/Logo';
import { LeftRight } from '../../../../components/output/containers/general';
import { Snu } from '../../../../assemblies/meta/universal';
import { useNavigate } from 'react-router-dom';
import { FilterSet } from '../../../../components/output/containers/filter';
import { EfficienyTable } from './mock';
import { Table } from '../../../../components/output/indicators/table/Table';
import { Carousel } from '../../../../components/navigation/panels';
import { Calendar } from 'react-bootstrap-icons';
import { StackedBodyless } from '../../../../components/output/containers/comparison/StackedBodyless/StackedBodyless';
import { useCheckStore } from '../../../../components/CheckProvider';

export const NCAAB_CLASSNAMES : string[] = [ 
    "h-screen",
    "w-screen",
    "grid",
    "justify-items-center",
    "items-center",
    "text-drk-gray-900"
];
export const NCAAB_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 4fr"
};

export type NcaabProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
};

export const Ncaab : FC<NcaabProps>  = (props) =>{

    const navigate = useNavigate();
    const {checksCompleted} = useCheckStore();
    if(!checksCompleted) navigate("/");

    return (
        <div
        className={[...!props.overrideClasses ? NCAAB_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? NCAAB_STYLE : {}, ...props.style}}>
            <Sidebar style={{
                height : "100%",
                width : "100%"
            }}/>
            <div className='gap-4' style={{
                width : "100%",
                height : "100%",
                display : "grid",
                gridTemplateRows : "1fr 4fr auto",
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
                        }}>College Basketball</h2>
                    </div>} Right={<Snu size={24}/>}/>
                </div>
                <div className='px-8 gap-4'  style={{
                    width : "100%",
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr"
                }}>
                    <div style={{
                        width : "100%",
                        display : "grid",
                        gridTemplateColumns : "1fr 1fr",
                        gridTemplateRows : "1fr 1fr",
                        gap : 8
                    }}>
                        <div className='rounded bg-drk-gray-300 p-4'>
                            <h2 className='text-2xl'>Top Offensive Teams</h2>
                            <hr/>
                            <br/>
                            <div 
                            onClick={()=>navigate("team/" + encodeURI("Whichita State"))}
                            style={{
                                display : "flex",
                                alignContent : "center",
                                alignItems : "center",
                                padding : 4,
                                gap : 8
                            }}>
                                <div className='bg-drk-gray-600 rounded-full' style={{
                                    height : "20px",
                                    width : "20px",
                                }}>

                                </div>
                                <h3 className='text-xl hover:underline cursor-pointer'>Whichita State</h3>
                            </div>
                            <div 
                            onClick={()=>navigate("team/" + encodeURI("Michigan"))}
                            style={{
                                display : "flex",
                                alignContent : "center",
                                alignItems : "center",
                                padding : 4,
                                gap : 8
                            }}>
                                <div className='bg-drk-gray-600 rounded-full' style={{
                                    height : "20px",
                                    width : "20px",
                                }}>

                                </div>
                                <h3 className='text-xl hover:underline cursor-pointer'>Michigan</h3>
                            </div>
                            <div 
                             onClick={()=>navigate("team/" + encodeURI("UNC"))}
                            style={{
                                display : "flex",
                                alignContent : "center",
                                alignItems : "center",
                                padding : 4,
                                gap : 8
                            }}>
                                <div className='bg-drk-gray-600 rounded-full' style={{
                                    height : "20px",
                                    width : "20px",
                                }}>

                                </div>
                                <h3 className='text-xl hover:underline cursor-pointer'>UNC</h3>
                            </div>
                        </div>
                        <div className='rounded bg-drk-gray-300 p-4'>
                            <h2 className='text-2xl'>Top Defensive Teams</h2>
                            <hr/>
                            <br/>
                            <div 
                            onClick={()=>navigate("team/" + encodeURI("Alabama"))}
                            style={{
                                display : "flex",
                                alignContent : "center",
                                alignItems : "center",
                                padding : 4,
                                gap : 8
                            }}>
                                <div className='bg-drk-gray-600 rounded-full' style={{
                                    height : "20px",
                                    width : "20px",
                                }}>

                                </div>
                                <h3 className='text-xl hover:underline cursor-pointer'>Alabama</h3>
                            </div>
                            <div 
                            onClick={()=>navigate("team/" + encodeURI("SJSU"))}
                            style={{
                                display : "flex",
                                alignContent : "center",
                                alignItems : "center",
                                padding : 4,
                                gap : 8
                            }}>
                                <div className='bg-drk-gray-600 rounded-full' style={{
                                    height : "20px",
                                    width : "20px",
                                }}>

                                </div>
                                <h3 className='text-xl hover:underline cursor-pointer'>SJSU</h3>
                            </div>
                            <div 
                            onClick={()=>navigate("team/" + encodeURI("Wichita State"))}
                            style={{
                                display : "flex",
                                alignContent : "center",
                                alignItems : "center",
                                padding : 4,
                                gap : 8
                            }}>
                                <div className='bg-drk-gray-600 rounded-full' style={{
                                    height : "20px",
                                    width : "20px",
                                }}>

                                </div>
                                <h3 className='text-xl hover:underline cursor-pointer'>Whichita State</h3>
                            </div>
                        </div>
                        <div className='rounded bg-drk-gray-300 p-4'>
                            <h2 className='text-2xl'>Our Picks</h2>
                            <hr/>
                            <br/>
                            <div 
                            onClick={()=>navigate("team/" + encodeURI("Wichita State"))}
                            style={{
                                display : "flex",
                                alignContent : "center",
                                alignItems : "center",
                                padding : 4,
                                gap : 8
                            }}>
                                <div className='bg-drk-gray-600 rounded-full' style={{
                                    height : "20px",
                                    width : "20px",
                                }}>

                                </div>
                                <h3 className='text-xl hover:underline cursor-pointer'>Whichita State</h3>
                            </div>
                        </div>
                    </div>
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
                            <h2 className='text-lg'>No matchups. Next game <span className='text-drk-gray-700 cursor-pointer hover:underline'>North Florida @ Gonzaga: TBD</span></h2>
                        </div>
                    </div>
                </div>
                <div className="p-4" style={{
                    width : "100%",
                }}>
                    <FilterSet Title={<h2 className='text-xl'>All Teams</h2>} emphasis={400} invert viusage='sort'>
                            <Table classNames={["w-full text-drk-gray-800"]} table={EfficienyTable}/>
                        </FilterSet>
                </div>
            </div>
        </div>
    )
};