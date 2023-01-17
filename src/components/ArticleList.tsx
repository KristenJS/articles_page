import React, {FC} from 'react';
import { IArticle} from "../types/types";
import ArticleItem from "./ArticleItem";
import {useNavigate} from "react-router-dom";
import {Box, Divider, Grid} from "@mui/material";

interface ArticleListProps {
    articles: IArticle[],
    value: string
}

const ArticleList: FC<ArticleListProps> = ({articles, value}) => {
    const navigate = useNavigate()
    return (
        <Box sx={{ width: '100%' }} className='box'>
            <p className='boxResult'>Results: {articles.length}</p>
            <Divider/>
            <Grid className='grid' container rowSpacing={5.6} columnSpacing={5.6}>
                {articles.map(article => (
                    <Grid item key={article.id} xs={12} sm={6} md={4} >
                        <ArticleItem value={value} article={article} onClick={(user) => navigate('/articles/' + article.id)}/>
                    </Grid>
                    )
                )}
            </Grid>
        </Box>
    );
};

export default ArticleList;