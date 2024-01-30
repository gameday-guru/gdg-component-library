import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology } from '../../../../../util';
import { MockHome, MockProjectedGame } from '../../../../../util/ontology';
import { TeamMatchupRowProjection } from '../TeamMatchupRowProjection';

export const TEAM_MATCHUPS_CLASSNAMES : string[] = [ 
    "rounded-lg",
    "grid",
    "gap-4",
    "p-4"
];
export const TEAM_MATCHUPS_STYLE : React.CSSProperties = {
};

export type TeamMatchupsProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    games ? : ontology.ProjectedGamelike[];
    team ? : ontology.Teamlike;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
};

export const TeamMatchups : FC<TeamMatchupsProps>  = (props) =>{

    const _team = props.team||MockHome;

    const _games : ontology.ProjectedGamelike[] = props.games||Array(25).fill(MockProjectedGame);
    const matchupEntries = _games
    .map((game, index)=>{
        return <TeamMatchupRowProjection 
        key={ `matchupProjectionRow-${game.game.GameID}-${index}` }
        onMatchupClick={props.onMatchupClick}
        onTeamClick={props.onTeamClick}
        game={game.game}
        gameProjection={game.gameProjection}
        home={game.home}
        away={game.away}
        gamblers={false}/>
    })

    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? TEAM_MATCHUPS_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? TEAM_MATCHUPS_STYLE : {}, ...props.style}}>
            <h2 style={{
                textAlign : 'left'
            }} className='text-lg'>{_team.School} Matchups</h2>
            <hr/>
            <div className='grid gap-4'>
                {matchupEntries}
            </div>
        </Wrapper>
    )
};