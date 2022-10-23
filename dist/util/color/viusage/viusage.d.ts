import { viusage } from "../..";
import { AllColorlike } from "../color";
export declare type ColorViusageMaplike = {
    [key in viusage.primary.Viusagelike]: AllColorlike;
};
export declare const ViusageMap: ColorViusageMaplike;
export declare const getViusageColor: (usage?: viusage.primary.Viusagelike) => AllColorlike;
