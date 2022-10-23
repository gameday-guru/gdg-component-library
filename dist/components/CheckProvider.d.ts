import React, { FC } from 'react';
export interface CheckContextI {
    checksCompleted: boolean;
    dispatch: (fn: (state: CheckContextI) => CheckContextI) => void;
}
export declare const CheckContext: React.Context<CheckContextI>;
export declare const CheckReducer: (state: CheckContextI, action: (state: CheckContextI) => CheckContextI) => CheckContextI;
export declare type CheckProviderProps = {
    children?: React.ReactNode;
};
export declare const CheckProvider: FC<CheckProviderProps>;
export declare const useCheckStore: () => CheckContextI;
