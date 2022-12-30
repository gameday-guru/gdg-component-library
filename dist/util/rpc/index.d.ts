import { EfficiencyTablelike, ProjectionTablelike, RadarTablelike, TrendTablelike } from "../ontology";
/**
 *
 * @returns
 */
export declare const getProjectionTable: () => Promise<ProjectionTablelike>;
export declare const getEfficiencyTable: () => Promise<EfficiencyTablelike>;
export declare const getTrendTable: () => Promise<TrendTablelike>;
export declare const getRadarTable: () => Promise<RadarTablelike>;
