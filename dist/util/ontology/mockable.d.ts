export declare enum MockMode {
    MOCK = "MOCK",
    LOADING = "LOADING",
    LOADED = "LOADED"
}
export interface Mockable {
    __mock?: MockMode;
}
/**
 * By default, mock status is loaded, that is
 * @param mock
 * @returns
 */
export declare const getMockStatus: (mock: Mockable) => MockMode;
export declare const isMockLoading: (mock: Mockable) => boolean;
export declare const areMocksLoading: (mocks?: Mockable[]) => boolean;
/**
 * Creates a mock.
 * @param a
 * @returns
 */
export declare const mock: <T extends unknown>(a: T) => T & Mockable;
