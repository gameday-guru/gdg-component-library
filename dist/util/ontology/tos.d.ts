import { Mockable } from "./mockable";
export interface Toslike extends Mockable {
    title?: string;
    content?: string;
}
export declare const MockTos: Toslike;
export interface TosTablelike {
    [key: string]: Toslike;
}
