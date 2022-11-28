import React, { FC } from 'react';
import { vistate, viusage } from '../../../../util';
import { Emphasislike } from '../../../../util/color/emphasis';
export declare const TEXT_INPUT_CLASSNAMES: string[];
export declare const TEXT_INPUT_STYLE: React.CSSProperties;
export declare type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    fill?: boolean;
    onSubmit?: (text: string) => Promise<void>;
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
    inputType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
};
export declare const TextInput: FC<TextInputProps>;
