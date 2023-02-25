import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Bracket } from '../../assemblies/data/ncaab/tournament/Bracket';
import { BracketTeamCorrect } from '../../assemblies/data/ncaab/tournament/BracketTeam/BracketTeamCorrect/BracketTeamCorrect';
import { BracketTeamIncorrect } from '../../assemblies/data/ncaab/tournament/BracketTeam/BracketTeamIncorrect/BracketTeamIncorrect';
import { BracketTeamUndecided } from '../../assemblies/data/ncaab/tournament/BracketTeam/BracketTeamUndecided/BracketTeamUndecided';
import { Cropdown } from '../../components/input/select/Cropdown';
import { useMockProjection } from '../../logic/processing/react/useMockProjection';
import { useTopTeams } from '../../logic/processing/react/useTopTeams';
import { ontology } from '../../util';
import { getBracketOfTeams, Mock4TeamBracket, MockSelectionTeamBracket, ProjectedGamelike, ProjectionEntrylike } from '../../util/ontology';
import Decimal from "decimal.js";

export const PLAYGROUND_CLASSNAMES : string[] = [ ];
export const PLAYGROUND_STYLE : React.CSSProperties = {
};

const RADIAN = Math.PI / 180;
const SPORT_EXPONENT = 11.5;
export const pythagoreanWin = (home_team_score : number, away_team_score : number) : [number, number]=>{
    
    const _homeScore = new Decimal(home_team_score);
    const _awayScore = new Decimal(away_team_score);
    const pythagoreanTotal : Decimal = (_homeScore.pow(SPORT_EXPONENT)).plus(_awayScore.pow(SPORT_EXPONENT));
    const homePythagoreanWin : Decimal = _homeScore.pow(SPORT_EXPONENT).dividedBy(pythagoreanTotal);
    const awayPythagoreanWin : Decimal = _awayScore.pow(SPORT_EXPONENT).dividedBy(pythagoreanTotal);
    const _homePythagoreanWin : number = homePythagoreanWin.toNumber();
    const _awayPythagoreanWin : number = awayPythagoreanWin.toNumber();

    return [_homePythagoreanWin, _awayPythagoreanWin];

}

export type PlaygroundProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const Playground : FC<PlaygroundProps>  = (props) =>{

    const {
        getGdgTopXTeams
    } = useTopTeams();

    const top64 = getGdgTopXTeams(64)?.map((team)=>team.team);

    const [bracket, setBracket] = useState<ontology.SparseBracketlike>(
        MockSelectionTeamBracket
    );

    useEffect(()=>{

        if(top64)
            setBracket(getBracketOfTeams(top64))
        

    }, [top64 !== undefined])

    const handleBracketUpdate = async (
        update : (bracket : ontology.SparseBracketlike)=>Promise<ontology.SparseBracketlike>
    )=>{

        const newBracket = await update(bracket);

        setBracket(newBracket);

    }

    const [mockProjections, setMockProjections] = useState<{
        [key : string] : {
            [key : string] : ProjectionEntrylike
        }
    }>({});

    const {
        getMockProjection,
    } = useMockProjection();

    const _getMockProjection = (args : {
        home_team_id : string,
        away_team_id : string,
        neutral : boolean
    }) : ProjectionEntrylike | undefined  =>{

        if(mockProjections[args.home_team_id]?.[args.away_team_id])
            return mockProjections[args.home_team_id]?.[args.away_team_id];
        

        const projection = getMockProjection(args);

        if(!projection) return undefined;

        const copyProjections = {...mockProjections};
        copyProjections[args.home_team_id] = {
            ...copyProjections[args.home_team_id],
            [args.away_team_id] : projection
        }
        setMockProjections(copyProjections);


        return projection;

    }

    const getProbability = (args : {
        home_team_id : string,
        away_team_id : string,
        pos : {
            rowNo : number,
            colNo : number
        }
    }) : {
        homeProbability ? : number,
        awayProbability ? : number, 
    }=>{

        const projection = 
        mockProjections[args.home_team_id]?.[args.away_team_id]
        || mockProjections[args.away_team_id]?.[args.home_team_id];

        if(!projection) return {
    
        }

        const [homePct, awayPct] = pythagoreanWin(projection.home_team_score, projection.away_team_score);

        if(args.pos.colNo === 0){

            return {
                homeProbability : homePct,
                awayProbability : awayPct
            }

        }

        const offset = args.pos.colNo > 0 ? 2 ** (args.pos.colNo - 1) : args.pos.colNo; 

        const above =  bracket[args.pos.rowNo - offset]?.[args.pos.colNo - 1];
        const aboveGame = above?.actualGame||above?.userPick;
        const aboveOpponentId =
        aboveGame?.away?.TeamID.toString() === args.away_team_id 
        ? aboveGame?.home?.TeamID.toString()
        : aboveGame?.away?.TeamID.toString();
       
        const below = bracket[args.pos.rowNo + offset]?.[args.pos.colNo - 1];
        const belowGame = below?.actualGame||below?.userPick;
        const belowOpponentId = 
        belowGame?.away?.TeamID.toString() === args.away_team_id 
        ? belowGame?.home?.TeamID.toString()
        : belowGame?.away?.TeamID.toString();

        if(!(aboveOpponentId && belowOpponentId)){
            return {

            }
        }

        const homePctPrev = getProbability({
            home_team_id : args.home_team_id,
            away_team_id : aboveOpponentId,
            pos : {
                rowNo : args.pos.rowNo - offset,
                colNo : args.pos.colNo - 1
            }
        }).homeProbability;

        const awayPctPrev = getProbability({
            home_team_id : args.away_team_id,
            away_team_id : belowOpponentId,
            pos : {
                rowNo : args.pos.rowNo + offset,
                colNo : args.pos.colNo - 1
            }
        }).homeProbability;

        return {
            homeProbability :  homePctPrev ? homePctPrev * homePct : homePct * (1/(2** args.pos.colNo)),
            awayProbability : awayPctPrev ? awayPctPrev * awayPct : awayPct * (1/(2** args.pos.colNo))
        }
        

    }
    


    return (
        <div
        className={[...!props.overrideClasses ? PLAYGROUND_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? PLAYGROUND_STYLE : {}, ...props.style}}>
            <h2 style={{
                textAlign : "left"
            }} className='text-2xl'>Visual Bracket</h2>
            <Bracket
                bracket={Mock4TeamBracket}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{
                textAlign : "left"
            }} className='text-2xl'>Sample Top 64</h2>
            <Bracket
                getProbability={getProbability}
                getMockProjection={_getMockProjection}
                bracket={bracket}
                onBracketUpdate={handleBracketUpdate}/>
        </div>
    )
};