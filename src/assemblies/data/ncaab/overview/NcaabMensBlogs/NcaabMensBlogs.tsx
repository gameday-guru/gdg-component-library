import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../../components';
import { ontology, viusage } from '../../../../../util';
import { Dotousel } from '../../../../../components/navigation/panels';
import { GradientOverlay } from '../../../../../components/output/containers/GradientOverlay/GradientOverlay';
import { MockOver } from '../../../../../components/output/MockOver';
import { generate } from 'shortid';
import { Logo } from '../../../../../components/output/icons/Logo';
import { Button } from '../../../../../components';

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
    blogs ? : ontology.BlogArticlelike[];
    onBlogClick ? : (id : string)=>Promise<void>;
};

export const NcaabMensBlogs : FC<NcaabMensBlogsProps>  = (props) =>{

    const blogs : ontology.BlogArticlelike[] = props.blogs||Array(5).fill(ontology.MockBlogArticle);
    

    const blogEntries = blogs.map((blog)=>{

        const handleBlogClick = async ()=>{
            props.onBlogClick && props.onBlogClick(blog.uid);
        }

        return <GradientOverlay 
            key={generate()}
            style={{
                height : "100%",
                width : "100%"
            }} viusage="navigate"><MockOver
                Content={
                    <Button 
                        classNames={['p-4']}
                        viusage='backdrop'
                        onClick={handleBlogClick}>
                        {blog.thumbnail ? 
                        <img width={200} src={blog.thumbnail}/>
                        : <Logo/>
                        }
                        <h2 className='text-lg'>{blog.title||"Gameday Guru Blog"}</h2>
                    </Button>
                }
                dependencies={[blog]}/>
        </GradientOverlay>
    })

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
                    }} Entries={blogEntries}/>
                </div>
        </Wrapper>
    )
};