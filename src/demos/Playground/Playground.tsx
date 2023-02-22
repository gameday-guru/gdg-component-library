import React, {FC, ReactElement} from 'react';
import { Bracket } from '../../assemblies/data/ncaab/tournament/Bracket';
import { BracketTeamCorrect } from '../../assemblies/data/ncaab/tournament/BracketTeam/BracketTeamCorrect/BracketTeamCorrect';
import { BracketTeamIncorrect } from '../../assemblies/data/ncaab/tournament/BracketTeam/BracketTeamIncorrect/BracketTeamIncorrect';
import { BracketTeamUndecided } from '../../assemblies/data/ncaab/tournament/BracketTeam/BracketTeamUndecided/BracketTeamUndecided';

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

    return (
        <div
        className={[...!props.overrideClasses ? PLAYGROUND_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? PLAYGROUND_STYLE : {}, ...props.style}}>
            <Bracket/>
            <div style={{
                width : "200px"
            }}> 
                <h2>Correct w/ Incorrect Partner</h2>
                <BracketTeamCorrect/>
                <h2>Incorrect</h2>
                <BracketTeamIncorrect/>
                <h2>Undecided</h2>
                <BracketTeamUndecided/>
            </div>
        </div>
    )
};