import { BlogArticlelike } from "../ontology";
import axios from "axios";

export const getBlogArticles = async () : Promise<BlogArticlelike[]> =>{
    return JSON.parse((await axios.post(
        `${import.meta.env.VITE_CMS_PATH}/api/blog-articles`
    )).data)["data"];
}

export const getBlogArticle = async (id : string) : Promise<BlogArticlelike> =>{
    return JSON.parse((await axios.post(
        `${import.meta.env.VITE_CMS_PATH}/api/blog-articles/${id}`
    )).data)["data"];
}