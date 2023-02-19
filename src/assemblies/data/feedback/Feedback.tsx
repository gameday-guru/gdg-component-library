import React, {FC, ReactElement, useState} from 'react';
import { Button } from '../../../components';
import { useSupportedMedia } from '../../../util/media/useSupportedMedia';

export const FEEDBACK_CLASSNAMES : string[] = [
    "grid",
    "gap-2",
    "rounded",
    "p-4"
 ];
export const FEEDBACK_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",

};

export type FeedbackProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    onFeedbackSubmit ?  : (feedback : string)=>Promise<void>;
};

export const Feedback : FC<FeedbackProps>  = (props) =>{

    const medium = useSupportedMedia();
    const [feedback, setFeedback] = useState("");

    const handleTextChange = async (e : React.ChangeEvent<HTMLTextAreaElement>)=>{

        const val = (e.target as HTMLTextAreaElement).value;
        setFeedback(val);

    };

    const handleFeedbackSubmit = async ()=>{
        props.onFeedbackSubmit && await props.onFeedbackSubmit(feedback);
    }

    return (

        <form
        onSubmit={(e)=>e.preventDefault()}
        className={[...!props.overrideClasses ? FEEDBACK_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? FEEDBACK_STYLE : {}, ...props.style}}>
            <textarea 
            placeholder='What do you think of this page?'
            style={{
                width : medium === "mobile" ? "100%" : 600,
                height : 300
            }}
            className='bg-drk-gray-500 text-white-500 border-white-500 p-4'
            onChange={handleTextChange}>
            </textarea>
            <Button 
            // viusage='success'
            onClick={handleFeedbackSubmit}>
                Submit Feedback
            </Button>
       
        </form>
    )
};