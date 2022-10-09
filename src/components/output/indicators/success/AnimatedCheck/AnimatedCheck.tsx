import React, {FC, ReactElement} from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "react-bootstrap-icons";

export const ANIMATED_CHECK_CLASSNAMES : string[] = [

];
export const ANIMATED_CHECK_STYLE : React.CSSProperties = {
    display : "flex",
    alignContent : "center",
    justifyContent : "center",
    alignItems : "center",
    justifyItems : "center",
};

export type AnimatedCheckProps = {
    style ? : React.CSSProperties
    size ? : number
};

export const AnimatedCheck : FC<AnimatedCheckProps>  = ({style, size}) =>{

    return (
        <div
        className={[...ANIMATED_CHECK_CLASSNAMES,].join(" ")}
        style={{...ANIMATED_CHECK_STYLE, ...style}}>
            <motion.div 
            initial={{
                width : 0
            }}
            style={{
                overflow : "hidden",
                position : "relative",
            }}
            animate = {{
                width : "auto",
            }}
            transition={{
                ease : "easeInOut",
                duration : .3
            }}>
                <Check size={size}/>
            </motion.div>
        </div>
    )
};