import React, {FC, ReactElement} from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import { Button } from '../../../../../components';
import { ontology } from '../../../../../util';

export const SIDE_PLAYER_CLASSNAMES : string[] = [
    "grid",
    "gap-2",
];
export const SIDE_PLAYER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 3fr",
    alignContent : "center",
    alignItems : "center"
};

export type SidePlayerProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    player ? : ontology.Playerlike
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const SidePlayer : FC<SidePlayerProps>  = (props) =>{

    const _player = props.player||ontology.MockPlayer;

    return (
        <Button
        viusage='wrap'
        {...props}
        classNames={[...!props.overrideClasses ? SIDE_PLAYER_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? SIDE_PLAYER_STYLE : {}, ...props.style}}>
            <div>
                <PersonCircle size={18} color='#555555'/>
            </div>
            <div>
                <h2 className='text'>{_player.LastName}, {_player.FirstName}</h2>
            </div>
        </Button>
    )
};