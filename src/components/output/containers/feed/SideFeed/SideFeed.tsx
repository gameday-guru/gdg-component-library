import React, {FC, ReactElement} from 'react';

export const SIDE_FEED_CLASSNAMES : string[] = [ 
    "grid",
    "items-left",
    "content-left",
    "rounded-lg",
    "border-2",
    "p-8",
    "overflow-y-hidden",
    "overflow-x-scroll",
    // TODO: fix tailwind JIT so that these are actually applied
    "gap-8",
    "shadow"
];
export const SIDE_FEED_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    gridTemplateRows : "1fr 5fr"
};

export const SIDE_FEED_INNER_CLASSNAMES : string[] = [ 
    "h-36",
    "overflow-y-hidden",
    "overflow-x-scroll",
    // TODO: fix tailwind JIT so that these are actually applied
    "flex",
    "items-center",
    // 
    "gap-8"
];
export const SIDE_FEED_INNER_STYLE : React.CSSProperties = {

};


export type SideFeedProps = {
    Header ? : React.ReactNode;
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
};

/**
 * Produces a SideFeed React Node.
 * @param props 
 * @returns 
 */
export const SideFeed : FC<SideFeedProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? SIDE_FEED_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? SIDE_FEED_STYLE : {}, ...props.style}}>
            <div style={{
                textAlign : "left"
            }}>
                {props.Header}
            </div>
            <div 
            className={SIDE_FEED_INNER_CLASSNAMES.join(" ")}
            style={SIDE_FEED_INNER_STYLE}>
                {props.children}
            </div>
        </div>
    )
};