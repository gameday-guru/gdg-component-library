export enum MockMode {
    MOCK = "MOCK",
    LOADING = "LOADING",
    LOADED = "LOADED"
}

export interface Mockable {
    __mock ? : MockMode;
}

/**
 * By default, mock status is loaded, that is
 * @param mock 
 * @returns 
 */
export const getMockStatus = (mock : Mockable) : MockMode =>{

    if( // if we're not in mock mode, but it says to mock
        !import.meta.env.VITE_MOCK
        && mock.__mock === MockMode.MOCK
    ) return MockMode.LOADING; // make this loading

    // otherwise just return the mock or loaded
    return mock.__mock||MockMode.LOADED;
}

export const isMockLoading = (mock : Mockable) : boolean =>{
    return getMockStatus(mock) === MockMode.LOADING;
}

export const areMocksLoading = (mocks ? : Mockable[]) : boolean=>{

    if(!mocks) return false;
    return mocks.reduce((agg, mock)=>agg || isMockLoading(mock), false);

}

/**
 * Creates a mock.
 * @param a 
 * @returns 
 */
export const mock = <T extends any>(a : T) : T & Mockable =>{

    (a as Mockable).__mock = MockMode.MOCK;

    return a as T & Mockable;

}