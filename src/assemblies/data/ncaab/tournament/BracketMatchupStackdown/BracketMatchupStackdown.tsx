import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { Stackdown } from '../../../../../components/input/select/Stackdown/Stackdown';
import { ontology } from '../../../../../util';
import { BracketGameViewlike, MockBracketGameView } from '../../../../../util/ontology/bracket';
import { Viusagelike } from '../../../../../util/viusage/primary';
import { BracketMatchupStackdownMember } from '../BracketMatchupStackdownMember/BracketMatchupStackdownMember';
import { MockOver } from '../../../../../components/output/MockOver';
import { BracketMatchupEmptyStackdownMember } from '../BracketMatchupEmptyStackdownMember/BracketMatchupEmptyStackdownMember';

export const BRACKET_MATCHUP_STACKDOWN_CLASSNAMES : string[] = [ ];
export const BRACKET_MATCHUP_STACKDOWN_STYLE : React.CSSProperties = {
    position : "relative",
};

export type BracketMatchupStackdownProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    bracketGameView ? : BracketGameViewlike
    onWinnerSelect ? : (id : string)=>Promise<void>;
    viusage ? : Viusagelike;
    reverse ? : boolean;
    center ? : boolean;
};

export const BracketMatchupStackdown : FC<BracketMatchupStackdownProps>  = (props) =>{

    const _viusage = props.viusage||"wrap";

    const _bracketGameView = props.bracketGameView;

    const _Options : {
        [key : string] : React.ReactNode;
    } = {};


    if(_bracketGameView?.top)
        _Options["top"] = 
        <BracketMatchupStackdownMember 
            key={"top"}
            rank={_bracketGameView.rankTop}
            reverse={props.reverse}
            viusage={_viusage}
            actualScore={_bracketGameView.game?.HomeTeamScore}
            bracketProbability={_bracketGameView.topProbability}
            gameProbability={_bracketGameView.topWin}
            projectedScore={_bracketGameView.gameProjection?.home_team_score}
            team={_bracketGameView.top}/>;
    else 
        _Options["top-null"] = 
        <BracketMatchupEmptyStackdownMember/>;

    if(_bracketGameView?.bottom)
        _Options["bottom"] = 
        <BracketMatchupStackdownMember 
            key={"bottom"}
            rank={_bracketGameView.rankBottom}
            reverse={props.reverse}
            actualScore={_bracketGameView.game?.AwayTeamScore}
            bracketProbability={_bracketGameView.bottomProbability}
            gameProbability={_bracketGameView.bottomWin}
            projectedScore={_bracketGameView.gameProjection?.away_team_score}
            team={_bracketGameView.bottom}/>;
    else 
        _Options["bottom-null"] = 
        <BracketMatchupEmptyStackdownMember />;

    const handleWinnerSelect = async (id : string)=>{

        if(props.onWinnerSelect){

            switch(id) {

                case "top" : {

                    if(_bracketGameView?.top)
                        props.onWinnerSelect(_bracketGameView.top.TeamID.toString());

                    return
                }

                case "bottom" : {

                    if(_bracketGameView?.bottom)
                        props.onWinnerSelect(_bracketGameView.bottom.TeamID.toString());

                    return
                }


            }

        }

    }

    const unmap = _bracketGameView?.winnerId === _bracketGameView?.top?.TeamID.toString()
    ? "top" 
    : _bracketGameView?.winnerId === _bracketGameView?.bottom?.TeamID.toString()
    ? "bottom"
    : undefined;

    return (
        <Wrapper
        viusage={_viusage}
        classNames={[...!props.overrideClasses ? BRACKET_MATCHUP_STACKDOWN_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BRACKET_MATCHUP_STACKDOWN_STYLE : {}, ...props.style}}>
            <Stackdown 
                reverseBorder={props.reverse}
                borderColor={"green"}
                classNames={["gap-2"]}
                viusage={_viusage}
                handleOptionSelect={handleWinnerSelect}
                selected={unmap}
                options={_Options}/>
            <Wrapper 
                viusage={_viusage}
                invert
                style={{
                    position : "absolute",
                    height : 0,
                    width : 0,
                    overflow : "visible",
                    top : "50%",
                    left : props.center ? "50%" : props.reverse ? "75%" : "25%",
                    textAlign : props.center ? "center" : props.reverse ? "right" : "left",
                    display : "grid",
                    alignContent : "center",
                    alignItems : "center",
                    justifyContent : "center",
                    justifyItems : "center",
                    fontSize : 10
                }}>
                VS
            </Wrapper>
        </Wrapper>
    )
};