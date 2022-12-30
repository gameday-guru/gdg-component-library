import React, { FC } from 'react';
import { Teamlike } from '../../../../../util/ontology';
export declare const TEAM_EFFICIENCY_TABLE_INNER_CLASSNAMES: string[];
export declare const TEAM_EFFICIENCY_TABLE_INNER_STYLE: React.CSSProperties;
export declare const TEAM_EFFICIENCY_TABLE_CONTAINER_CLASSNAMES: string[];
export declare const TEAM_EFFICIENCY_TABLE_CONTAINER_STYLE: React.CSSProperties;
export interface TeamEfficiencyTableEntrylike {
    "Team Name": Teamlike;
    "Conference": string;
    "Record"?: [number, number, number];
    "Power Rating": number;
    "Tempo": number;
    "Offensive Efficiency": number;
    "Defensive Efficiency": number;
    /** Whether the entry is liked. Need to include better handling in the table measure. */
    "Liked": boolean;
}
/**
 *
 * @param mean
 * @param stdev
 * @returns
 */
export declare const makeStdTableEntry: (arr: number[]) => (rating: number) => React.ReactNode;
export declare type TeamEfficiencyTableProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    tableEntries?: TeamEfficiencyTableEntrylike[];
    onTeamClick?: (teamId: string) => Promise<void>;
};
export declare const TeamEntry: (onTeamClick?: ((teamId: string) => Promise<void>) | undefined) => (team: Teamlike) => React.ReactNode;
export declare const RecordEntry: (record?: [number, number, number]) => React.ReactNode;
export declare const compareRecord: (a?: [number, number, number], b?: [number, number, number]) => number;
export declare const compareTeam: (a: Teamlike, b: Teamlike) => number;
export declare const MockTableEntries: TeamEfficiencyTableEntrylike[];
export declare const TeamEfficiencyTable: FC<TeamEfficiencyTableProps>;
