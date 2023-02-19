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

export const NCAAB_MENS_BLOGS_DESKTOP_CONTAINER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_BLOGS_DESKTOP_CONTAINER_STYLE : React.CSSProperties = {
    position : "relative"
};

export const NCAAB_MENS_BLOGS_DESKTOP_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_BLOGS_DESKTOP_INNER_STYLE : React.CSSProperties = {
    height : "300px",
    width : "100%"
};

export type NcaabMensBlogsDesktopProps = {
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

export const NcaabMensBlogsDesktop : FC<NcaabMensBlogsDesktopProps>  = (props) =>{

    const blogs : ontology.BlogArticlelike[] = props.blogs||Array(5).fill(ontology.MockBlogArticle);
    

    const blogEntries = blogs.map((blog)=>{

        const handleBlogClick = async ()=>{
            props.onBlogClick && props.onBlogClick(blog.uid);
        }
    

        return <div
            key={generate() + `x${blog.uid}`}
            style={{
                height : "100%",
                width : "100%",
                display : "grid",
                gridTemplateColumns : "1fr"
            }}><MockOver
                Content={
                    <Button
                    style={{
                        width : "100%",
                        height : "100%",
                        display : "grid",
                        alignContent : "center",
                        alignItems : "center",
                        gridTemplateRows : "4fr 1fr",
                        padding : 0
                    }}
                        viusage='backdrop'
                        onClick={handleBlogClick}>
                        <div 
                        className='rounded'
                        style={{
                             display : "flex",
                             alignContent : "center",
                             alignItems : "center",
                             justifyContent : "center",
                             justifyItems : "center",
                             overflow : "hidden",
                        }}>
                            {blog.thumbnail ? 
                            <img className='rounded'  style={{
                                minWidth : "100%",
                                minHeight : "100%",
                                height : "auto",
                                width : "auto",
                                objectFit : "cover"
                            }} src={blog.thumbnail}/>
                            : <Logo style={{
                                width : "50%"
                            }}/>
                            }
                        </div>
                        <Wrapper
                        style={{
                            opacity : .8,
                            margin : "1em"
                        }}
                        hoverAnimate
                        viusage='wrap'
                        classNames={['rounded p-4']}>
                            <h2>{blog.title||"Gameday Guru Blog"}</h2>
                        </Wrapper>
                    </Button>
                }
                dependencies={[blog]}/>
        </div>
    })

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? NCAAB_MENS_BLOGS_DESKTOP_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? NCAAB_MENS_BLOGS_DESKTOP_CONTAINER_STYLE : {}, ...props.style}}>
                <div
                className={[...!props.overrideClasses ? NCAAB_MENS_BLOGS_DESKTOP_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
                style={{...!props.overrideStyle ? NCAAB_MENS_BLOGS_DESKTOP_INNER_STYLE : {}, ...props.style}}>
                    <Dotousel classNames={["p-8"]} style={{
                        height : "100%",
                        width : "100%"
                    }} Entries={blogEntries}/>
                    <Wrapper
                    viusage='success'
                    style={{
                        position : "absolute",
                        left : "3em",
                        top : "3em",
                        height : 30,
                        width : 80,
                        padding : 4,
                        display : "grid",
                        alignContent : "center",
                        alignItems : "center",
                        justifyContent : "center",
                        justifyItems : "center"
                    }}
                    classNames={["rounded", "p-2"]}>
                        <span style={{
                            fontSize : 12
                        }} className='text-sm'>Blog</span>
                    </Wrapper>
                    <Wrapper
                    style={{
                        position : "absolute",
                        right : "3em",
                        top : "3em",
                        height : 30,
                        width : 40,
                        padding : 4,
                        display : "grid",
                        alignContent : "center",
                        alignItems : "center",
                        justifyContent : "center",
                        justifyItems : "center",
                        background : "#33333300"
                    }}
                        viusage='wrap'
                        classNames={["rounded", "p-2"]}>
                        <span style={{
                            fontSize : 12
                        }} className='text-sm'><FileText size={24}/></span>
                    </Wrapper>
                </div>
        </Wrapper>
    )
};