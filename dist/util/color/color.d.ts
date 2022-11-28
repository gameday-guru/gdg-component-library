import { Emphasislike } from "./emphasis";
export declare type Colorlike = "gameday-green" | "gold" | "salmon" | "sun" | "bright-blue" | "ocean-blue" | "clay" | "white" | "black" | "light-gray" | "mid-gray" | "drk-gray" | "gdg" | "default";
export declare type SemanticColorlike = "error" | "warning" | "success" | "info" | "link";
export declare type AllColorlike = Colorlike | SemanticColorlike;
export declare type FullColorlike = `${AllColorlike}-${Emphasislike}`;
