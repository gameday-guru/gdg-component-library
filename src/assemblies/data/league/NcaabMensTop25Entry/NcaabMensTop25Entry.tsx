import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { ontology } from '../../../../util';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';

export const NCAAB_MENS_TOP25_ENTRY_CONTAINER_CLASSNAMES : string[] = [
    "p-4",
    "rounded-lg"
 ];
export const NCAAB_MENS_TOP25_ENTRY_CONTAINER_STYLE : React.CSSProperties = {
   
};


export const NCAAB_MENS_TOP25_ENTRY_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const NCAAB_MENS_TOP25_ENTRY_INNER_STYLE : React.CSSProperties = {
    gridTemplateRows : "1fr 2fr"
};

export type NcaabMensTop25EntryProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    team ? : ontology.Teamlike;
    rank ? : number;
    trend ? : boolean;
};

export const NcaabMensTop25Entry : FC<NcaabMensTop25EntryProps>  = (props) =>{

    const _rank = props.rank|| -1;
    const _team = props.team||ontology.MockHome;

    return (
        <Wrapper
            viusage={"backdrop"}
            classNames={[...!props.overrideClasses ? NCAAB_MENS_TOP25_ENTRY_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? NCAAB_MENS_TOP25_ENTRY_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? NCAAB_MENS_TOP25_ENTRY_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? NCAAB_MENS_TOP25_ENTRY_INNER_STYLE : {}, ...props.style}}>
                <div style={{
                    display : "grid",
                    gridTemplateColumns : "1fr 4fr",
                    alignContent : "center"
                }}> 
                    <div style={{
                        display : "flex",
                        alignContent : "center",
                        alignItems : "center"
                    }}>
                        <h2>#{_rank}</h2>
                        {props.trend ? <ArrowUp color='#5CD0B4'/> : <ArrowDown color='#FD3535'/>}
                    </div>
                    <div style={{
                        display : "flex",
                        alignContent : "center",
                        alignItems : "center",
                        fontSize : 14
                    }}>
                        <img height={24} width={24} src={_team.TeamLogoUrl}/>
                        &emsp;
                        {_team.Name}
                    </div>
                </div>
                <div 
                className='gap-4'
                style={{
                    display : "grid",
                    gridTemplateColumns : "1fr 1fr 1fr",
                    alignContent : "center",
                    fontSize : 12
                }}>
                    <div className='rounded p-2' style={{
                        background : "#01987528"
                    }}>
                        <h2>22.8</h2>
                        <h2 style={{
                            color : "#ffffff65"
                        }}>Power Rating</h2>
                    </div>
                    <div className='rounded p-2' style={{
                        background : "#01987528"
                    }}>
                        <h2>22.8</h2>
                        <h2 style={{
                            color : "#ffffff65"
                        }}>Off Efficiency</h2>
                    </div>
                    <div className='rounded p-2' style={{
                        background : "#01987528"
                    }}>
                        <h2>22.8</h2>
                        <h2 style={{
                            color : "#ffffff65"
                        }}>Def Efficiency</h2>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};