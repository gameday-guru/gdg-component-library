import React, {FC, ReactElement} from 'react';
import { generate } from 'shortid';
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { SidePlayer } from '../../player';

export const PLAYERS_CONTAINER_CLASSNAMES : string[] = [
    "p-4",
    "rounded-lg"
 ];
export const PLAYERS_CONTAINER_STYLE : React.CSSProperties = {
   
};


export const PLAYERS_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2",
    "overflow-y-scroll"
];
export const PLAYERS_INNER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
};

export type PlayersProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    players ? : ontology.Playerlike[];
    Label ? : React.ReactNode;
};

export const Players : FC<PlayersProps>  = (props) =>{

    const _Label = props.Label||<>Team Members</>

    const _players = props.players||Array(25).fill(ontology.MockPlayer);
    const playerEntries = _players.map((player)=><SidePlayer key={generate()} player={player}/>)

    return (
        <Wrapper
            viusage={"wrap"}
            classNames={[...!props.overrideClasses ? PLAYERS_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? PLAYERS_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? PLAYERS_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? PLAYERS_INNER_STYLE : {}, ...props.style}}>
                <div>
                    <h2 style={{
                        textAlign : 'start'
                    }} className='text-lg'>{_Label}</h2>
                    <hr/>
                </div>
                <div className='gap-2' style={{ overflow : "scroll", display : "grid", gridTemplateColumns : "1fr", }}>
                    {playerEntries}
                </div>
            </div>
        </Wrapper>
    )
};