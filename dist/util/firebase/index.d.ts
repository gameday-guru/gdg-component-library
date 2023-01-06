import * as ontology from "../ontology";
import { GameByDatelike, Teamlike } from "../ontology";
export declare const functions: import("@firebase/functions").Functions;
export declare const sportsdataioGet: import("@firebase/functions").HttpsCallable<{
    path: string;
}, unknown>;
export declare const modelGet: import("@firebase/functions").HttpsCallable<{
    path: string;
}, unknown>;
export declare const confirmTosPost: import("@firebase/functions").HttpsCallable<string, boolean>;
export declare const getTosConfirmedGet: import("@firebase/functions").HttpsCallable<string, boolean>;
export declare const submitFeedbackFunc: import("@firebase/functions").HttpsCallable<{
    uid: string;
    page: string;
    feedback: string;
}, boolean>;
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
 * Gets all games in the next week.
 * @param date
 * @returns
 */
export declare const getGamesInNextMonth: (date: Date) => Promise<ontology.GameByDatelike[]>;
/**
 * Gets all games in the next week.
 * @param date
 * @returns
 */
export declare const getGamesInNextMonthTable: (date: Date) => Promise<{
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
export declare const getPlayers: (team: ontology.Teamlike) => Promise<ontology.Playerlike[]>;
export declare const confirmTos: (id: string) => Promise<boolean>;
export declare const getConfirmedTos: (id: string) => Promise<boolean>;
/**
 * Submits feedback.
 * @param args
 * @returns
 */
export declare const submitFeedback: (args: {
    uid: string;
    page: string;
    feedback: string;
}) => Promise<boolean>;
