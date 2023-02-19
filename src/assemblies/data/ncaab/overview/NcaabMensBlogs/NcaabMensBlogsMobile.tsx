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
import { ellipsize } from '../../../../../util/text/ellipsize';

export const NCAAB_MENS_BLOGS_MOBILE_CONTAINER_CLASSNAMES : string[] = [ 
];
export const NCAAB_MENS_BLOGS_MOBILE_CONTAINER_STYLE : React.CSSProperties = {
    position : "relative",
    paddingTop : 10
};

export const NCAAB_MENS_BLOGS_MOBILE_INNER_CLASSNAMES : string[] = [ ];
export const NCAAB_MENS_BLOGS_MOBILE_INNER_STYLE : React.CSSProperties = {
    width : "100%"
};

export type NcaabMensBlogsMobileProps = {
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

export const NcaabMensBlogsMobile : FC<NcaabMensBlogsMobileProps>  = (props) =>{

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
                        justifyContent : "center",
                        justifyItems : "center",
                        gridTemplateColumns : "1fr 6fr",
                        padding : 0
                    }}
                        // classNames={['p-4']}
                        viusage='backdrop'
                        onClick={handleBlogClick}>
                            <div style={{
                                display : "flex",
                                alignContent : "left"
                            }}>
                                {blog.thumbnail ? 
                                    <img 
                                    // className='rounded-full'
                                    style={{
                                        // borderRadius : "100%"
                                    }}  width={"100%"} src={blog.thumbnail}/>
                                    : <Logo style={{
                                        width : "50%",
                                        borderRadius : "100%"
                                    }}/>
                                }
                            </div>
                            <div style={{
                                width : "100%"
                            }}>
                                <h2>{ellipsize(blog.title||"Gameday Guru Blog", 25)}</h2>
                            </div>
                    </Button>
                }
                dependencies={[blog]}/>
        </div>
    })

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            classNames={[...!props.overrideClasses ? NCAAB_MENS_BLOGS_MOBILE_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? NCAAB_MENS_BLOGS_MOBILE_CONTAINER_STYLE : {}, ...props.style}}>
                <div
                className={[...!props.overrideClasses ? NCAAB_MENS_BLOGS_MOBILE_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
                style={{...!props.overrideStyle ? NCAAB_MENS_BLOGS_MOBILE_INNER_STYLE : {}, ...props.style}}>
                    <h2 className='text-xl'>Blogs</h2>
                    <Dotousel classNames={["p-8"]} style={{
                        height : "100px",
                        width : "100%"
                    }} Entries={blogEntries}/>
                </div>
        </Wrapper>
    )
};