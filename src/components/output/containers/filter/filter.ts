export type FilterCase = "string" | "geo" | "numeric" | "date";
export type FilterRelationship = "AND" | "OR";
export type FilterExpression = {};
export type Comparison = [any, any];

export type NumericFilter = FilterExpression | "lt" | "gt" | "eq" | "lte" | "gte" | "approx";
export type NumericFilterPrimitive = {
    case : "numeric",
    filter : NumericFilter,
    right : number
}
export type FilterPrimitive = NumericFilterPrimitive;

export type FilterToken = {
    relationship : FilterRelationship,
    terms : (FilterToken | FilterPrimitive)[]
}
export type FilterTerms = {
    [key : string] : FilterToken
}; 
export type ToFilterData = {
    [key : string] : (data : any)=>any;
}

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

            case "eq" : {
                return left === filter.right;
            }

            case "approx" : {

                return Math.abs(left - filter.right) < MU;
            }

            case "gt" : {
                return left > filter.right;
            }

            case "gte" : {
                return left >= filter.right;
            }

            case "lt" : {
                return left < filter.right;
            }
            
            case "lte" : {
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

        case "numeric" : {
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
export const evaluateAndFilterToken = (data : any, filter : FilterToken) : boolean =>{

    if(filter.relationship !== "AND") 
        throw new Error("Cannot evaluate AND filter token for non AND term.");

    for(const term of filter.terms) {
        if(isFilterToken(term) && !evaluateFilterToken(data, term)) return false;
        else if (!evaluateFilterPrimitive(data, term as FilterPrimitive)) return false;
    }

    return true;

}

/**
 * Evaluates the term for the filter token.
 * @param data 
 * @param filter 
 * @returns 
 */
 export const evaluateOrFilterToken = (data : any, filter : FilterToken) : boolean =>{

    if(filter.relationship !== "OR") 
        throw new Error("Cannot evaluate OR filter token for non OR term.");

    for(const term of filter.terms) {
        if(isFilterToken(term) && evaluateFilterToken(data, term)) return true;
        else if (evaluateFilterPrimitive(data, term as FilterPrimitive)) return true;
    }

    return false;

}

/**
 * 
 * @param data 
 * @param filter 
 * @returns 
 */
export const evaluateFilterToken = (data : any, filter : FilterToken) : boolean =>{

    switch(filter.relationship) {

        case "AND" : {
            return evaluateAndFilterToken(data, filter);
        }

        case "OR" : {
            return evaluateOrFilterToken(data, filter);
        }

        default : {
            return true;
        }

    }

};