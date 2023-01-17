import React from 'react';
import {useMemo} from "react";
import {IArticle} from "../types/types";

export const useArticles = (articles: IArticle[], filter: string) => {
    const searchedPosts = useMemo(() => {
        return articles.filter(article => article.title.toLowerCase().includes(filter.trim().toLowerCase()) || article.summary.toLowerCase().includes(filter.trim().toLowerCase()))
    }, [filter, articles])
    return searchedPosts
};
