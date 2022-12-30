import React, {FC, ReactElement, useState} from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

export const CAROUSEL_CLASSNAMES : string[] = [ 
    "grid",
    "items-center",
    "p-4"
];
export const CAROUSEL_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr"
};

export const CAROUSEL_CHEVRON_CLASSNAMES : string[] = [ 
    "cursor-pointer",
    "gcr"
];

export type CarouselProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    Entries ? : React.ReactNode[];
    // TODO: bind inner callbacks to event such that they are cancellable
    onLeft ? : (e : React.MouseEvent, oldIndex : number, newIndex : number)=>void;
    onRight ? : (e : React.MouseEvent, oldIndex : number, newIndex : number)=>void;
    size ? : number;
    Label ? : React.ReactNode;
    position ? : "top" | "bottom" | "middle";
};

export const Carousel : FC<CarouselProps>  = (props) =>{

    const [index, setIndex] = useState(0);

    const handleLeftChevronClick = (e: React.MouseEvent)=>{
        let newIndex = index -1;
        if(newIndex < 0 || newIndex > (props.Entries?.length ? props.Entries.length - 1 : 0)) 
            newIndex = props.Entries?.length ? props.Entries.length - 1 : 0;
        props.onLeft && props.onLeft(e, index, newIndex);
        setIndex(newIndex);

    };

    const handleRightChevronClick = (e : React.MouseEvent)=>{
        let newIndex = index + 1;
        if(newIndex < 0 || newIndex > (props.Entries?.length ? props.Entries.length - 1 : 0))  
            newIndex = 0;
        props.onLeft && props.onLeft(e, index, newIndex);
        setIndex(newIndex);
    };

    return (
        <div
        className={[...!props.overrideClasses ? CAROUSEL_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? CAROUSEL_STYLE : {}, ...props.style}}>
            <div className='grid items-center' style={{
                width : "100%",
                gridTemplateColumns : '1fr 8fr 1fr'
            }}>
                <div>
                <ChevronLeft className={CAROUSEL_CHEVRON_CLASSNAMES.join(" ")} size={props.size} onClick={handleLeftChevronClick}/>
                </div>
                <div style={{
                    display : "flex",
                    justifyItems : "center",
                    justifyContent : "center"
                }}>
                    {props.Label}
                </div>
                <div style={{
                    display : "flex",
                    justifyItems : "right",
                    justifyContent : "right"
                }}>
                    <ChevronRight className={CAROUSEL_CHEVRON_CLASSNAMES.join(" ")} size={props.size} onClick={handleRightChevronClick}/>
                </div>
            </div>
            <br/>
            <div>
                {(props.Entries||[])[index]}
            </div>
        </div>
    )
};