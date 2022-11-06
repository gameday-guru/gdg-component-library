import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { Dotousel } from '../../../../components/navigation/panels';
import { GradientOverlay } from '../../../../components/output/containers/GradientOverlay/GradientOverlay';

export const NCAAB_MENS_BLOGS_CONTAINER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_BLOGS_CONTAINER_STYLE : React.CSSProperties = {
};

export const NCAAB_MENS_BLOGS_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_BLOGS_INNER_STYLE : React.CSSProperties = {
    height : "250px"
};

export type NcaabMensBlogsProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
};

export const NcaabMensBlogs : FC<NcaabMensBlogsProps>  = (props) =>{

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? NCAAB_MENS_BLOGS_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? NCAAB_MENS_BLOGS_CONTAINER_STYLE : {}, ...props.style}}>
                <div
                className={[...!props.overrideClasses ? NCAAB_MENS_BLOGS_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
                style={{...!props.overrideStyle ? NCAAB_MENS_BLOGS_INNER_STYLE : {}, ...props.style}}>
                    <Dotousel style={{
                        height : "100%"
                    }} Entries={[
                        <GradientOverlay style={{
                            height : "100%",
                            width : "100%"
                        }} viusage="navigate">
                            a
                        </GradientOverlay>
                    ]}/>
                </div>
        </Wrapper>
    )
};