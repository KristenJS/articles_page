import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {IArticle} from "../types/types";
import ArticleList from "./ArticleList";
import ArticleFilter from "./ArticleFilter";
import {useArticles} from "../hooks/useArticles";
import Loader from "./Loader";

const HomePage:FC = () => {
    const [articles, setArticles] = useState<IArticle[]>([])
    const [filter, setFilter] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false);
    const filteredArticles = useArticles(articles, filter);

    useEffect(() => {
        fetchArticles()
    }, [])

    async function fetchArticles() {
        try {
            setIsLoading(true)
            const response = await axios.get<IArticle[]>('https://api.spaceflightnewsapi.net/v3/articles?_limit=100')
            setArticles(response.data)
        } catch (e) {
            alert(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='container'>
            {isLoading
                ? <Loader/>
                :
                <>
                    <ArticleFilter filter={filter} setFilter={setFilter}/>
                    <ArticleList articles={filteredArticles} value={filter}/>
                </>
            }
        </div>
    );
};

export default HomePage;
