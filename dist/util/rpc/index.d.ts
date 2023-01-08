import { EfficiencyTablelike, ProjectionEntrylike, ProjectionTablelike, RadarTablelike, TrendTablelike } from "../ontology";
/**
 *
 * @returns
 */
export declare const getProjectionTable: () => Promise<ProjectionTablelike>;
export declare const getEfficiencyTable: () => Promise<EfficiencyTablelike>;
export declare const getTrendTable: () => Promise<TrendTablelike>;
export declare const getRadarTable: () => Promise<RadarTablelike>;
export interface MockProjectionArgslike {
    home_team_id: string;
    away_team_id: string;
    neutral: boolean;
}
export declare const getMockProjection: (args: MockProjectionArgslike) => Promise<ProjectionEntrylike>;
