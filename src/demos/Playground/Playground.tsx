import React, {FC, ReactElement} from 'react';
import { Bracket } from '../../assemblies/data/ncaab/tournament/Bracket';

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
        </div>
    )
};