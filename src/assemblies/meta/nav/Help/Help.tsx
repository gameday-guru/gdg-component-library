import React, {FC, ReactElement, useState} from 'react';
import { QuestionCircle } from 'react-bootstrap-icons';
import { Modal } from '../../../../components/output/containers/modal/Modal';
import { Feedback } from '../../../data/feedback/Feedback';


export const HELP_CLASSNAMES : string[] = [ 
    "flex",
    "cursor-pointer",
];
export const HELP_STYLE : React.CSSProperties = {
    alignContent : "center",
    alignItems : "center"
};

export type HelpProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
};

export const Help : FC<HelpProps>  = (props) =>{

    const [modal, setModal] = useState(false);
    const handleOpen = ()=>{
        setModal(true);
    }
    const handleClose = ()=>{
        setModal(false);
    }

    const onFeedbackSubmit = async (feedback : string) : Promise<void>=>{
        props.onFeedbackSubmit && await props.onFeedbackSubmit(feedback);
        handleClose();
    };

    return (
        <div
        className={[...!props.overrideClasses ? HELP_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? HELP_STYLE : {}, ...props.style}}>
            <div onClick={handleOpen} style={{
                display : "flex",
                alignContent : "center",
                alignItems : "center"
            }}>
                <QuestionCircle/>&emsp;&emsp;<span className="hover:underline">Help</span>
            </div>
            <Modal 
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                }}
                open={modal} onClose={handleClose}>
                <Feedback onFeedbackSubmit={onFeedbackSubmit}/>
            </Modal>
        </div>
    )
};