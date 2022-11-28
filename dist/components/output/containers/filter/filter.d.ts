export declare const FilterCaseValues: readonly ["TEXT", "GEO", "NUMERIC", "DATE"];
export declare type FilterCase = typeof FilterCaseValues[number];
export declare type FieldCase = {
    [key: string]: FilterCase[];
};
export declare const FilterRelationShipValues: readonly ["AND", "OR"];
export declare type FilterRelationship = typeof FilterRelationShipValues[number];
export declare type FilterExpression = {};
export declare type Comparison = [any, any];
export declare const NumericFilterValues: readonly ["LT", "GT", "EQ", "LTE", "GTE", "APPROX"];
export declare type NumericFilter = typeof NumericFilterValues[number];
export declare type NumericFilterPrimitive = {
    case: "NUMERIC";
    filter: NumericFilter;
    right: number;
};
export declare type TextFilterPrimitive = {
    case: "TEXT";
    filter: NumericFilter;
    right: string;
};
export declare type GeoFilterPrimitive = {
    case: "GEO";
    filter: NumericFilter;
    right: string;
};
export declare type DateFilterPrimitive = {
    case: "DATE";
    filter: NumericFilter;
    right: string;
};
export declare type Filter = NumericFilter;
export declare type FilterPrimitive = NumericFilterPrimitive | TextFilterPrimitive | DateFilterPrimitive | GeoFilterPrimitive;
export declare type FilterToken = {
    field?: string;
    relationship: FilterRelationship;
    terms: (FilterToken | FilterPrimitive)[];
};
export declare type FilterTerms = FilterToken;
export declare type ToFilterData = {
    [key: string]: (data: any) => any;
};
export declare const FieldCaseToFilter: {
    readonly TEXT: readonly [];
    readonly NUMERIC: readonly ["LT", "GT", "EQ", "LTE", "GTE", "APPROX"];
    readonly GEO: readonly [];
    readonly DATE: readonly [];
};
export declare const isFilterToken: (obj: any) => obj is FilterToken;
export declare const MU = 0.0001;
/**
 *
 * @param data
 * @param filter
 */
export declare const evaluateNumericFilterPrimitive: (left: any, filter: NumericFilterPrimitive) => boolean;
/**
 * Evaluates a filter primitive.
 * @param data is the data under comparison.
 * @param filter is the filter primitive to be applied.
 * @returns
 */
export declare const evaluateFilterPrimitive: (data: any, filter: FilterPrimitive) => boolean;
/**
 * Evaluates the term for the filter token.
 * @param data
 * @param filter
 * @returns
 */
export declare const evaluateAndFilterToken: (data: any, filter: FilterToken, toFilterData: ToFilterData) => boolean;
/**
 * Evaluates the term for the filter token.
 * @param data
 * @param filter
 * @returns
 */
export declare const evaluateOrFilterToken: (data: any, filter: FilterToken, toFilterData: ToFilterData) => boolean;
/**
 *
 * @param data
 * @param filter
 * @returns
 */
export declare const evaluateFilterToken: (data: any, filter: FilterToken, toFilterData: ToFilterData) => boolean;
