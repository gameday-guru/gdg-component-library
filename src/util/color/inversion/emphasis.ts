import { Emphasislike } from "../emphasis";

export const getInverseColorEmphasis = (
    emphasis : Emphasislike
) : Emphasislike=>((emphasis + 300) % 900) as Emphasislike; 