import { BlogArticlelike, BlogArticleTablelike } from "../ontology";
import axios from "axios";

export const getBlogArticles = async () : Promise<BlogArticlelike[]> =>{
    return JSON.parse((await axios.get(
        `${import.meta.env.VITE_CMS_PATH}/api/blog-articles`,
    )).data)["data"]; // TODO : fi 
}

export const getBlogArticle = async (id : string) : Promise<BlogArticlelike> =>{
    return JSON.parse((await axios.get(
        `${import.meta.env.VITE_CMS_PATH}/api/blog-articles/${id}`
    )).data)["data"];
}

export const getBlogArticleTable = async () : Promise<BlogArticleTablelike> =>{

    const blogs : any[] = (await axios.get(
        `${import.meta.env.VITE_CMS_PATH}/api/blog-articles`,
    )).data["data"];

    const table : BlogArticleTablelike = {};
    for(const article of blogs)
        table[article["attributes"].uid] = article["attributes"];
    return table;

}