import { Emphasislike } from "./emphasis";

export type Colorlike = "gameday-green" 
    | "gold" 
    | "salmon" 
    | "sun" 
    | "bright-blue" 
    | "ocean-blue" 
    | "clay" 
    | "white" 
    | "black" 
    | "light-gray" 
    | "mid-gray" 
    | "drk-gray";

export type SemanticColorlike = "error" 
    | "warning"
    | "success"
    | "info"
    | "link";

export type AllColorlike = Colorlike | SemanticColorlike;

export type FullColorlike = `${AllColorlike}-${Emphasislike}`;