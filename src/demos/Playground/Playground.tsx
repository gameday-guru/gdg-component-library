import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Bracket } from '../../assemblies/data/ncaab/tournament/Bracket';
import { BracketTeamCorrect } from '../../assemblies/data/ncaab/tournament/BracketTeam/BracketTeamCorrect/BracketTeamCorrect';
import { BracketTeamIncorrect } from '../../assemblies/data/ncaab/tournament/BracketTeam/BracketTeamIncorrect/BracketTeamIncorrect';
import { BracketTeamUndecided } from '../../assemblies/data/ncaab/tournament/BracketTeam/BracketTeamUndecided/BracketTeamUndecided';
import { Cropdown } from '../../components/input/select/Cropdown';
import { useTopTeams } from '../../logic/processing/react/useTopTeams';
import { ontology } from '../../util';
import { getBracketOfTeams, Mock4TeamBracket, MockSelectionTeamBracket } from '../../util/ontology';

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
        console.log("BRACKET UPDATE", newBracket);
        setBracket(newBracket);

    }

    return (
        <div
        className={[...!props.overrideClasses ? PLAYGROUND_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? PLAYGROUND_STYLE : {}, ...props.style}}>
            <Bracket
                bracket={bracket}
                onBracketUpdate={handleBracketUpdate}/>
        </div>
    )
};