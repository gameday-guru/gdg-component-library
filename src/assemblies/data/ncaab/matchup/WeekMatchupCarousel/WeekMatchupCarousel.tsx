import React, {FC, ReactElement} from 'react';
import { Calendar } from 'react-bootstrap-icons';
import { Wrapper } from '../../../../../components';
import { Carousel } from '../../../../../components/navigation/panels';
import { ontology } from '../../../../../util';
import { MockProjectedGame } from '../../../../../util/ontology';
import { StackedMatchup } from '../StackedMatchup';

export const WEEK_MATCHUP_CAROUSEL_CLASSNAMES : string[] = [
    "rounded-lg",
    "p-4"
];
export const WEEK_MATCHUP_CAROUSEL_STYLE : React.CSSProperties = {
};

export type WeekMatchupCarouselProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    groupBy ? : number;
    onTeamClick ? : (teamId : string)=>Promise<void>;
    onMatchupClick ? : (gameId : string)=>Promise<void>;
    gamesThisWeek ? : ontology.ProjectedGamelike[];
};

export const WeekMatchupCarousel : FC<WeekMatchupCarouselProps>  = (props) =>{

    const _weeksGames : ontology.ProjectedGamelike[] 
    = props.gamesThisWeek||Array(15).fill(MockProjectedGame);
    const _groupBy = props.groupBy||4;

    const entries = _weeksGames
    .reduce((agg, game, i)=>{
        agg[Math.floor(i/_groupBy)].push(game);
        return agg;

    }, Array(Math.ceil(_weeksGames.length/_groupBy)).fill(undefined).map(()=>[]) as ontology.ProjectedGamelike[][])
    .map((games)=>{

        const gameEntries = games.map((game)=>{
            return <StackedMatchup
                game={game.game}
                onMatchupClick={props.onMatchupClick}
                onTeamClick={props.onTeamClick}
                home={game.home}
                away={game.away}
                gameProjection={game.gameProjection}/>
        });
        return <div className='grid gap-4' style={{
            gridTemplateColumns : Array(_groupBy).fill("1fr").join(" ")
        }}>
            {gameEntries}
        </div> 

    });

    const label = <h2 style={{
        display : "flex",
        alignContent : "center",
        alignItems : "center"
    }}>
        This Week's Games&emsp;&emsp;<Calendar/>
    </h2>

    return (
        <Wrapper
        viusage='wrap'
        classNames={[...!props.overrideClasses ? WEEK_MATCHUP_CAROUSEL_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? WEEK_MATCHUP_CAROUSEL_STYLE : {}, ...props.style}}>
            <Carousel 
            Label={label}
            Entries={entries}/>
        </Wrapper>
    )
};