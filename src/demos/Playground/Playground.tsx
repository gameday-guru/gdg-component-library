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

export const PLAYGROUND_CLASSNAMES : string[] = [ ];
export const PLAYGROUND_STYLE : React.CSSProperties = {
};

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

        if(top64){
            console.log(top64, getBracketOfTeams(top64 as any))
            setBracket(getBracketOfTeams(top64))
        }

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

    


    return (
        <div
        className={[...!props.overrideClasses ? PLAYGROUND_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? PLAYGROUND_STYLE : {}, ...props.style}}>
            <Bracket
                getMockProjection={_getMockProjection}
                bracket={bracket}
                onBracketUpdate={handleBracketUpdate}/>
        </div>
    )
};