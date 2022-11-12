import { viusage } from "../..";
import { AllColorlike } from "../color";

export type ColorViusageMaplike = {
    [key in viusage.primary.Viusagelike] : AllColorlike
}


export const ViusageMap : ColorViusageMaplike = {
    // TODO add more swatches to the desing system to make these more distinct
    do : "bright-blue",
    get : "ocean-blue",
    info : "info",
    getUserInfo : "clay",
    navigate : "gdg",
    find : "gold",
    sort : "drk-gray",
    install : "bright-blue",
    getHelp : "warning",
    comment : "success",
    wrap : "drk-gray",
    wrapInvert : "white",
    backdrop : "black",
    error : "error",
    success : "success"
}

export const getViusageColor = 
    (usage : viusage.primary.Viusagelike = "do") 
    : AllColorlike => ViusageMap[usage]||ViusageMap["do"];