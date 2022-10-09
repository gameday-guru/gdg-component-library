export type Vistatelike = "default" 
    | "loading" 
    | "err" 
    | "success" 
    | "hinting" 
    | "helping";

export type VistateRemappinglike = {[key in Vistatelike] : Vistatelike}