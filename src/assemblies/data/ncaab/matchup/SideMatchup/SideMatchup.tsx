import React, {FC, ReactElement} from 'react';
import { Button, Wrapper } from '../../../../../components';
import { MockOver } from '../../../../../components/output/MockOver';
import { ontology } from '../../../../../util';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { DateString } from '../../generic';
import { SideTeam } from '../../team/SideTeam';

export const SIDE_MATCHUP_CLASSNAMES : string[] = [
    "grid"
];
export const SIDE_MATCHUP_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    gridTemplateRows : "1fr 10fr",
};

export type SideMatchupProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    game ? : ontology.GameByDatelike;
    home ? : ontology.Teamlike;
    away ? : ontology.Teamlike;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    short ? : boolean;
    viusage ? : Viusagelike;
    stack ? : boolean;
    size ? : number;
};

export const SideMatchup : FC<SideMatchupProps>  = (props) =>{

    const _game = props.game||ontology.MockGame;
    const _home = props.home||ontology.MockHome;
    const _away = props.away||ontology.MockAway;

    const _dateString = <MockOver
        Content={<DateString date={new Date(_game.DateTimeUTC ? (_game.DateTimeUTC + "Z") : _game.Day)}/>}
        dependencies={[_game]}/>;

    const _awaySideTeam = <MockOver
        Content={<SideTeam
            away
            size={props.size}
            short={props.short}
            viusage='backdrop'
            team={_away}/>}
        dependencies={[_away]}/>

    const _homeSideTeam = <MockOver
        Content={<SideTeam
            style={{ 
                direction : !props.stack ? 'rtl' : undefined
            }}
            size={props.size}
            short={props.short}
            viusage='backdrop'
            team={_home}/>}
        dependencies={[_home]}/>

    const handleMatchupClick = async ()=>{
        if(props.onMatchupClick) props.onMatchupClick(_game.GameID.toString());
    }

    return (
        <Button
        onClick={handleMatchupClick}
        div
        viusage={props.viusage||"backdrop"}
        classNames={[...!props.overrideClasses ? SIDE_MATCHUP_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? SIDE_MATCHUP_STYLE : {}, ...props.style}}>
            <div>
                {_dateString}
            </div>
            <div style={{
                display : "grid",
                gridTemplateColumns : props.stack ?  "1fr" : "10fr 1fr 10fr" ,
                alignContent : "center",
                alignItems : "center"
            }}>
                <div>
                   {_awaySideTeam}
                </div>
                <div style={props.stack ? {
                    display : "grid",
                    gridTemplateColumns : "1fr 3fr"
                } : {}}>
                    {props.stack &&<div>

                    </div>}
                    <div style={props.stack ? {
                        textAlign : "left"
                    } : {}}>
                        {_game.NeutralVenue ? "vs." : "@"}
                    </div>
                </div>
                <div>
                    {_homeSideTeam}
                </div>
            </div>
        </Button>
    )
};