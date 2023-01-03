export const imemoize = <K extends any[], V>(
    func : (...args : K)=>V
) : (...args : K)=>V =>{

    return (...args : K) : V =>{
        
        const cache : {[key : string] : V} = {};
        const jsonArgs = JSON.stringify(args);
        if(cache[jsonArgs] !== undefined) return cache[jsonArgs];
        return func(...args);

    }

}