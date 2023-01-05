import React, {FC, ReactElement} from 'react';
import { Wrapper } from '../../../../components';
import { Logo } from '../../../../components/output/icons/Logo';

export const BLOG_ARTICLE_HEADER_CLASSNAMES : string[] = [
    "grid"
 ];
export const BLOG_ARTICLE_HEADER_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr 1fr",
    alignContent : "center",
    alignItems : "center"
};

export type BlogArticleHeaderProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
};

export const BlogArticleHeader : FC<BlogArticleHeaderProps>  = (props) =>{

    return (
        <Wrapper
        viusage='backdrop'
        classNames={[...!props.overrideClasses ? BLOG_ARTICLE_HEADER_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? BLOG_ARTICLE_HEADER_STYLE : {}, ...props.style}}>
            <div>
                <Logo style={{
                    width : 200
                }}/>
            </div>
            <div>
                <h2 style={{
                    fontSize : 42,
                    fontWeight : 600
                }}>Blogs</h2>
            </div>
        </Wrapper>
    )
};