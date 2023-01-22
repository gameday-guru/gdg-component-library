import React, {FC, ReactElement} from 'react';
import { SideTeam } from '../../team/SideTeam';

export const BRACKET_MATCHUP_CLASSNAMES : string[] = [ 
    "grid"
];
export const BRACKET_MATCHUP_STYLE : React.CSSProperties = {
    gridTemplateColumns : "2fr 1fr",
    gridTemplateRows : "1fr 1fr"
};

export type BracketMatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    up ? : boolean;
};

export const BracketMatchup : FC<BracketMatchupProps>  = (props) =>{

    const _up = props.up||false;

    return (
        <div
        className={[...!props.overrideClasses ? BRACKET_MATCHUP_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? BRACKET_MATCHUP_STYLE : {}, ...props.style}}>
            <div>
                {/** Top Team */}
            </div>
            <div style={{
                ..._up ? {
                    
                } : {
                    borderBottom : "1px solid",
                    borderRight : "1px solid"
                }
                // _
                // `|
            }}>

            </div>
            <div>
                {/** Bottom Team */}
            </div>
            <div style={{
                ..._up ? {
                    borderTop : "1px solid",
                        borderRight : "1px solid"
                    } : {

                    }
            }}>

            </div>
        </div>
    )
};