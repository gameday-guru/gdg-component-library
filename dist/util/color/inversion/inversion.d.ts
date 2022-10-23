import { Colorlike, FullColorlike, AllColorlike } from "../color";
import { Emphasislike } from "../emphasis";
export declare type ColorVistateInversionMaplike = {
    readonly [key in FullColorlike]: readonly [Colorlike, Emphasislike];
};
export declare const ReadableText: ColorVistateInversionMaplike;
/**
 * Gets a readable text color for a given volor and emphasis.
 * @param color is the color and emphasis tuple.
 * @returns a tuple for the readable text color
 */
export declare const getReadableTextColor: (color: [AllColorlike, Emphasislike]) => readonly [
    AllColorlike,
    Emphasislike
];
export declare const PairingBackground: ColorVistateInversionMaplike;
/**
 * Gets a background the pairs well with another particular color and background.
 * @param color is the color and emphasis tuple.
 * @returns a tuple for the readable text color
 */
export declare const getPairingBackground: (color: [AllColorlike, Emphasislike]) => readonly [
    AllColorlike,
    Emphasislike
];
