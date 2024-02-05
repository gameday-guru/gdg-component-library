import React, {FC, ReactElement, useState} from 'react';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { Wrapper } from '../../../../../components';
import { SideTeam } from '../../team/SideTeam';
import { StackedPostblock } from '../../../../../components/output/containers/field';
import { generate } from 'shortid';

export const BRACKET_MATCHUP_STACKDOWN_MEMBER_CLASSNAMES : string[] = [ 
    "gap-2"
];
export const BRACKET_MATCHUP_STACKDOWN_MEMBER_STYLE : React.CSSProperties = {
    display : 'grid',
    gridTemplateColumns : "1fr",
    // gridTemplateRows : "1fr 1fr",
    alignContent : "center",
    alignItems : "center",
    fontSize : 10,
    height : "70px",
    position : "relative"
};

export type BracketMatchupStackdownMemberProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    team ? : ontology.Teamlike
    onTeamClick ? : (teamId : string)=>Promise<void>;
    viusage ? : Viusagelike;
    size ? : number;
    short ? : boolean;
    reverse ? : boolean;

    // bracket
    bracketProbability ? : number;
    gameProbability ? : number;
    projectedScore ? : number;
    actualScore ? : number;
    rank ? : number;

};

export const BracketMatchupStackdownMember : FC<BracketMatchupStackdownMemberProps>  = (props) =>{

    const [show, setShow] = useState(false);

    const _viusage = props.viusage||"wrap";

    const getToRound = props.bracketProbability && props.gameProbability ? 
    (props.bracketProbability/props.gameProbability) *  100 : undefined;

    const Tuple = [
        <div key={"projectedScore"}>
            <StackedPostblock
                style={{
                    gap : 0,
                    fontSize : 8
                }}
                Label={"Proj."}
                Value={props.projectedScore?.toFixed(1) || "--"}/>
        </div>,
        <div key={"gameProbability"}>
            <StackedPostblock
                style={{
                    gap : 0,
                    fontSize : 8
                }}
                Label={"W%"}
                Value={`${props.gameProbability ? (props.gameProbability * 100).toFixed(0) : "--"}%`}/>
        </div>,
        <div key={"actualScore"}>
             <StackedPostblock
                style={{
                    gap : 0,
                    fontSize : 8
                }}
                Label={"Score"}
                Value={props.actualScore?.toFixed(0) || "--"}/>
        </div>
    ]

    const Popup = <Wrapper 
    hoverAnimate
    classNames={["rounded", "p-4"]}
    viusage='wrap'
    style={{
        border : '1px solid #888888',
        opacity : 1.0,
        color : "#888888",
        position : "absolute",
        ...props.reverse ? {
            left : "-300%",
        } : {
            right : "-300%"
        },
        zIndex : 10000,
        textAlign : "left",
        width : "160px"
    }}>
        <div style={{
            display : "grid",
            gridTemplateColumns : "3fr 1fr"
        }}>
            <div>
                <SideTeam
                    ellipsize={20}
                    key={generate()}
                    reverse={props.reverse}
                    size={14}
                    team={props.team}
                    classNames={props.classNames?.filter(name=>name.startsWith("text-"))} style={{
                        fontSize : 10,
                        padding : 0,
                        width : "100%",
                        textAlign : props.reverse ? "right" : "left",
                        justifyItems : props.reverse ? "right" : "left"
                    }} hideVisitorStatus viusage={_viusage}/>
            </div>
            <div>
            {props.projectedScore?.toFixed(1) || "--"}
            </div>
        </div>
        <br/>
        <div>
           <span className='text-success-500'>
                {props.gameProbability ? (props.gameProbability * 100).toFixed(0) : "--"}%
            </span> chance of winning game
        </div>
        <div>
           <span className='text-success-500'>
                {getToRound
                ?  `${getToRound.toFixed(0)}%`
                : "--"}
            </span> chance of reaching round
        </div>
    </Wrapper>

    const Inner = [
        <div key={generate()}>
            #{props.rank ? props.rank : "?"}&nbsp;
        </div>,
        <SideTeam
        onTeamClick={async ()=>setShow(!show)}
        ellipsize={8}
        key={generate()}
        reverse={props.reverse}
        size={14}
        team={props.team}
        classNames={props.classNames?.filter(name=>name.startsWith("text-"))} style={{
            fontSize : 10,
            padding : 0,
            width : "100%",
            textAlign : props.reverse ? "right" : "left",
            justifyItems : props.reverse ? "right" : "left"
        }} hideVisitorStatus viusage={_viusage}/>,
        <div 
        key={generate()}
        style={{
            fontSize : 8
        }}
        className='text-success-500'>
            {getToRound
            ?  `${getToRound.toFixed(0)}%`
            : "--"}
        </div>
    ]

    return (
        <Wrapper
        viusage={_viusage}
        classNames={[...!props.overrideClasses ? BRACKET_MATCHUP_STACKDOWN_MEMBER_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BRACKET_MATCHUP_STACKDOWN_MEMBER_STYLE : {}, ...props.style}}>
            <div style={{
                display : "grid",
                alignItems : "center",
                justifyItems : "center",
                gridTemplateColumns : props.reverse ? "2fr 9fr 1fr" : "1fr 9fr 2fr"
            }}>
                {props.reverse ? Inner.reverse() : Inner}
            </div>
            <div style={{
                display : "grid",
                gridTemplateColumns : "1fr 1fr 1fr",
                alignContent : "center",
                alignItems : "center"
            }}>
                {props.reverse ? Tuple.reverse() : Tuple}
            </div>
            {show && Popup}
        </Wrapper>
    )
};