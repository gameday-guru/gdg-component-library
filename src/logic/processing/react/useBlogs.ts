import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";

export const useBlogs = () : {

    getBlogArticles : Processorlike['getBlogArticles']

}=>{

    const {
        get : _getBlogArticles
    } = useMultiPowerStore(MainDatabase.multiListeners.blogs);

    const getBlogArticles = ()=>_getBlogArticles(undefined);


    return {
        getBlogArticles
    }

}