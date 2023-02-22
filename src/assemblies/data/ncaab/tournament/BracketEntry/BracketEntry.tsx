import React, { FC, ReactElement } from 'react';
import { ontology } from '../../../../../util';
import { BracketCorrectedMatchuplike } from '../../../../../util/ontology';
import { SideTeam } from '../../team/SideTeam';
import { BracketTeam } from '../BracketTeam/BracketTeam';
import { Vs } from '../../../../../components/output/indicators/label/Vs';
import { height } from '@mui/system';
import { Wrapper } from '../../../../../components';

export const BRACKET_ENTRY_CLASSNAMES: string[] = [
    "grid"
];
export const BRACKET_ENTRY_STYLE: React.CSSProperties = {
    gridTemplateColumns: "1fr 5fr 1fr",
    gridTemplateRows: "10fr 10fr",
};

export type BracketEntryProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    up?: boolean;
    inheritance?: boolean;
    matchup ? : BracketCorrectedMatchuplike;
    home?: ontology.Teamlike;
    away?: ontology.Teamlike;
};

export const BracketEntry: FC<BracketEntryProps> = (props) => {

    const _up = props.up || false;
    const _inheritance = props.inheritance || false;

    return (
        <div
            className={[...!props.overrideClasses ? BRACKET_ENTRY_CLASSNAMES : [], ...props.classNames || []].join(" ")}
            style={{ ...!props.overrideStyle ? BRACKET_ENTRY_STYLE : {}, ...props.style }}>
            <div style={{
                ..._inheritance ? {
                    borderBottom: "3px solid",
                } : {

                }
                //  |
                //  |--
                //  |
            }}></div>
            <div>
                {/** THIS IS WHERE the matchup should go */}
            </div>
            <div style={{
                ..._up ? {
                    borderBottom: "3px solid",
                    borderRight: "3px solid"
                } : {

                }
                // _
                //  |
            }}>

            </div>
            <div style={{
                ..._up ? {

                } : {
                    borderTop: "3px solid",
                    borderRight: "3px solid"
                }
                //  |
                // -
            }}>
            </div>
        </div>
    )
};