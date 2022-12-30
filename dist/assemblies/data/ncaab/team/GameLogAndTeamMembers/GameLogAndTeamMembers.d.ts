import React, { FC } from 'react';
import { ontology } from '../../../../../util';
export declare const GAME_LOG_AND_TEAM_MEMBERS_CLASSNAMES: string[];
export declare const GAME_LOG_AND_TEAM_MEMBERS_STYLE: React.CSSProperties;
export declare type GameLogAndTeamMembersProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    games?: ontology.ProjectedGamelike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
};
export declare const GameLogAndTeamMembers: FC<GameLogAndTeamMembersProps>;
