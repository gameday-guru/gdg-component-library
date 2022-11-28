import React, { FC } from 'react';
import { ModalProps as MuiModalProps } from '@mui/material';
export declare const MODAL_CLASSNAMES: string[];
export declare const MODAL_STYLE: React.CSSProperties;
export declare type ModalProps = MuiModalProps & {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    right?: boolean;
    bottom?: boolean;
    gap?: number;
};
export declare const Modal: FC<ModalProps>;
