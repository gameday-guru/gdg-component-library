import React, {FC, ReactElement} from 'react';

export const MOCK_MATCHUP_CLASSNAMES : string[] = [ ];
export const MOCK_MATCHUP_STYLE : React.CSSProperties = {
};

export type MockMatchupProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const MockMatchup : FC<MockMatchupProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? MOCK_MATCHUP_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? MOCK_MATCHUP_STYLE : {}, ...props.style}}>

        </div>
    )
};