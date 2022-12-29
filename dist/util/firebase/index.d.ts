import * as ontology from "../ontology";
import { GameByDatelike, Teamlike } from "../ontology";
export declare const functions: import("@firebase/functions").Functions;
export declare const sportsdataioGet: import("@firebase/functions").HttpsCallable<{
    path: string;
}, unknown>;
export declare const modelGet: import("@firebase/functions").HttpsCallable<{
    path: string;
}, unknown>;
/**
 *
 * @param date
 * @returns
 */
export declare const getGamesByDate: (date: Date) => Promise<ontology.GameByDatelike[]>;
/**
 * Gets all games in the next week.
 * @param date
 * @returns
 */
export declare const getGamesInNextWeek: (date: Date) => Promise<ontology.GameByDatelike[]>;
/**
 * Gets all games in the next week.
 * @param date
 * @returns
 */
export declare const getGamesInNextWeekTable: (date: Date) => Promise<{
    [key: string]: ontology.GameByDatelike;
}>;
/**
 *
 * @param date
 * @returns
 */
export declare const getTeams: () => Promise<ontology.Teamlike[]>;
export declare const getTeamsTable: () => Promise<{
    [key: string]: ontology.Teamlike;
}>;
