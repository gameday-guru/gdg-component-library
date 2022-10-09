import React, {FC, ReactElement, useState} from 'react';
import { viusage } from '../../../../util';
import { getViusageColor } from '../../../../util/color/viusage';
import { Emphasislike } from '../../../../util/color/emphasis';
import { getReadableTextColor } from '../../../../util/color/inversion/inversion';

export const DOTOUSEL_CLASSNAMES : string[] = [
    "relative",
    "flex",
    "justify-items-center",
    "justify-content-center"
];
export const DOTOUSEL_STYLE : React.CSSProperties = {
    justifyContent : "center",
    justifyItems : "center"
};


export const DOTOUSEL_NVA_WRAPPER_CLASSNAMES : string[] = [
    "flex",
    "absolute",
    "m-auto",
    "bottom-1/4",
    "gap-4"
];

export type DotouselProps = {
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    Entries ? : React.ReactNode[];
    size ? : number;
    viusage ? : viusage.primary.Viusagelike;
    emphasis ? : Emphasislike
};

export const Dotousel : FC<DotouselProps>  = (props) =>{

    const [index, setIndex] = useState(0);
    const primaryColor = getViusageColor(props.viusage);
    const emphasis = props.emphasis||500;
    const [secondaryColor, secondaryEmphasis] = getReadableTextColor([primaryColor, emphasis]);

    return (
        <div
        className={[...!props.overrideClasses ? DOTOUSEL_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? DOTOUSEL_STYLE : {}, ...props.style}}>
            {props.Entries && props.Entries[index]}
            <div className={DOTOUSEL_NVA_WRAPPER_CLASSNAMES.join(" ")}>
                {/**TODO: this should probably be refactored out into it's own component. */}
                {(props.Entries||[]).map((Entry, i)=>{
                    return <div 
                    key={i}
                    onClick={()=>setIndex(i)}
                    className={[
                        "gcr",
                        "cursor-pointer",
                        "rounded-full",
                        ...index > i - 1  ? [
                            `bg-${primaryColor}-${emphasis}`
                        ] : [
                            "border",
                            `bg-${secondaryColor}-${secondaryEmphasis}`,
                            `border-${primaryColor}-${emphasis}`
                        ]
                    ].join(" ")}
                    style={{
                        height : props.size||10,
                        width : props.size||10
                    }}>
                    </div>
                })}
            </div>
        </div>
    )

};