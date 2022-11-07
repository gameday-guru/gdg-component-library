import React, { FC } from 'react';
import { vistate, viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';
export declare const BUTTON_CLASSNAMES: string[];
export declare const BUTTON_STYLE: React.CSSProperties;
export declare type ButtonProps = {
    children?: React.ReactNode;
    /** Style injection. */
    style?: React.CSSProperties;
    /** Async onclick handler. */
    onClick?: (event: React.MouseEvent) => Promise<void>;
    /** Which visual state to enforce. */
    vistate?: vistate.primary.Vistatelike;
    /** Which visual usage to take advantage of. */
    viusage?: viusage.primary.Viusagelike;
    /** Whether to use an outline only. */
    outline?: boolean;
    /** Invert the color? */
    invert?: boolean;
    /** Vistate remapping. */
    vistateRemapping?: Partial<vistate.primary.VistateRemappinglike>;
    /** The time over which the button should decay from success or Error. */
    decay?: number;
    /** The states under which you may click the button and dispatch an action. */
    clickableStates?: true | vistate.primary.Vistatelike[];
    /**  Whether the button is disabled. */
    disabled?: boolean;
    /** The emphasis for the attribute. */
    emphasis?: Emphasislike;
    /** The class names to add. */
    classNames?: string[];
    /** Whether or not to overrid the classes  */
    overrideClasses?: boolean;
};
export declare const Button: FC<ButtonProps>;
/**
 * TODO: You may see this noted elsewhere. But, here is the first mention of it:
 * - We will likely need a client-side runtime for tailwind because...
 * - Dynamic generation of classes as performed above, is a desirable pattern...
 * - However, purgeCss will not be able to reduce our dependencies.
 * - The easiest way around this right now is to safelist a relatively small number of dependencies.
 * - However, in an SSR environment, we should be able to compile and/or retrieve on request with relative surety.
 * - We will want to use a stack algorithm similar to those used in page-replacement
 * systems.
 * - If we do rely on the client-side runtime making requests to a CSS compiler backend, then we need
 * to make sure that the browser does not repaint until the assets have been fetched.
 * - The above will likely introduce significant lags, so reducing non-collisions will remain important and an assumption of a large page size will be valid.
 */ 
