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

    const navigate = useNavigate();
    const {checksCompleted} = useCheckStore();
    if(!checksCompleted) navigate("/");

    return (
        <div
        className={[...!props.overrideClasses ? HOME_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HOME_STYLE : {}, ...props.style}}>
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
                        }}>Home</h2>
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
                            <h2 className="text-xl">Welcome to Gameday Guru!</h2>
                        </div>,
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
                            <h2 className="text-xl">Meet the team!</h2>
                        </div>,
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
                            <h2 className="text-xl">Look out for updates on social media!</h2>
                        </div>
                    ]}/>
                    <div>
                        <FilterSet style={{
                            height : "100%"
                        }} Title={<h2 className='text-xl'>Weekly Model Stats</h2>} emphasis={400} invert viusage='sort'/>
                    </div>
                </div>
                <div className='px-8' style={{
                    width : "100%",
                    display : "grid",
                    alignItems : "center",
                    alignContent : "center"
                }}>
                    <SideFeed style={{
                        width : "100%"
                    }}
                    classNames={[
                        "border-drk-gray-400",
                        "shadow",
                        "w-full"
                    ]} Header={<h2 className="text-xl">Models</h2>}>

                        <div 
                        onClick={()=>navigate("/models/ncaab")}
                        className='bg-success-200 gcr cursor-pointer rounded-lg overflow-hidden' style={{
                            height : "160px",
                            width : "240px",
                            display : "grid",
                            alignContent : "center"
                        }}>
                            <h2 className='text-2xl text-white-100'>Men's NCAAB</h2>
                        </div>

                    </SideFeed>
                </div>
            </div>
        </div>
    )
};