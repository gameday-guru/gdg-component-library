import { Button } from '../../unary';
import React, {FC, ReactElement, useState} from 'react';
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Viusagelike } from '../../../../util/viusage/primary';
import { Wrapper } from '../../../output';
import { generate } from 'shortid';

export const CROPDOWN_CLASSNAMES : string[] = [ 
    
];
export const CROPDOWN_STYLE : React.CSSProperties = {
    display : "grid",
    gridTemplateColumns : "1fr",
    position : "relative",
};

export type CropdownProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : Viusagelike;
    options ? : {
        [key : string] : React.ReactNode;
    }
    Up ? : React.ReactNode;
    Down ? : React.ReactNode;
    selected ? : string;
    handleOptionSelect ? : (which : string)=>Promise<void>;
};

export const Cropdown : FC<CropdownProps>  = (props) =>{

    const _viusage = props.viusage||"wrap";

    const [down, setDown] = useState(false);

    const _Up = props.Up||<ChevronUp/>;
    const _Down = props.Down||<ChevronDown/>;

    const handleToggle = async ()=>setDown(!down);

    const _Selected = props.options?.[props.selected||""];

    const _Options = Object.entries(props.options||{}).map(([key, value])=>{

        const handleClick = async ()=>{
            if(props.handleOptionSelect)
                props.handleOptionSelect(key);
        }

        return <Button 
        key={generate()}
        viusage={_viusage}
        style={{
            borderRadius : 0
        }} onClick={handleClick} div>
            {value}
        </Button>
    });

    return (
        <Wrapper
        viusage={_viusage}
        classNames={[...!props.overrideClasses ? CROPDOWN_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? {
            ...CROPDOWN_STYLE,
            borderTopLeftRadius : "8px",
            borderTopRightRadius : "8px",
            borderBottomLeftRadius : !down ? "8px" : undefined,
            borderBottomRightRadius : !down ? "8px" : undefined
        } : {}, ...props.style}}>
            <div className='rounded' style={{
                display : "grid",
                gridTemplateColumns : "10fr 1fr",
                overflow : "hidden",
                alignContent : "center",
                alignItems : "center"
            }}>
                <div>
                    {_Selected}
                </div>
                <Button viusage={_viusage} div style={{
                    borderRadius : 0,
                    justifyContent : "center",
                    justifyItems : "center"
                }} onClick={handleToggle}>
                    {down ? _Up : _Down}
                </Button>
            </div>
            {down &&<Wrapper 
            viusage={_viusage}
            style={{
                position : "absolute",
                top : "100%",
                width : "100%",
                overflow : "scroll",
                borderBottomLeftRadius : "8px",
                borderBottomRightRadius : "8px",
                maxHeight : "100px",
                zIndex : 2000
            }}>
               
                    {_Options}
            
            </Wrapper>}
        </Wrapper>
    )
};