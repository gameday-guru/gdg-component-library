export const FilterCaseValues = [
    "TEXT",
    "GEO",
    "NUMERIC",
    "DATE"
] as const;
export type FilterCase = typeof FilterCaseValues[number];
export type FieldCase = {
    [key : string] : FilterCase[];
}

export const FilterRelationShipValues = [
    "AND",
    "OR"
] as const;
export type FilterRelationship = typeof FilterRelationShipValues[number];
export type FilterExpression = {};
export type Comparison = [any, any];

export const NumericFilterValues = [
    "LT",
    "GT",
    "EQ",
    "LTE",
    "GTE",
    "APPROX"
] as const;
export type NumericFilter = typeof NumericFilterValues[number];

export type NumericFilterPrimitive = {
    case : "NUMERIC",
    filter : NumericFilter,
    right : number
}
export type TextFilterPrimitive = {
    case : "TEXT",
    filter : NumericFilter,
    right : string
};
export type GeoFilterPrimitive = {
    case : "GEO",
    filter : NumericFilter,
    right : string
};
export type DateFilterPrimitive = {
    case : "DATE",
    filter : NumericFilter,
    right : string
};

export type FilterPrimitive = NumericFilterPrimitive | TextFilterPrimitive | DateFilterPrimitive | GeoFilterPrimitive;

export type FilterToken = {
    field ? : string;
    relationship : FilterRelationship,
    terms : (FilterToken | FilterPrimitive)[]
}

export type FilterTerms = FilterToken;

export type ToFilterData = {
    [key : string] : (data : any)=>any;
}

export const FieldCaseToFilter = {
    "TEXT" : [],
    "NUMERIC" : NumericFilterValues,
    "GEO" : [],
    "DATE" : []
} as const;

export const isFilterToken = (obj : any) : obj is FilterToken =>{
    return (!!obj.relationship) && (!!obj.terms);
}

export const MU = .0001;


/**
 * 
 * @param data 
 * @param filter 
 */
export const evaluateNumericFilterPrimitive = (left : any, filter : NumericFilterPrimitive) : boolean=>{


    try {
        switch(filter.filter) {

            case "EQ" : {
                return left === filter.right;
            }

            case "APPROX" : {

                return Math.abs(left - filter.right) < MU;
            }

            case "GT" : {
                return left > filter.right;
            }

            case "GTE" : {
                return left >= filter.right;
            }

            case "LT" : {
                return left < filter.right;
            }
            
            case "LTE" : {
                return left <= filter.right;
            }

            default : {
                return true;
            }

        }
    } catch(e){
        return true;
    }

}

/**
 * Evaluates a filter primitive.
 * @param data is the data under comparison.
 * @param filter is the filter primitive to be applied.
 * @returns 
 */
export const evaluateFilterPrimitive = (data : any, filter : FilterPrimitive) : boolean =>{

    switch(filter.case){

        case "NUMERIC" : {
            return evaluateNumericFilterPrimitive(data, filter as NumericFilterPrimitive);
        }

        default : {
            return true;
        }

    }

}

/**
 * Evaluates the term for the filter token.
 * @param data 
 * @param filter 
 * @returns 
 */
export const evaluateAndFilterToken = (data : any, filter : FilterToken, toFilterData : ToFilterData) : boolean =>{

    if(filter.relationship !== "AND") 
        throw new Error("Cannot evaluate AND filter token for non AND term.");

    for(const term of filter.terms) {
        
        let _data = data;
        if(isFilterToken(term) && term.field){
            _data = data[term.field];
            if(toFilterData[term.field]) 
                _data = toFilterData[term.field](_data);
        }

        if(isFilterToken(term) && !evaluateFilterToken(_data, term, toFilterData)) return false;
        else if (!evaluateFilterPrimitive(_data, term as FilterPrimitive)) return false;
    }

    return true;

}

/**
 * Evaluates the term for the filter token.
 * @param data 
 * @param filter 
 * @returns 
 */
 export const evaluateOrFilterToken = (data : any, filter : FilterToken, toFilterData : ToFilterData) : boolean =>{

    if(filter.relationship !== "OR") 
        throw new Error("Cannot evaluate OR filter token for non OR term.");

    for(const term of filter.terms) {

        let _data = data;
        if(isFilterToken(term) && term.field){
            _data = data[term.field];
            if(toFilterData[term.field]) 
                _data = toFilterData[term.field](_data);
        }

        if(isFilterToken(term) && evaluateFilterToken(_data, term, toFilterData)) return true;
        else if (evaluateFilterPrimitive(_data, term as FilterPrimitive)) return true;
    }

    return false;

}

/**
 * 
 * @param data 
 * @param filter 
 * @returns 
 */
export const evaluateFilterToken = (data : any, filter : FilterToken, toFilterData : ToFilterData) : boolean =>{

    switch(filter.relationship) {

        case "AND" : {
            return evaluateAndFilterToken(data, filter, toFilterData);
        }

        case "OR" : {
            return evaluateOrFilterToken(data, filter, toFilterData);
        }

        default : {
            return true;
        }

    }

};