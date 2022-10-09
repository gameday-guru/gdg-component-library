import { vistate } from "../..";
import { AllColorlike } from "../color";

export type ColorVistateMaplike = {
    [key in vistate.primary.Vistatelike] : AllColorlike
}