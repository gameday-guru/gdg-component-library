import React, {FC, ReactElement} from 'react';
import { motion } from 'framer-motion';
import { X } from "react-bootstrap-icons";

export const ANIMATED_ERROR_CLASSNAMES : string[] = [

];
export const ANIMATED_ERROR_STYLE : React.CSSProperties = {
};

export type AnimatedErrorProps = {
    style ? : React.CSSProperties;
    size ? : number;
};

export const AnimatedError : FC<AnimatedErrorProps>  = ({style, size}) =>{

    return (
        <div
        className={ANIMATED_ERROR_CLASSNAMES.join(" ")}
        style={{...ANIMATED_ERROR_STYLE, ...style}}>
            <motion.div
                style={{
                    overflow : "hidden",
                }}
                animate = {{
                    scale : [0, 1.5, 1.1, 1.0, 1.0],
                }}
                transition={{
                    ease : "easeInOut",
                    duration : .4
                }}>
                <X size={size}/>
            </motion.div>
        </div>
    )
};