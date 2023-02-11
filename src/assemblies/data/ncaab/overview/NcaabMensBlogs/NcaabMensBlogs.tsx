import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology, viusage } from '../../../../../util';
import { Dotousel } from '../../../../../components/navigation/panels';
import { GradientOverlay } from '../../../../../components/output/containers/GradientOverlay/GradientOverlay';
import { MockOver } from '../../../../../components/output/MockOver';
import { generate } from 'shortid';
import { Logo } from '../../../../../components/output/icons/Logo';
import { Button } from '../../../../../components';
import { display, padding } from '@mui/system';
import { FileText } from "react-bootstrap-icons";
import { useSupportedMedia } from '../../../../../util/media/useSupportedMedia';
import { NcaabMensBlogsMobile } from './NcaabMensBlogsMobile';
import { NcaabMensBlogsDesktop } from './NcaabMensBlogsDesktop';

export const NCAAB_MENS_BLOGS_CONTAINER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_BLOGS_CONTAINER_STYLE : React.CSSProperties = {
    position : "relative"
};

export const NCAAB_MENS_BLOGS_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_BLOGS_INNER_STYLE : React.CSSProperties = {
    height : "300px",
    width : "100%"
};

export type NcaabMensBlogsProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    blogs ? : ontology.BlogArticlelike[];
    onBlogClick ? : (id : string)=>Promise<void>;
};

export const NcaabMensBlogs : FC<NcaabMensBlogsProps>  = (props) =>{

    const medium = useSupportedMedia();

    switch (medium) {

        case "mobile" : return <NcaabMensBlogsMobile {...props}/>;
        default : return <NcaabMensBlogsDesktop {...props}/>

    }

};