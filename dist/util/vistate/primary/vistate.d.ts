export declare type Vistatelike = "default" | "loading" | "err" | "success" | "hinting" | "helping";
export declare type VistateRemappinglike = {
    [key in Vistatelike]: Vistatelike;
};
